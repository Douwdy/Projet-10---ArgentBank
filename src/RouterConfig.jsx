import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import Dashboard from './pages/Dashboard/index';
import User from './pages/User/index';
import NotFound from './pages/NotFound';

const RouterConfig = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/sign-in" element={<SignIn/>} />
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/user" element={<User/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    );
};

export default RouterConfig;