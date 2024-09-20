import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegUser, FaUserAlt } from "react-icons/fa";  // 비활성/활성 프로필 아이콘 설정
import { GoHomeFill } from "react-icons/go";  // 활성화된 홈 아이콘
import { AiFillPlusCircle } from "react-icons/ai";  // 활성화된 Plus 아이콘

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();  // 현재 경로를 가져오기

  // NavList 배열을 사용하여 각 아이콘 설정 (기본 아이콘과 활성화된 아이콘)
  const navList = [
    {
      id: 1,
      to: "/home",
      icon: <GoHome size={24} />,  // 기본 Home 아이콘
      activeIcon: <GoHomeFill size={24} />  // 활성화된 Home 아이콘
    },
    {
      id: 2,
      to: "/post",
      icon: <AiOutlinePlusCircle size={24} />,  // 기본 Plus 아이콘
      activeIcon: <AiFillPlusCircle size={24} />  // 활성화된 Plus 아이콘
    },
    {
      id: 3,
      to: "/profile",
      icon: <FaRegUser size={24} />,  // 기본 User 아이콘 (진하지 않은 상태)
      activeIcon: <FaUserAlt size={24} />  // 활성화된 User 아이콘 (진한 상태)
    }
  ];

  const handleClick = (to) => {
    navigate(to);  // 클릭할 때 해당 경로로 이동
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 p-4 bg-black flex justify-around">
      <ul className="flex justify-around w-full">
        {navList.map(item => (
          <li key={item.id}>
            <button onClick={() => handleClick(item.to)}>
              {/* 현재 경로와 일치하는 경우 진한 아이콘 표시 */}
              {location.pathname === item.to ? item.activeIcon : item.icon}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
