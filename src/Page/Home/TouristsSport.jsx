import { Link } from "react-router-dom";
const TouristsSport = ({ sport }) => {
  const { _id, image, tourist_spot_name, country_Name } = sport;
  return (
    <>
      <div className="max-w-sm pb-2 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out  dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg h-60 w-full" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-sky-400 dark:text-white">
              Place: <span className="text-rose-500">{tourist_spot_name}</span>
            </h5>
          </a>
          <p className="mb-6 text-lg font-semibold l text-teal-500 dark:text-gray-400">
            Country: {country_Name}
          </p>
          <Link
            to={`/details/${_id}`}
            className="text-gray-900 text-base bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
          >
            view Details
            {/* <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default TouristsSport;
