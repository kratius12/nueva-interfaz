import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProveedorTable from "../../components/proveedores/ProveedorTable.js";
import { useProveedores } from "../../context/proveedores/ProveedorProvider.js";
function ProveedoresPage() {

    const {proveedores, Proveedores} = useProveedores()
    const navigate = useNavigate()
    useEffect(() =>{
    Proveedores()  
    }, [])
    function renderMain() {
        if (proveedores.length === 0) {
            return <h1>Sin proveedores</h1>
        }
        return <ProveedorTable proveedores={proveedores}/>
    }

    return(
        <div>
            <div >
                {renderMain()}
            </div>

        </div>
    )
}

export default ProveedoresPage