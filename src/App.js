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

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

//importación de contextos
import ObrasPage from "./pages/ObrasPage";
import ObrasForm from "./pages/ObrasForm";
import MaterialesPage from "./pages/materiales/MaterialesPage";
import EmpleadosPage from "./pages/EmpleadosPage";
import ClientPage from "./pages/ClientPage";
import MaterialesForm from "./pages/materiales/MaterialesForm";
import EmpleadosForm from "./pages/EmpleadosForm";
import ClientForm from "./pages/ClientForm";
import { CategoriaContextProvider } from "./context/CategoriasProvider";
import { EspecialidadContextProvider } from "./context/EspecialidadesProvider";
import { MaterialContextProvider } from "./context/materiales/MaterialesProvider";
import { ObraContextProvider } from "./context/ObrasProvider";
import { EmpleadoContextProvider } from "./context/EmpleadosProvider";
import { ProveedorContextProvider } from "./context/proveedores/ProveedorProvider";
import { ClientContextProvider } from "./context/ClientesProvider";
import { CompraContextProvider } from "./context/compras/ComprasProvider";
import { RolContextProvider } from "./context/RolesProvider";
import ProveedoresPage from "./pages/proveedores/ProveedorPage";
import ProveedoresForm from "./pages/proveedores/ProveedoresForm";
import RolesForm from "./pages/RolesForm";
import RolesPage from "./pages/RolesPage";
import ComprasPage from "./pages/compras/ComprasPage";
import ComprasForm from "./pages/compras/ComprasForm";

import EspecialidadesPage from "./pages/EspecialidadesPage";
import EspecialidadesForm from "./pages/EspecialidadesForm";
import CategoriasPage from "./pages/CategoriasPage";
import CategoriasForm from "./pages/CategoriasForm";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {layout === "Inicio" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="Inicio"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <>
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="CONSTRU-TECH"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
      </ThemeProvider>
      <ObraContextProvider>
        <Routes>
          <Route path="/obras" element={<ObrasPage />} />
          <Route path="/agregarObra" element={<ObrasForm />} />
          <Route path="/editarObra/:id" element={<ObrasForm />} />
        </Routes>
      </ObraContextProvider>
      <MaterialContextProvider>
        <Routes>
          <Route path="/materiales" element={<MaterialesPage />} />
          <Route path="/agregarMaterial" element={<MaterialesForm />} />
          <Route path="/editarMaterial/:id" element={<MaterialesForm />} />
        </Routes>
      </MaterialContextProvider>
      <EmpleadoContextProvider>
        <Routes>
          <Route path="/empleados" element={<EmpleadosPage />} />
          <Route path="/agregarEmpleado" element={<EmpleadosForm />} />
          <Route path="/editarEmpleado/:id" element={<EmpleadosForm />} />
        </Routes>
      </EmpleadoContextProvider>
      <EspecialidadContextProvider>
        <Routes>
          <Route path="/especialidades" element={<EspecialidadesPage />} />
          <Route path="/agregarEspecialidad" element={<EspecialidadesForm />} />
          <Route path="/editarEspecialidad/:id" element={<EspecialidadesForm />} />
        </Routes>
      </EspecialidadContextProvider>
      <CategoriaContextProvider>
        <Routes>
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/agregarCategoria" element={<CategoriasForm />} />
          <Route path="/editarCategoria/:id" element={<CategoriasForm />} />
        </Routes>
      </CategoriaContextProvider>
      <ProveedorContextProvider>
        <Routes>
          <Route path="/proveedores" element={<ProveedoresPage />}></Route>
          <Route path="/agregarProveedor" element={<ProveedoresForm />}></Route>
          <Route path="/editarProveedor/:id" element={<ProveedoresForm />}></Route>
        </Routes>
      </ProveedorContextProvider>
      <ClientContextProvider>
        <Routes>
          <Route path="/clientes" element={<ClientPage />}></Route>
          <Route path="/agregarCliente" element={<ClientForm />}></Route>
          <Route path="/editarCliente/:id" element={<ClientForm />}></Route>
        </Routes>
      </ClientContextProvider>
      <CompraContextProvider>
        <Routes>
          <Route path="/compras" element={<ComprasPage />}></Route>
          <Route path="/agregarCompras" element={<ComprasForm />}></Route>
        </Routes>
      </CompraContextProvider>
      <RolContextProvider>
        <Routes>
          <Route path="/roles" element={<RolesPage />} />
          <Route path="/agregarRol" element={<RolesForm />} />
          <Route path="/editarRol/:id" element={<RolesForm />} />
        </Routes>
      </RolContextProvider>
    </>
  );
}
