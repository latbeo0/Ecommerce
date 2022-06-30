import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import RightSide from "./components/RightSide/RightSide";
import MainDash from "./components/MainDash/MainDash";
import Order from "./components/Order/Order";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import NotFound from "../NotFound";
import { useState, useEffect } from "react";
import "./cms.css";

const App = () => {
  let navigate = useNavigate();
  const [isShowRightSide, setShowRightSide] = useState(true);
  const [isGlassSecond, setGlassSecond] = useState(false);
  const sidebarCallback = (item) => {
    setGlassSecond(false)
    setShowRightSide(false);
    switch (item.heading) {
      case "Dashboard":
        setShowRightSide(true);
        return navigate("/");
      case "Orders":
        setGlassSecond(true);
        return navigate("/order");
      case "Products":
        setGlassSecond(true);
        return navigate("/product");
      default:
        setGlassSecond(true);
        return navigate("/not-found");
    }
  };
  return (
    <div className="AdminContainer">
      <div className={!isGlassSecond ? "AppGlass" : "AppGlass-Second"}>
        <Sidebar parentCallback={(item) => sidebarCallback(item)}/>
        <div className="Content">
          <Routes>
            <Route path="/" index element={<MainDash />} />;
            <Route path="/order" index element={<Order />} />;
            <Route path="/product" index element={<ProductManagement />} />;
            <Route path="/not-found" index element={<NotFound />} />;
          </Routes>
        </div>
        {isShowRightSide && <RightSide />}
      </div>
    </div>
  );
};

export default App;
