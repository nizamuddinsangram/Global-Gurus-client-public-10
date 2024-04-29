import { Link } from "react-router-dom";
const MyListTable = ({ place, handleDelete }) => {
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={place?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{place?.tourist_spot_name}</div>
              <div className="text-sm opacity-50">{place?.country_Name}</div>
            </div>
          </div>
        </td>
        <td className="hidden lg:block">{place?.location}</td>
        <td>
          <Link
            to={`/update/${place?._id}`}
            className="font-bold lg:text-lg hover:underline  text-green-600"
          >
            UPDATE
          </Link>
        </td>
        <th>
          <button
            onClick={() => handleDelete(place?._id)}
            className=" text-rose-500 font-bold lg:text-lg hover:underline"
          >
            DELETE
          </button>
        </th>
      </tr>
    </>
  );
};

export default MyListTable;

// to={`updateCoffee/${_id}`
