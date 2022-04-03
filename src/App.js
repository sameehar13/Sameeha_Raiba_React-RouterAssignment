import React from 'react';

// Rendering outlet for nested routes
import { Outlet } from "react-router-dom";

// Importing external css stylesheet
import "./assets/css/style.css";

export default function App() {
    return(
        <Outlet />
    );
}

