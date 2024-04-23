import { useParams } from "react-router-dom"; // 현재 url의 파라미터의 값을 가져오는 훅
const Diary = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.id}번 일기입니다!</div>;
};

export default Diary;
// 일기 상세 조회
