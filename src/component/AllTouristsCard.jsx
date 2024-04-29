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
        <h3 className="text-xl font-bold text-lime-500 mb-2">
          Place: {tourist_spot_name}
        </h3>

        {/* Tourist Spot Info */}
        <div className="text-lime-700 mb-4 text-base ">
          <div className="flex justify-between mb-4">
            <p>
              <strong>Average Cost:</strong> {average_cost}
            </p>
            <p>
              <strong>Total Visitors per Year:</strong> {totalVisitorsPerYear}
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              <strong>Travel Time:</strong> {travel_time}
            </p>
            <p>
              <strong>Seasonality:</strong> {seasonality}
            </p>
          </div>
        </div>

        {/* View Details Button */}
        <div className="flex justify-center w-full ">
          <Link
            to={`/details/${_id}`} // Dynamic link to the details page
            className="text-gray-900 w-full text-center bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllTouristsCard;
