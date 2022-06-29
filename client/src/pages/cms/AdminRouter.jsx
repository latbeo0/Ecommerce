import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Dashboard />} />
    </Routes>
  );
};

export default App;
