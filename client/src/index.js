/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import ProveedoresPage from "./views/proveedores/ProveedorPage";
import ProveedoresForm from "./views/proveedores/ProveedoresForm";
import { ProveedorContextProvider } from "context/proveedores/ProveedorProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
    <ProveedorContextProvider>
      <Routes>
        <Route path="/proveedores" element={<ProveedoresPage />}></Route>
        <Route path="/agregarProveedor" element={<ProveedoresForm />}></Route>
        <Route path="/editarProveedor/:id" element={<ProveedoresForm />}></Route>
      </Routes>
    </ProveedorContextProvider>
  </BrowserRouter>
);
