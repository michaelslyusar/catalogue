import React from 'react';

import Home from '../components/Home';
import Category from '../components/Category';
import NotFoundPage from '../components/NotFoundPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/glasses" element={<Category category="glasses"/>} />
            <Route path="/boxes" element={<Home/>} />
            <Route path="/sets" element={<Home/>} />

            <Route component={NotFoundPage} />
        </Routes>
    </Router>
);

export default AppRouter;