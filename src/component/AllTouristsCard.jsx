import { Link } from "react-router-dom";
const AllTouristsCard = ({ data }) => {
  const {
    _id,
    image,
    tourist_spot_name,
    average_cost,
    totalVisitorsPerYear,
    travel_time,
    seasonality,
  } = data;
  return (
    <div className="w-11/12 mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <img
        src={image} // Source for the image
        alt={`Image of ${tourist_spot_name}`}
        className="w-full h-60 object-cover"
      />

      {/* Content Section */}
      <div className="p-4">
        {/* Tourist Spot Name */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Place: {tourist_spot_name}
        </h3>

        {/* Tourist Spot Info */}
        <div className="text-gray-600 mb-4">
          <p>
            <strong>Average Cost:</strong> {average_cost}
          </p>
          <p>
            <strong>Total Visitors per Year:</strong> {totalVisitorsPerYear}
          </p>
          <p>
            <strong>Travel Time:</strong> {travel_time}
          </p>
          <p>
            <strong>Seasonality:</strong> {seasonality}
          </p>
        </div>

        {/* View Details Button */}
        <Link
          to={`/details/${_id}`} // Dynamic link to the details page
          className="text-white bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded transition duration-200 ease-in-out"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllTouristsCard;

// <div className="card w-11/12 mt-6 mb-6 mx-auto bg-base-100 shadow-xl">
//   <figure>
//     <img src={image} alt="Shoes" className="h-96	 w-full" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{tourist_spot_name}</h2>
//     <p>{average_cost}</p>
//     <div className="flex justify-between  items-center">
//       <p className="">
//         Status:{" "}
//         <span className="bg-rose-300  px-2 rounded-lg">
//           {totalVisitorsPerYear}
//         </span>
//       </p>
//       <p>{travel_time}</p>
//     </div>
//     <div className="card-actions ">
//       <Link to={`/details/${_id}`} className="btn btn-accent text-white">
//         View Details
//       </Link>
//     </div>
//   </div>
// </div>
