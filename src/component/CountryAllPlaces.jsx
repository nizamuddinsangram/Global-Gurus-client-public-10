import { useLoaderData } from "react-router-dom";
const CountryAllPlaces = () => {
  const loaderData = useLoaderData();
  console.log("paise ra paise ", loaderData);
  return (
    <div>
      <p>allah</p>
    </div>
  );
};

export default CountryAllPlaces;
