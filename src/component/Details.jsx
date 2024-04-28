import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Details = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="w-4/5 h-[60vh] mx-auto my-10 border border-gray-300 rounded-lg shadow-lg overflow-hidden flex">
        <div className="w-2/5">
          <img
            src={data.image}
            alt="Details"
            className="w-full h-full object-cover" // Ensure the image covers the entire area
          />
        </div>

        <div className="w-3/5 p-6 flex flex-col justify-center items-center">
          <div>
            <p className="text-5xl font-bold text-cyan-600 mb-4 ">
              Tourists
              <span className="text-rose-400">
                <Typewriter
                  words={[" Spots Details"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
          {/* description */}
          <p className="text-center mb-4 text-lg font-bold leading-loose	tracking-wide		">
            Travelling is an amazing way to learn a lot of things in life.Thus,
            it offers not only a great way to understand human nature but also
            explore new places.
          </p>
          <div className="text-center">
            {" "}
            {/* Center text horizontally */}
            <h2 className="text-3xl font-bold text-cyan-400">
              Country:{" "}
              <span className="text-rose-400">{data.country_Name}</span>
            </h2>
            <p className="mt-4 text-cyan-900 text-lg font-bold">
              {data.short_description}
            </p>
          </div>
          <div className="flex justify-center mt-6">
            {" "}
            {/* Center buttons horizontally */}
            <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Book Now
            </button>
            <Link
              to="/" // Define where the "Back" button leads to
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
