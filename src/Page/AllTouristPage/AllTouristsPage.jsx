import { useLoaderData } from "react-router-dom";
import AllTouristsCard from "../../component/AllTouristsCard";
const AllTouristsPage = () => {
  const loadedData = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-10 mt-14">
      {loadedData.map((data) => (
        <AllTouristsCard key={data._id} data={data}></AllTouristsCard>
      ))}
    </div>
  );
};

export default AllTouristsPage;
