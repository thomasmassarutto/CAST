import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './pages/mainpage';
import IlCast from './pages/ilcast' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div >
    <BrowserRouter>
    <Routes>
      <Route >
        <Route index element={<Mainpage />} />
        <Route path="ilcast" element={<IlCast />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
);
