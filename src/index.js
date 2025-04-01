import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import ErrorPage from './pages/Error';

import './static/css/global.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/works/:works',
                element: <Work/>
            },
            {
                path: '/pricing'
            },
            {
                path: '/about',
                element: <About/>
            }
        ],
        errorElement: <ErrorPage/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <RouterProvider router={router} />

);