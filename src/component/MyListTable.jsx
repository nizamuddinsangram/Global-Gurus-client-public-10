const MyListTable = ({ place }) => {
  console.log(place);
  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
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
        <td>{place?.location}</td>
        <td>Update</td>
        <th>
          <button className="btn btn-ghost btn-xs">Details</button>
        </th>
      </tr>
    </>
  );
};

export default MyListTable;
