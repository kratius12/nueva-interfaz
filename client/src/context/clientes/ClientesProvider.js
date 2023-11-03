import { useContext, useState } from "react";
import { getClientsRequest, deleteClientRequest, createClientRequest, getClientRequest, updateClientRequest } from "../../api/Clientes.api.js";
import { ClientsContext } from "./ClientesContext.js"

export const useClients = () => {
    const context = useContext(ClientsContext);
    if (!context) {
        throw new Error("F")
    }
    return context;
}

export const ClientContextProvider = ({ children }) => {
    const [clientes, setClientes] = useState([])
    async function Clients() {
        const respuesta = await getClientsRequest()
        setClientes(respuesta.data)
    }
    const deleteClient = async (idCli) => {
        try {
            const response = await deleteClientRequest(idCli)
            setClientes(clientes.filter(cliente => cliente.idCli !== idCli))
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    const createClient = async (cliente) => {
        try {
            await createClientRequest(cliente)
            //  setClientes([... cllientes, response.data])
        } catch (error) {
            console.log(error)
        }
    }

    const getClient = async (idCli) => {
        try {
            const response = await getClientRequest(idCli)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    const updateClient = async (idCli, newFields) => {
        try {
            const response = await updateClientRequest(idCli, newFields)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return <ClientsContext.Provider value={{ clientes, Clients, deleteClient, createClient, getClient, updateClient }}>
        {children}
    </ClientsContext.Provider>
}