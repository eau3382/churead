import React from "react";

const LoginButton = ({ category }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4 hover:bg-blue-600"
    >
      {category === "login" ? "Login" : "가입하기"}
    </button>
  );
};

export default LoginButton;
