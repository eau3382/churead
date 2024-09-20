import React from "react";
import Nav from "../components/Nav";  // Nav 컴포넌트를 불러와 재사용

const Profile = () => {
  return (
    <div className="bg-black min-h-screen text-white p-4">
      {/* 상단 헤더 */}
      <header className="p-4">
        <h1 className="text-lg font-semibold">Profile</h1>
      </header>

      {/* 프로필 페이지 내용 */}
      <div className="mt-6">
        <p>프로필을 입력해주세요.</p>
      </div>

      {/* 하단 네비게이션 바 */}
      <Nav />  {/* 재사용 가능한 Nav 컴포넌트 */}
    </div>
  );
};

export default Profile;
