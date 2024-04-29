import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import MyListTable from "../../component/MyListTable";

const MyListPage = () => {
  const { user } = useContext(AuthContext);
  const [myPlaces, setMyPlaces] = useState();

  useEffect(() => {
    fetch(
      `https://southeast-asia-server-kappa.vercel.app/myList/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyPlaces(data);
      });
  }, [user?.email]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://southeast-asia-server-kappa.vercel.app/myPlaces/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data);
              const remaining = myPlaces.filter((p) => p._id !== id);
              setMyPlaces(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Place Name</th>
              <th>Location</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
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
