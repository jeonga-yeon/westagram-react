import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <main class="container">
      <div class="wrapper">
        <div class="login-wrapper">
          <div class="login">
            <h1 class="login-title">Westagram</h1>
            <div class="login-id__wrapper">
              <input
                placeholder="전화번호, 사용자 이름 또는 이메일"
                type="text"
                class="login-id"
              />
            </div>
            <div class="login-password__wrapper">
              <input
                class="login-password"
                placeholder="비밀번호"
                type="password"
              />
            </div>

            <button class="login-button">로그인</button>
            <span class="find-password">비밀번호를 잊으셨나요?</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
