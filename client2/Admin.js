import React, { useEffect, useRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Routes, useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar.js";
import routes from "../routes.js";
import AdminLayout from "../layouts/Admin.js"
import Dashboard1 from "../views/Dashboard.js";
import Icons from "../views/Icons.js";
import Map from "../views/Map.js";
import Notifications from "../views/Notifications.js";
import UserPage from "../views/User.js"
import UpgradeToPro from "../views/Upgrade.js";
import TableList from "../views/Tables.js";
import Typography from "../views/Typography.js";
var ps;

function Dashboard(props) {
  const mainPanel = useRef();
  const location = useLocation();

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1 && mainPanel.current) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }

    return function cleanup() {
      if (ps) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  }, [mainPanel]);

  useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);

  return (
    <div className="wrapper">
      <Sidebar {...props} routes={routes} />
      <div className="main-panel" ref={mainPanel}>
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard1 />}></Route>
          <Route path="/admin/icons" element={<Icons />}></Route>
          <Route path="/admin/maps" element={<Map />}></Route>
          <Route path="/admin/notifications" element={<Notifications />}></Route>
          <Route path="/admin/tables" element={<TableList />}></Route>
          <Route path="/admin/typography" element={<Typography />}></Route>
          <Route path="/admin/upgrade" element={<UpgradeToPro />}></Route>
          <Route path="/admin/user-page" element={<UserPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
