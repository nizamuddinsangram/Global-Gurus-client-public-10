import { Link, useLoaderData } from "react-router-dom";
const CountryAllPlaces = () => {
  const loaderData = useLoaderData();
  console.log("paise ra paise ", loaderData);
  if (loaderData.length === 0) {
    return (
      <p className="text-center text-3xl font-bold h-[60vh] flex justify-center items-center">
        No data Found
      </p>
    );
  }
  return (
    <div className=" lg:w-4/5  mt-4 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-center items-center ">
      {loaderData?.map((country) => (
        <div
          key={country?._id}
          className="bg-white  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out overflow-hidden"
        >
          <img
            src={country.image}
            alt={country.tourists_spot_name}
            className="w-full h-60  object-cover" // Image covering top portion
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-cyan-600">
              places: {country.tourist_spot_name}
            </h2>{" "}
            <span className="flex justify-between font-bold my-2 text-green-700">
              <p className="">Country: {country.country_Name}</p>{" "}
              <p className="">Location: {country.location}</p>{" "}
            </span>
            <span className="flex text-cyan-800 justify-between items-center font-bold">
              <p className=" ">Average Cost: {country.average_cost}</p>
              <p className="">Seasonality: {country.seasonality}</p>{" "}
            </span>
            <div className="mt-4">
              <Link
                to={`/details/${country._id}`}
                className="bg-cyan-500 font-bold text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryAllPlaces;
