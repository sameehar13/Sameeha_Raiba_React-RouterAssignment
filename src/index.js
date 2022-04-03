import React from 'react';

import { render } from "react-dom";
import { BrowserRouter,Routes,Route,} from "react-router-dom";
//importing App 
import App from "./App";
// importing components
import Header from "./components/Header";
//importing pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    {/* Header component */}
    <Header />

    {/* Nesting Routes inside App route */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);


