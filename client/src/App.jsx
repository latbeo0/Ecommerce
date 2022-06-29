import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Dashboard from "./pages/cms/Dashboard";
const App = () => {
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);
  // const { isLogged, isAdmin } = auth;
  // const [loading, setLoading] = useState(true);
  const isAdmin = true;
  return (
    <BrowserRouter>
      <Routes>
        {isAdmin ? (
          <Route path="/*" index element={<Dashboard />} />
        ) : (
          <Route path="/*" index element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
