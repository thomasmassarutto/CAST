import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Mainpage from './pages/mainpage';
import IlCast from './pages/ilcast' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Mainpage />} />
        <Route path="ilcastnew" element={<IlCast />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
);
