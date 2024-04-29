import { useState } from "react";
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
      <AllTouristSlider />
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
// const [searchParams, setSearchParams] = useSearchParams();
// const [sortOrder, setSortOrder] = useState(searchParams.get("sort") || "asc");
// const [loadedDatas, setLoadedData] = useState([]);
// //
// useEffect(() => {
//   const fetchPlaces = async () => {
//     const response = await fetch(`/search?sort=${sortOrder}`);
//     const data = await response.json();
//     setLoadedData(data);
//   };

//   fetchPlaces();
// }, [sortOrder]); // Re-fetch when sortOrder changes

// const handleSortChange = (event) => {
//   const selectedSort = event.target.value;
//   setSortOrder(selectedSort); // Update sortOrder state
//   setSearchParams({ sort: selectedSort }); // Update query parameter
// };
//
