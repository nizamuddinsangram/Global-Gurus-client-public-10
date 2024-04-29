import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import AllTouristsCard from "../../component/AllTouristsCard";
import AllTouristSlider from "./AllTouristSlider";

const AllTouristsPage = () => {
  const data = useLoaderData();
  const [loadedData, setLoadedData] = useState(data);

  const handleSort = () => {
    fetch("https://southeast-asia-server-kappa.vercel.app/search")
      .then((res) => res.json())
      .then((data) => {
        setLoadedData(data);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Global Gurus Tourist Page</title>
      </Helmet>
      <AllTouristSlider className="sm:h-[50vh]" />
      <button className="mt-20 text-center mb-4 text-xl ml-6">
        sort{" "}
        <span className="bg-rose-400 px-2 p-1 rounded-lg" onClick={handleSort}>
          Ascending
        </span>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {loadedData.map((data) => (
          <AllTouristsCard key={data._id} data={data}></AllTouristsCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsPage;
