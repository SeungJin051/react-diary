import { useParams } from "react-router-dom"; // 현재 url의 파라미터의 값을 가져오는 훅

const Edit = () => {
  const params = useParams();
  return <div>{params.id}번 일기입니다.</div>;
};

export default Edit;
// 기존 일기 수정
