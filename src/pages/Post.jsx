import React, { useState } from "react";
import Nav from "../components/Nav";  // Nav 컴포넌트 추가
import { useNavigate } from "react-router-dom";  // 페이지 이동을 위한 useNavigate 사용

const Post = ({ addNewPost }) => {
  const [content, setContent] = useState("");  // 글 내용을 상태로 관리
  const navigate = useNavigate();  // 페이지 이동을 위해 useNavigate 사용

  // 글 게시 처리 함수
  const handlePost = () => {
    // 새로운 게시물 객체 생성
    const newPost = {
      id: Date.now(),  // 고유한 ID 생성
      userName: "chutzrit",  // 작성자 이름
      userProfileImage: "./images/catcat.jpg",  // 프로필 이미지
      churead: content,  // 게시글 내용
      likeCount: 0  // 초기 좋아요 개수
    };

    addNewPost(newPost);  // 새로운 글을 추가하는 함수 호출
    navigate("/home");  // 게시 후 홈으로 이동
  };

  return (
    <div className="bg-black min-h-screen text-white p-4">
      {/* 상단 취소 및 새로운 스레드 */}
      <header className="flex justify-between items-center border-b border-gray-700 pb-4">
        <button className="text-gray-400" onClick={() => navigate("/home")}>취소</button>
        <h1 className="text-lg font-semibold">새로운 스레드</h1>
        <div></div> {/* 빈 div로 정렬 유지 */}
      </header>

      {/* 사용자 정보 및 입력 필드 */}
      <div className="mt-6 flex items-start space-x-4">
        <img
          src="./images/catcat.jpg"  // 프로필 이미지 경로
          alt="프로필 이미지"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <p className="text-sm mb-2">chutzrit</p>
          <textarea
            className="w-full bg-gray-800 text-white rounded-lg p-4"
            placeholder="문구를 작성하세요"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}  // 입력 값 업데이트
          ></textarea>
        </div>
      </div>

      {/* 하단 텍스트 및 게시 버튼 같은 줄에 배치 */}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-gray-500 text-base">누구에게나 답글 및 인용 허용</p>
        <button
          className="bg-white text-black py-2 px-6 rounded-lg"
          onClick={handlePost}  // 게시 버튼 클릭 시 글 추가
        >
          게시
        </button>
      </div>

      <Nav />  {/* 하단 네비게이션 바 */}
    </div>
  );
};

export default Post;
