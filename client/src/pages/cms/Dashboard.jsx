import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";
import "./cms.css";

const Dashboard = () => {
  return (
    <div className = "AdminContainer">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
};
export default Dashboard;