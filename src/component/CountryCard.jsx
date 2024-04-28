import { useEffect, useState } from "react";
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
      <div className="text-center mt-10">
        <h1 className="text-4xl text-green-800 mb-4">
          SEE YOUR VISITED COUNTRY
        </h1>
        <p className="text-xl font-medium text-green-800">
          In my inquisitive mind, I want to visit every single country in the
          world, but it is not possible as I don’t have a limitless
          <br />
          flow of money or all the time in the world to fulfil this wish
        </p>
      </div>
      <div className="grid grid-cols-3 mt-10">
        {country?.map((item) => (
          <Link key={item._id} to={`/country/${item.country_Name}`}>
            <div className="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={item.image} alt="" />

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
    </>
  );
};

export default CountryCard;
