import { useLoaderData, useParams } from "react-router-dom";
const MyListUpdate = () => {
  const updateData = useLoaderData();
  const { id } = useParams();
  console.log("updateData", updateData);
  return (
    <div>
      <p>updata</p>
    </div>
  );
};

export default MyListUpdate;
