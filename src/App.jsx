import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Post from './pages/Post';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Profile from './pages/Profile';  // Profile 페이지 추가
import { initialfeedList } from './data/response';  // 피드 리스트 가져오기

function App() {
  // 글 목록을 상태로 관리
  const [feedList, setFeedList] = useState(initialfeedList);  

  // 새로운 글을 추가하는 함수
  const addNewPost = (newPost) => {
    setFeedList([newPost, ...feedList]);  // 새 글을 기존 글 목록의 앞에 추가
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home feedList={feedList} />} />
        <Route path="/post" element={<Post addNewPost={addNewPost} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />  {/* Profile 페이지 경로 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
