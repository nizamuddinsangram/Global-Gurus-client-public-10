import { useLoaderData } from "react-router-dom";
const Details = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={data.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{data.country_Name}</h1>
            <p className="py-6">{data.short_description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
