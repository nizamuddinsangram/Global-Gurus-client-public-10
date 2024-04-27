import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner";
import TouristsSport from "./TouristsSport";

const Home = () => {
  const sports = useLoaderData();

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-3 mt-10 gap-10">
        {sports.slice(0, 6).map((sport) => (
          <TouristsSport key={sport._id} sport={sport}></TouristsSport>
        ))}
      </div>
    </div>
  );
};

export default Home;
