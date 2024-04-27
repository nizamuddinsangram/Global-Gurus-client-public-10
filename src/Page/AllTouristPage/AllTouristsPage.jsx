import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllTouristsCard from "../../component/AllTouristsCard";
const AllTouristsPage = () => {
  const data = useLoaderData();
  const [loadedData, setLoadedData] = useState(data);

  console.log(loadedData);
  const handleSort = () => {
    fetch("http://localhost:7000/search")
      .then((res) => res.json())
      .then((data) => {
        setLoadedData(data);
      });
  };

  return (
    <div>
      <button>
        sort <span onClick={handleSort}>Ascending</span>
      </button>
      <div className="grid grid-cols-3 gap-10 mt-14">
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
