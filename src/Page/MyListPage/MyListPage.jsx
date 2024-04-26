import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyListPage = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:7000/myPlaces/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [user?.email]);
  return (
    <div>
      <p>my List page </p>
    </div>
  );
};

export default MyListPage;
