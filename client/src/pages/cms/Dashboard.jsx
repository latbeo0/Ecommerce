import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";
import "./cms.css";

const Dashboard = () => {
  const sidebarCallback = (item) => {
    console.log(item.heading)
  }

  return (
    <div className = "AdminContainer">
      <div className="AppGlass">
        <Sidebar parentCallback = {(item) => sidebarCallback(item)} />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
};
export default Dashboard;