import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
const AddTouristSpot = () => {
  const { user } = useContext(AuthContext);
  const handleAddTourist = (e) => {
    e.preventDefault();
    const form = e.target;
    const tourist_spot_name = form.tourist_spot_name.value;
    const country_Name = form.country_Name.value;
    const image = form.image.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;

    const places = {
      tourist_spot_name,
      country_Name,
      image,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      user_email,
      user_name,
    };
    console.log(places);
    fetch("https://southeast-asia-server-kappa.vercel.app/myPlaces", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(places),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Added Places successfully !",
            icon: "success",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-4/5 mx-auto my-14 bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleAddTourist} className="flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Add Tourist Spot
        </h2>

        {/* Two fields in one row */}
        <div className="flex flex-col lg:flex-row space-x-4">
          <div className="flex-1">
            <label
              htmlFor="tourist_spot_name"
              className="block text-gray-600 font-medium"
            >
              Tourist Spot Name:
            </label>
            <input
              type="text"
              id="tourist_spot_name"
              name="tourist_spot_name"
              placeholder="Enter tourist spot name"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="country_Name"
              className="block text-gray-600 font-medium"
            >
              Country Name:
            </label>
            <input
              type="text"
              id="country_Name"
              name="country_Name"
              placeholder="Enter country name"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="image" className="block text-gray-600 font-medium">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter image URL"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="short_description"
            className="block text-gray-600 font-medium"
          >
            Short Description:
          </label>
          <input
            type="text"
            id="short_description"
            name="short_description"
            placeholder="Enter a short description"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Another pair of fields in one row */}
        <div className="flex flex-col lg:flex-row space-x-4">
          <div className="flex-1">
            <label
              htmlFor="average_cost"
              className="block text-gray-600 font-medium"
            >
              Average Cost:
            </label>
            <input
              type="number"
              id="average_cost"
              name="average_cost"
              placeholder="Enter average cost"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="seasonality"
              className="block text-gray-600 font-medium"
            >
              Seasonality (e.g., summer, winter):
            </label>
            <input
              type="text"
              id="seasonality"
              name="seasonality"
              placeholder="Enter seasonality"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col lg:flex-row space-x-4">
          <div className="flex-1">
            <label
              htmlFor="travel_time"
              className="block text-gray-600 font-medium"
            >
              Travel Time (e.g., 7 days):
            </label>
            <input
              type="text"
              id="travel_time"
              name="travel_time"
              placeholder="Enter travel time"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="totalVisitorsPerYear"
              className="block text-gray-600 font-medium"
            >
              Total Visitors Per Year:
            </label>
            <input
              type="number"
              id="totalVisitorsPerYear"
              name="totalVisitorsPerYear"
              placeholder="Enter total visitors per year"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/*  */}

        <div className="flex flex-col lg:flex-row space-x-4">
          <div className="flex-1">
            <label
              htmlFor="user_email"
              className="block text-gray-600 font-medium"
            >
              User Email:
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Enter your email"
              defaultValue={user?.email}
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
              readOnly
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="user_name"
              className="block text-gray-600 font-medium"
            >
              User Name:
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Enter your name"
              defaultValue={user?.displayName}
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-sky-400 text-white font-medium rounded hover:bg-blue-700 transition duration-150 ease-in-out"
        >
          Add Tourist Spot
        </button>
      </form>
    </div>
  );
};

export default AddTouristSpot;
