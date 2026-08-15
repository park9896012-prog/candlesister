import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame } from 'lucide-react';

export const AdminLoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin');
      } else {
        setError(data.error || '로그인 실패');
      }
    } catch (err) {
      setError('서버 통신 오류');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#EAE5DC] w-full max-w-sm">
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#9E7D2E] mb-3">
            <Flame className="w-6 h-6 fill-[#D4AF37]/30" />
          </div>
          <h2 className="text-xl font-bold font-serif-kr text-[#1A1A1A]">관리자 로그인</h2>
        </div>
        
        {error && <div className="text-red-500 text-sm mb-4 text-center bg-red-50 p-2 rounded">{error}</div>}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#5C564C] mb-1">아이디</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-[#EAE5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C6D23]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#5C564C] mb-1">비밀번호</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-[#EAE5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C6D23]"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full py-2.5 bg-[#2C2C2C] text-white rounded-lg font-medium hover:bg-[#1A1A1A] transition-colors"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};
