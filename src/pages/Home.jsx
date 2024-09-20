import React from "react";
import { GoHome } from "react-icons/go";  // Home 아이콘
import { AiOutlinePlusCircle } from 'react-icons/ai';  // Plus 아이콘
import { FaUser } from "react-icons/fa";  // User 아이콘
import { FiEdit, FiTrash } from "react-icons/fi";  // 펜과 휴지통 아이콘
import { useLocation, Link } from "react-router-dom";  // 페이지 이동을 위한 Router 도구

const Feed = ({ feedList }) => {
  const location = useLocation();  // 현재 경로 가져오기

  return (
    <div className="bg-black min-h-screen text-white">
      {/* 상단 로고 및 로그아웃 버튼 */}
      <header className="p-4 relative">
        <img src="/images/logo.svg" alt="Churead 로고" className="w-32 mx-auto" />
        <button className="bg-white text-black px-4 py-2 rounded-lg absolute right-4 top-1/2 transform -translate-y-1/2">
          로그아웃
        </button>
      </header>

      {/* 피드 리스트 */}
      <div>
        {feedList.map((feed) => (
          <div key={feed.id} className="feed-item p-4 border-b border-gray-300">
            <div className="flex justify-between items-start">
              {/* 프로필 이미지 */}
              <img src={feed.userProfileImage} alt={feed.userName} className="w-10 h-10 rounded-full" />
              {/* 사용자 이름 및 게시물 내용 */}
              <div className="flex-1 ml-4">
                <p className="font-bold">{feed.userName}</p>
                <p className="text-gray-400">{feed.churead}</p>
              </div>
              {/* 펜과 휴지통 아이콘 */}
              <div className="flex space-x-2">
                <FiEdit className="text-gray-400" size={18} />  {/* 수정 아이콘 */}
                <FiTrash className="text-gray-400" size={18} />  {/* 삭제 아이콘 */}
              </div>
            </div>
            {/* 좋아요 개수 */}
            <p className="mt-2 text-gray-400">❤️ {feed.likeCount}</p>
          </div>
        ))}
      </div>

      {/* 하단 네비게이션 바 */}
      <nav className="fixed bottom-0 left-0 right-0 p-4 bg-black flex justify-around">
        <Link to="/home">
          <GoHome size={24} className={location.pathname === "/home" ? "text-white" : "text-gray-500"} />  {/* Home 아이콘 */}
        </Link>
        <Link to="/post">
          <AiOutlinePlusCircle size={24} className={location.pathname === "/post" ? "text-white" : "text-gray-500"} />  {/* Plus 아이콘 */}
        </Link>
        <Link to="/profile">
          <FaUser size={24} className={location.pathname === "/profile" ? "text-white" : "text-gray-500"} />  {/* User 아이콘 */}
        </Link>
      </nav>
    </div>
  );
};

export default Feed;
