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
                setMyPlaces={setMyPlaces}
                myPlaces={myPlaces}
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
