import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Banner from "../../component/Banner";
import CountryCard from "../../component/CountryCard";
import Gallery from "../../component/Gallery";
import Recommended from "../../component/Recommended";
import TouristsSport from "./TouristsSport";

const Home = () => {
  const sports = useLoaderData();

  return (
    <div>
      <Banner />
      <div>
        <span className="text-center">
          <p className="text-3xl font-bold text-cyan-600 mb-4 ">
            Welcome to
            <span className="text-rose-400">
              <Typewriter
                words={["Tourists Spots"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <p className="text-xl  text-cyan-600">
            These spots possess distinctive characteristics or features that
            make them notable, <br />
            appealing, and worthy of visitation
          </p>
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10 ">
          {sports.slice(0, 8).map((sport) => (
            <TouristsSport key={sport._id} sport={sport}></TouristsSport>
          ))}
        </div>

        <Recommended />

        <CountryCard />
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
