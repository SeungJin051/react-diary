import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // 1. "/" : 모든 일기를 조회하는 페이지
import New from "./pages/New"; // 2. "/new" : 새로운 일기를 작성하는 페이지
import Diary from "./pages/Diary"; // 3. "/diary" : 일기를 상세히 조회하는 페이지
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import { useReducer } from "react";

// 프로젝트에서 사용할 일기 데이터 표현
const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];
// 테스트;
function reducer(state, action) {
  return state;
}
function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  return (
    <>
      {/* // Routes 태그 안에는 Route 컴포넌트만 사용 가능, 밖에는 어떤 페이지든
      간에 랜더링 // * 클라이언트 사이드 랜더링으로 페이지 이동 // Link : 페이지
      이동을 함. // useNavigate : 페이지를 실제로 이동시키는 네비게이트 함수
      반환 (form, button), 이벤트핸들러 특정조건 페이지 이동시 사용 */}
      <Routes>
        {/* path="주소", element={컴포넌트} | *은 path에 없는 페이지일 때 (와일드카드) */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} /> {/* 동적 경로 /:id */}
        <Route path="/edit/:id" element={<Edit />} /> {/* 동적 경로 /:id */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
