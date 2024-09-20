import React from "react";

<<<<<<< HEAD
const LoginButton = ({ category }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4 hover:bg-blue-600"
    >
      {category === "login" ? "Login" : "가입하기"}
=======
const LoginButton = ({ category, text, onClick }) => {
  // logic
  // category: 'login', 'socialLogin'

  // view
  return (
    <button
      type={category === "login" ? "submit" : "button"}
      className={`p-5 ${
        category === "login"
          ? "bg-white text-churead-gray-500 w-full rounded-xl"
          : "w-full border border-churead-gray-300 border-opacity-15 rounded-2xl flex items-center justify-center gap-4"
      }`}
      onClick={onClick}
    >
      {category === "socialLogin" && (
        <img src="./images/google.svg" alt="google로고" />
      )}
      {text}
>>>>>>> 3e0d30146d8b0fb61b02f621358c0b436dc07ea5
    </button>
  );
};

export default LoginButton;
