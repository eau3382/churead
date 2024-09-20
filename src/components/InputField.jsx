import React from "react";

<<<<<<< HEAD
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
=======
const InputField = ({ type, field }) => {
  return (
    <input
      type={type}
      name={field}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
      className="block rounded-xl border border-gray-800 w-full bg-churead-gray-800 text-white placeholder-churead-gray-600 p-5"
>>>>>>> 3e0d30146d8b0fb61b02f621358c0b436dc07ea5
    />
  );
};

export default InputField;
