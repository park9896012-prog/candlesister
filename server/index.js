import express from 'express';
import cors from 'cors';
import multer from 'multer';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import axios from 'axios';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// DB file path
const DB_FILE = path.join(__dirname, 'db.json');

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Ensure public/uploads exists
const uploadDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Ensure db.json exists
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ products: [] }), 'utf-8');
}

const readDB = () => JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
const writeDB = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Admin Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// ---------------- API ENDPOINTS ---------------- //

// Auth: Login
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  
  const ADMIN_USER = process.env.ADMIN_USER || 'admin';
  // Use a default hash for 'admin123' if not provided
  const ADMIN_PASS_HASH = process.env.ADMIN_PASS_HASH || '$2b$10$w8TToD1J5tU/uF8w1H4xOOQx80RHz81S8lGf7i48Ew/Tz13v8i.1i'; 

  if (username !== ADMIN_USER) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const match = await bcrypt.compare(password, ADMIN_PASS_HASH);
  if (!match) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '12h' });
  res.json({ token });
});

// Products: Get All
app.get('/api/products', (req, res) => {
  const db = readDB();
  res.json(db.products || []);
});

// Products: Add New (Protected)
app.post('/api/products', authenticateToken, (req, res) => {
  const db = readDB();
  const newProduct = {
    ...req.body,
    id: `prod-${Date.now()}`
  };
  
  // Ensure backward compatibility or format
  if (!newProduct.categories && newProduct.category) {
    newProduct.categories = [newProduct.category];
  }
  
  db.products.push(newProduct);
  writeDB(db);
  res.status(201).json(newProduct);
});

// Upload: Image (Protected)
app.post('/api/upload', authenticateToken, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ url: `/uploads/${req.file.filename}` });
});

// Scrape: Fetch metadata from URL (Protected)
app.post('/api/scrape', authenticateToken, async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    const $ = cheerio.load(data);
    
    const title = $('meta[property="og:title"]').attr('content') || $('title').text() || '';
    const description = $('meta[property="og:description"]').attr('content') || '';
    const image = $('meta[property="og:image"]').attr('content') || '';

    res.json({ title, description, image });
  } catch (error) {
    console.error('Scraping error:', error.message);
    res.status(500).json({ error: 'Failed to scrape URL' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
