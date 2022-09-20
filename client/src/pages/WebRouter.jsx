import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Home from "./Home";
import AdminRouter from "./cms/AdminRouter";
const App = () => {
  const auth = useSelector((state) => state.auth);
  // const { isLogged, isAdmin } = auth;
  const isLogged = true;
  const isAdmin = true;
  return (
    <Routes>
      
    </Routes>
  );
};

export default App;
