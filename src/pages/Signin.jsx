import React, { useState } from "react";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

const Signin = () => {
  // 입력 값 관리를 위한 상태(state) 설정
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 입력값 변경 처리 함수
  const handleNameChange = (value) => {
    setName(value);  // name 상태 업데이트
  };

  const handleEmailChange = (value) => {
    setEmail(value);  // email 상태 업데이트
  };

  const handlePasswordChange = (value) => {
    setPassword(value);  // password 상태 업데이트
  };


  const handleSignup = (e) => {
    e.preventDefault();
    console.log("회원가입 정보:", { name, email, password });  // 입력한 정보 콘솔에 출력
  };
  

  return (
    <div className="grid place-content-center min-h-screen bg-black text-white">
      {/* 로고 */}
      <h1>
        <img className="ml-6 mb-4" src="./images/logo.svg" alt="churead 로고" />
      </h1>

      {/* 설명 텍스트 */}
      <h3 className="text-lg mb-4">Churead에서 소통해보세요</h3>

      {/* 회원가입 폼 */}
      <form id="signin-form" className="mt-2 text-center flex flex-col gap-4">
        <InputField
          typeInput="text"
          field="name"
          value={name}  // name 상태 값 전달
          handleChange={handleNameChange}  // 입력값 변경 처리 함수 전달
        />
        <InputField
          typeInput="email"
          field="email"
          value={email}  // email 상태 값 전달
          handleChange={handleEmailChange}  // 입력값 변경 처리 함수 전달
        />
        <InputField
          typeInput="password"
          field="password"
          value={password}  // password 상태 값 전달
          handleChange={handlePasswordChange}  // 입력값 변경 처리 함수 전달
        />
        <button className="bg-white text-black py-2 px-4 rounded-lg w-full mt-4">Create Account</button>
      </form>

      {/* 로그인 안내 */}
      <div className="mt-4">
        <p>이미 계정이 있으신가요?
          <Link to="/login" className="text-blue-400 hover:text-blue-600">
            로그인
          </Link>
        </p>
      </div>

      {/* 소셜 로그인 */}
      <div className="my-4">
        <p>or</p>
        <button className="bg-white text-gray-900 py-2 px-4 rounded-lg w-full mt-4 flex items-center justify-center border border-gray-300 hover:bg-gray-100">
          <img src="./images/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signin;
