import React, { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../authentication/Login';
import Home from '../pages/home/Home';
import Language from '../pages/setting/Language';

const AppRoutes: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    };

    return (
        <Router>
            <Routes>
                <Route
                path="/login"
                element={
                    isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
                }
                />
                <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
                />
                <Route path="/products" element={<PrivateRoute><div>Products Page</div></PrivateRoute>} />
                <Route path="/orders" element={<PrivateRoute><div>Orders Page</div></PrivateRoute>} />
                <Route path="/customers" element={<PrivateRoute><div>Customers Page</div></PrivateRoute>} />
                <Route path="/settings" element={<Language/>} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;