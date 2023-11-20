/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import MaterialesPage from "pages/materiales/MaterialesPage";
import Proveedorespage from "pages/proveedores/ProveedorPage";
import ComprasPage from "pages/compras/ComprasPage";
import ClientPage from "pages/ClientPage";
import CategoriasPage from "pages/CategoriasPage";
import EmpleadosPage from "pages/EmpleadosPage";
import EspecialidadesPage from "pages/EspecialidadesPage";
import ObrasPage from "pages/ObrasPage";
import RolesPage from "pages/PermisosPage";
import UsuariosPage from "pages/UsuariosPage";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";

// @mui icons
import HouseIcon from "@mui/icons-material/House";
import PeopleIcon from "@mui/icons-material/People";
import GroupIcon from "@mui/icons-material/Group";
import ConstructionIcon from "@mui/icons-material/Construction";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MapIcon from "@mui/icons-material/Map";
import Groups2Icon from "@mui/icons-material/Groups2";
import BadgeIcon from "@mui/icons-material/Badge";

const routes = [
  {
    type: "collapse",
    name: "Inicio",
    key: "inicio",
    icon: <HouseIcon></HouseIcon>,
    route: "/inicio",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Usuarios",
    key: "usuarios",
    icon: <PeopleIcon></PeopleIcon>,
    route: "/usuarios",
    component: <UsuariosPage />,
  },
  {
    type: "collapse",
    name: "Roles",
    key: "roles",
    icon: <GroupIcon></GroupIcon>,
    route: "/roles",
    component: <RolesPage />,
  },
  {
    type: "collapse",
    name: "Empleados",
    key: "empleados",
    icon: <Groups2Icon></Groups2Icon>,
    route: "/empleados",
    component: <EmpleadosPage />,
  },
  {
    type: "collapse",
    name: "Especialidades",
    key: "especialidades",
    icon: <ConstructionIcon></ConstructionIcon>,
    route: "/especialidades",
    component: <EspecialidadesPage />,
  },
  {
    type: "collapse",
    name: "Proveedores",
    key: "proveedores",
    icon: <LocalShippingIcon></LocalShippingIcon>,
    route: "/proveedores",
    component: <Proveedorespage />,
  },
  {
    type: "collapse",
    name: "Materiales",
    key: "materiales",
    icon: <InventoryIcon></InventoryIcon>,
    route: "/materiales",
    component: <MaterialesPage />,
  },
  {
    type: "collapse",
    name: "Categorias",
    key: "categorias",
    icon: <MenuBookIcon></MenuBookIcon>,
    route: "/categorias",
    component: <CategoriasPage />,
  },
  {
    type: "collapse",
    name: "Compras",
    key: "compras",
    icon: <ShoppingCartIcon></ShoppingCartIcon>,
    route: "/compras",
    component: <ComprasPage />,
  },
  {
    type: "collapse",
    name: "Obras y tiempos",
    key: "obras",
    icon: <MapIcon></MapIcon>,
    route: "/obras",
    component: <ObrasPage />,
  },
  {
    type: "collapse",
    name: "Clientes",
    key: "clientes",
    icon: <BadgeIcon></BadgeIcon>,
    route: "/clientes",
    component: <ClientPage />,
  },
];

export default routes;
