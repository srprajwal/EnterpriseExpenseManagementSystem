import React from "react";
import Header from "../../pages/Layout/Header";

const ManagerDashboard = () => {
  const user = { name: "Jane Doe", profilePic: "/manager-pic.jpg" };

  return (
    <>
      <Header user={user} />
      <h1>Welcome to Manager Dashboard</h1>
    </>
  );
};

export default ManagerDashboard;
