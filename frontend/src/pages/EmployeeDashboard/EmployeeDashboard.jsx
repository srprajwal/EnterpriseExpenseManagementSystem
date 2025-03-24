import React from "react";
import Header from "../../pages/Layout/Header";

const EmployeeDashboard = () => {
  const user = { name: "John Doe", profilePic: "/employee-pic.jpg" };

  return (
    <>
      <Header user={user} />
      <h1>Welcome to Employee Dashboard</h1>
    </>
  );
};

export default EmployeeDashboard;
