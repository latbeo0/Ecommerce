import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
import AdminRouter from "./pages/cms/AdminRouter";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ActiveEmail from "./pages/ActiveEmail";
import ResetPassword from "./pages/ResetPassword";

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
          <Route path="/*" index element={<AdminRouter />} />
        ) : (
          <>
            <Route path="/*" index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/activate_email/:activationToken"
              element={<ActiveEmail />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/reset_password/:token" element={<ResetPassword />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
