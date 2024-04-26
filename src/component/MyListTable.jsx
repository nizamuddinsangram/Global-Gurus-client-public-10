// eslint-disable-next-line react/prop-types
const MyListTable = ({ place, setMyPlaces, myPlaces }) => {
  console.log(myPlaces);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:7000/myPlaces/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = myPlaces.filter((p) => p._id !== id);
        setMyPlaces(remaining);
      });
  };
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
        <td>{place?.location}</td>
        <td>Update</td>
        <th>
          <button
            onClick={() => handleDelete(place?._id)}
            className="btn btn-ghost btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default MyListTable;
