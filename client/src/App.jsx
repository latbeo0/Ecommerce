import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import AdminRouter from "./pages/cms/AdminRouter";
import WebRouter from "./pages/WebRouter";
const App = () => {
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);
  // const { isLogged, isAdmin } = auth;
  // const [loading, setLoading] = useState(true);
  const isAdmin = true;
  return (
    <BrowserRouter>{isAdmin ? <AdminRouter /> : <WebRouter />}</BrowserRouter>
  );
};

export default App;
