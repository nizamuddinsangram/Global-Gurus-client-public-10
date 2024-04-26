import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyListTable from "../../component/MyListTable";

const MyListPage = () => {
  const { user } = useContext(AuthContext);
  const [myPlaces, setMyPlaces] = useState();

  useEffect(() => {
    fetch(`http://localhost:7000/myPlaces/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyPlaces(data);
      });
  }, [user?.email]);
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myPlaces?.map((place) => (
              <MyListTable
                key={place._id}
                place={place}
                handleDelete={handleDelete}
              ></MyListTable>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
};

export default MyListPage;
