import React from "react";

const InputField = ({ typeInput, field, value, handleChange }) => {
  const placeholders = {
    name: "Name", 
    email: "Email", 
    password: "Password"
  };

  const onChange = (event) => {
    handleChange(event.target.value);  // 부모 컴포넌트에 입력 값을 전달
  };

  return (
    <input
      type={typeInput}
      name={field}
      value={value}  // 입력 값 연결
      placeholder={placeholders[field.toLowerCase()] || "Enter your value"}
      className="pl-2 text-xs block rounded-lg border border-blue-800 bg-neutral-700 w-full h-10 text-white"
      onChange={onChange}  // 입력 값이 바뀔 때 handleChange 함수 호출
    />
  );
};

export default InputField;
