import { BrowserRouter, Route, Routes } from "react-router";

import React from "react";

import Home from "../pages/home/Home";
import Layout from "../components/layout/Layout";
import Basket from "../pages/basket/Basket";
import Admin from "../pages/admin/Admin"
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/admin" element={<Admin/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
