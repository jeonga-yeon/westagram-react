import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/main');
  };
  return (
    <main className="container">
      <div className="wrapper">
        <div className="login-wrapper">
          <div className="login">
            <h1 className="login-title">Westagram</h1>
            <div className="login-id__wrapper">
              <input
                placeholder="전화번호, 사용자 이름 또는 이메일"
                type="text"
                className="login-id"
              />
            </div>
            <div className="login-password__wrapper">
              <input
                className="login-password"
                placeholder="비밀번호"
                type="password"
              />
            </div>
            <button className="login-button" onClick={handleLogin}>
              로그인
            </button>
            <span className="find-password">비밀번호를 잊으셨나요?</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
