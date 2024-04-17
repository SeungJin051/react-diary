import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // 1. "/" : 모든 일기를 조회하는 페이지
import New from "./pages/New"; // 2. "/new" : 새로운 일기를 작성하는 페이지
import Diary from "./pages/Diary"; // 3. "/diary" : 일기를 상세히 조회하는 페이지
import Notfound from "./pages/Notfound";

function App() {
  return (
    // Routes 태그 안에는 Route 컴포넌트만 사용 가능, 밖에는 어떤 페이지든 간에 랜더링
    <>
      <div>Hello</div>
      <Routes>
        {/* path="주소", element={컴포넌트} | *은 path에 없는 페이지일 때 (와일드카드) */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
