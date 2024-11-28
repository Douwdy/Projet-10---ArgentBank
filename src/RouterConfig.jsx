import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import Dashboard from './pages/Dashboard/index';
import NotFound from './pages/NotFound/index';
import AccountPage from './pages/Account/index';

const RouterConfig = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/sign-in" element={<SignIn/>} />
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/dashboard/account" element={<AccountPage/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    );
};

export default RouterConfig;