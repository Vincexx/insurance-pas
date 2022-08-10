import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="bg-red-200 md:w-3/4">
        <p>Dashboard</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure,
          nemo in dolores tempora consectetur obcaecati. Voluptatem repellat
          officiis, minima assumenda, tempora amet nostrum facere earum nobis
          quos, perferendis tenetur.
        </p>
      </div>
    </>
  );
};

export default Dashboard;
