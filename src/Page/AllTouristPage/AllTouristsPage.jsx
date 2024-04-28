import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllTouristsCard from "../../component/AllTouristsCard";
import AllTouristSlider from "./AllTouristSlider";
const AllTouristsPage = () => {
  const data = useLoaderData();
  const [loadedData, setLoadedData] = useState(data);

  const handleSort = () => {
    fetch("http://localhost:7000/search")
      .then((res) => res.json())
      .then((data) => {
        setLoadedData(data);
      });
  };

  return (
    <div>
      {/* <section
        className="relative flex items-center justify-center h-96 w-full"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center text-white">
          <h1 className="text-4xl font-bold">Discover All Products</h1>
          <p className="mt-4 text-lg">
            Explore our wide range of products, from electronics to home goods.
          </p>
          <Link to="/products">
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 ease-in-out">
              View Products
            </button>
          </Link>
        </div>
      </section> */}
      <AllTouristSlider />
      <button className="mt-20 text-center flex">
        sort <span onClick={handleSort}>Ascending</span>
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
