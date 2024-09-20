import React, { useState } from "react";
import InputField from "../components/InputField";
import LoginButton from "../components/LoginButton";

const Login = () => {
  const [email, setEmail] = useState("");  // email 상태 관리
  const [password, setPassword] = useState("");  // password 상태 관리

  const handleEmailChange = (value) => {
    setEmail(value);  // 이메일 값 처리
  };

  const handlePasswordChange = (value) => {
    setPassword(value);  // 비밀번호 값 처리
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("로그인 정보:", { email, password });  // 로그인 정보 출력 (디버깅용)
  };

  return (
    <div className="grid place-content-center min-h-screen bg-gray-900 text-white">
      <h1>
        <img className="ml-6 mb-4" src="./images/logo.svg" alt="Churead 로고" />
      </h1>
      <h3 className="text-red">Churead에서 소통해보세요</h3>
      
      <form className="mt-2 text-center flex flex-col gap-2" onSubmit={handleLogin}>
        <InputField typeInput="text" field="email" handleChange={handleEmailChange} />
        <InputField typeInput="password" field="password" handleChange={handlePasswordChange} />
        <LoginButton category="login" />
      </form>

      <div className="mt-4">
        <p>계정이 없으신가요?</p>
        <a href="/signin" className="text-blue-400 hover:text-blue-600">가입하기</a>
      </div>
    </div>
  );
};

export default Login;
