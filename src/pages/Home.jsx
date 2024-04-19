import { useSearchParams } from "react-router-dom"; // 쿼리스트링 값을 가져오는 훅

const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"));
  return <div>Home</div>;
};

export default Home;
