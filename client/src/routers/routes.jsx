import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import ObrasPage from "../pages/obras/ObrasPage";
import ObrasForm from "../pages/obras/ObrasForm";
import MaterialesPage from "../pages/materiales/MaterialesPage";
import EmpleadosPage from "../pages/empleados/EmpleadosPage";
import ClientPage from "../pages/clientes/ClientPage";
import MaterialesForm from "../pages/materiales/MaterialesForm";
import EmpleadosForm from "../pages/empleados/EmpleadosForm";
import ClientForm from "../pages/clientes/ClientForm";
import { CategoriaContextProvider } from "../context/categorias/CategoriasProvider";
import { EspecialidadContextProvider } from "../context/especialidades/EspecialidadesProvider";
import { MaterialContextProvider } from "../context/materiales/MaterialesProvider";
import { ObraContextProvider } from "../context/obras/ObrasProvider";
import { EmpleadoContextProvider } from "../context/empleados/EmpleadosProvider";
import { ProveedorContextProvider } from '../context/proveedores/ProveedorProvider'
import { ClientContextProvider } from "../context/clientes/ClientesProvider";
import { CompraContextProvider } from '../context/compras/ComprasProvider'
import { RolContextProvider } from "../context/roles/RolesProvider";
// import { UsuarioContextProvider } from "./context/UsuariosProvider";
import ProveedoresPage from '../pages/proveedores/ProveedorPage'
import ProveedoresForm from "../pages/proveedores/ProveedoresForm";
import RolesForm from "../pages/roles/RolesForm";
import RolesPage from "../pages/roles/RolesPage";
// import UsuariosPage from "./pages/UsuariosPage";

import ComprasPage from "../pages/compras/Compraspage";
import ComprasForm from "../pages/compras/ComprasForm";
import EspecialidadesPage from "../pages/especialidades/EspecialidadesPage";
import EspecialidadesForm from "../pages/especialidades/EspecialidadesForm";
import CategoriasPage from "../pages/categorias/CategoriasPage";
import CategoriasForm from "../pages/categorias/CategoriasForm";

export function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
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
                <Route path="/roles" element={<RolesPage/>} />
                <Route path="/agregarRol" element={<RolesForm/>} />
                <Route path="/editarRol/:id" element={<RolesForm/>} />
              </Routes>
            </RolContextProvider>  
    </>

  );
}
