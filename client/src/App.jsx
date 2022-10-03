import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
import AdminRouter from "./pages/cms/AdminRouter"
import Home from './pages/Home';
const App = () => {
    // const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth);
    // const { isLogged, isAdmin } = auth;
    // const [loading, setLoading] = useState(true);
    // const isAdmin = false;

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/*'
                    index
                    element={<AdminRouter />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
