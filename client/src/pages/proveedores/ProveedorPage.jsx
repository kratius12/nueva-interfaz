import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ComprasTable from "../../components/compras/ComprasTable"
import { useProveedores } from "../../context/proveedores/ProveedorProvider";
import TableInfo from "../../components/TableInfo";
function ProveedoresPage() {
    const dataHeader = [
       
        {
            header: "Nombre",
            accessorKey: 'nombre'
        },
        {
            header:"Email",
            accessorKey: 'email'
        },
        {
            header:"Nombre contacto",
            accessorKey: 'nombreContacto'
        },
        {
            header:"Telefono contacto",
            accessorKey: 'telefonoContacto'
        },
        {
            header:"Estado",
            accessorKey: 'estado'
        },
        {
            header:"Acciones",
            accessorKey: 'accion',
            idProperty:"idProv"
        },
    ]
    const { proveedores, Proveedores } = useProveedores()
    const navigate = useNavigate()
    useEffect(() => {
        Proveedores()
    }, [])

    function renderMain() {
        if (proveedores.length === 0) {
            return <h1>Sin proveedores</h1>

        }
        return <TableInfo dataHeader={dataHeader} dataBody={proveedores} routeEdit={'editarProveedor'} viewDetail/>
        
    }

    return (
        <div>
            <h1 className="text5-xl text-black font-bold text-left my-3">Gestión de proveedores</h1>

            <div className="table-responsive">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <button className="btn btn-primary" onClick={() => navigate(`/agregarProveedor`)}>
                            Agregar proveedor
                        </button>
                    </div>
                    {renderMain()}
                </div>

            </div>

        </div>
    )
}

export default ProveedoresPage

