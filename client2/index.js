import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import "../assets/scss/paper-dashboard.scss";
// import "../assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import AdminLayout from "./layouts/Admin.js"
import Dashboard1 from "./views/Dashboard.js";
import Icons from "./views/Icons.js";
import Map from "./views/Map.js";
import Notifications from "./views/Notifications.js";
import UserPage from "./views/User.js"
import UpgradeToPro from "./views/Upgrade.js";
import TableList from "./views/Tables.js";
import Typography from "./views/Typography.js";
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout/>}></Route>
      <Route path="/admin/dashboard" element={<Dashboard1/>}></Route>
      <Route path="/admin/icons" element={<Icons/>}></Route>
      <Route path="/admin/maps" element={<Map/>}></Route>
      <Route path="/admin/notifications" element={<Notifications/>}></Route>
      <Route path="/admin/tables" element={<TableList/>}></Route>
      <Route path="/admin/typography" element={<Typography/>}></Route>
      <Route path="/admin/upgrade" element={<UpgradeToPro/>}></Route>
      <Route path="/admin/user-page" element={<UserPage/>}></Route>
    </Routes>
  </BrowserRouter>
)