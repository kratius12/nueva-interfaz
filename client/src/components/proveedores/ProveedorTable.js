import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";


export default function ProveedorTable({ proveedores }) {
  const proveedoresData = proveedores
  const navigate = useNavigate()
  const [estadoProv, setStatus] = useState()
  const handleClick = (idProv, estado) => {
    const newStatus = estado === 1 ? 0 : 1
    console.log(idProv + "-" + estado + "-" + newStatus)
    setStatus(newStatus)
  }
  // const toggleStatus = (idProv, status) => {
  //   const newStatus = status === 1 ? 0 : 1
  //   setStatus(newStatus)
  // }
  return (
    <div >
      <Row >
        <Col md=""></Col>
        <Col xs={10}>
          <Table>
            <Card >
              <CardHeader>
                <h1 className="text5-xl text-black font-bold text-center my-3">Gestión de proveedores</h1>
                <button className="btn btn-primary " onClick={() => navigate(`/agregarProveedor`)}>
                  Agregar proveedor
                </button>
              </CardHeader>
              <CardBody>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nombre Contacto</th>
                    <th scope="col">Telefono Contacto</th>

                    {/* <th scope="col">Estado</th> */}
                    <th scope="col">Ver detalle</th>
                    <th scope="col">Acción</th>

                  </tr>
                </thead>
                <tbody>
                  {proveedoresData.map(({ idProv, nombre, direccion, email, telefonoContacto, nombreContacto, estado, }) => {
                    return (
                      <tr key={idProv}>
                        <td>{idProv}</td>
                        <td>{nombre}</td>
                        <td>{direccion}</td>
                        <td>{email}</td>
                        <td>{nombreContacto}</td>
                        <td>{telefonoContacto}</td>

                        {/* <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                              value={estado}
                              checked
                              onChange={() => handleClick(idProv, estado)}
                            />
                          </div>
                        </td> */}
                        <td>
                          <a
                            className="btn bg-secondary text-white"
                            onClick={() => navigate(`/editarProveedor/${idProv}`)}
                          >
                            {" "}
                            Ver <span data-feather="edit-3" />{" "}
                          </a>
                        </td>
                        <td>
                          <a
                            className="btn bg-secondary text-white"
                            onClick={() => navigate(`/editarProveedor/${idProv}`)}
                          >
                            {" "}
                            Editar <span data-feather="edit-3" />{" "}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </CardBody>
            </Card>
          </Table>
        </Col>
      </Row>
    </div>
  );
}