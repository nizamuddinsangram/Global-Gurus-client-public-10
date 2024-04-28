import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import { Link } from "react-router-dom";
const CountryCard = () => {
  const [country, setCountry] = useState();
  useEffect(() => {
    fetch("http://localhost:7000/country")
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }, []);
  return (
    <>
      <div className="text-center mt-14">
        <p className="text-4xl font-bold text-sky-700">
          See Your
          <span className="text-pink-600">
            <Typewriter
              words={[" Visited Country"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>

        <p className="text-xl mt-4  font-medium text-green-800">
          In my inquisitive mind, I want to visit every single country in the
          world, but it is not possible as I don’t have a limitless
          <br />
          flow of money or all the time in the world to fulfil this wish
        </p>
      </div>
      <div className="flex justify-center mt-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-center">
          {country?.map((item) => (
            <Link key={item._id} to={`/country/${item.country_Name}`}>
              <div className="max-w-sm h-96 mb-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-t-lg h-56 w-full"
                  src={item.image}
                  alt=""
                />

                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.country_Name}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.short_description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CountryCard;
