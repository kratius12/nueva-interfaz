import { useEffect, useState } from "react";
import makeAnimated from "react-select/animated";
import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useClients } from "../context/ClientesProvider";
import ClientSchema from "./ClientValidator";

const animatedComponents = makeAnimated();

export default function ClientsForm() {
  const { createClient, getClient, updateClient, deleteClient } = useClients();

  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (selectedOption) => {
    console.log(selectedOption);
    setSelectedOption(selectedOption.value);
  };
  const params = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    direccion: "",
    telefono: "",
    tipoDoc: "",
    cedula: "",
    fecha_nac: "",
    estado: "",
    contrasena: "",
  });

  useEffect(() => {
    const loadClients = async () => {
      if (params.id) {
        const cliente = await getClient(params.id);
        setCliente({
          nombre: cliente.nombre,
          apellidos: cliente.apellidos,
          email: cliente.email,
          direccion: cliente.direccion,
          telefono: cliente.telefono,
          tipoDoc: cliente.tipoDoc,
          cedula: cliente.cedula,
          fecha_nac: cliente.fecha_nac,
          estado: cliente.estado,
          contrasena: cliente.contrasena,
        });
      }
    };
    loadClients();
  }, [getClient, params.id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Formik
            initialValues={cliente}
            enableReinitialize={true}
            validationSchema={ClientSchema}
            onSubmit={async (values) => {
              console.log(values);
              if (params.id) {
                await updateClient(params.id, values);
                navigate("/clientes");
              } else {
                await createClient(values);
                navigate("/clientes");
              }
              setCliente({
                nombre: "",
                apellidos: "",
                email: "",
                direccion: "",
                telefono: "",
                tipoDoc: "",
                cedula: "",
                fecha_nac: "",
                estado: "",
                contrasena: "",
              });
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="card text-center w-100">
                    <div className="card-header bg-primary text-white">
                      <h2>{params.id ? "Editar" : "Agregar"} Cliente</h2>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6 mt-3">
                          <label htmlFor="nombre" className="form-label">
                            Nombres <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            onChange={handleChange}
                            value={values.nombre}
                          />
                          {errors.nombre && touched.nombre ? (
                            <div className="alert alert-danger" role="alert">
                              {errors.nombre}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-6 mt-3">
                          <label htmlFor="apellidos" className="form-label">
                            Apellidos<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="apellidos"
                            onChange={handleChange}
                            value={values.apellidos}
                          />
                          {errors.apellidos && touched.apellidos ? (
                            <div className="alert alert-danger" role="alert">
                              {errors.apellidos}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-6 mt-3">
                          <label htmlFor="email" className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                          />
                          {errors.email && touched.email ? (
                            <div className="alert alert-danger" role="alert">
                              {errors.email}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-6 mt-3">
                          <label htmlFor="direccion" className="form-label">
                            Direccion <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="direccion"
                            onChange={handleChange}
                            value={values.direccion}
                          />
                          {errors.direccion && touched.direccion ? (
                            <div className="alert alert-danger" role="alert">
                              {errors.direccion}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-6 mt-3">
                          <label htmlFor="telefono" className="form-label">
                            Telefono <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="telefono"
                            onChange={handleChange}
                            value={values.telefono}
                          />
                          {errors.telefono && touched.telefono ? (
                            <div className="alert alert-danger" role="alert">
                              {errors.telefono}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-6 mt-3">
                          <label htmlFor="tipoDoc" className="form-label">
                            Tipo documento <span className="text-danger">*</span>
                          </label>
                          <select
                            id="tipoDoc"
                            className="form-select"
                            onChange={handleChange}
                            value={values.tipoDoc}
                          >
                            <option value="">Seleccione tipo documento</option>
                            <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                            <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                            <option value="Pasaporte">Pasaporte</option>
                          </select>
                          {errors.tipoDoc && touched.tipoDoc ? (
                            <div className="alert alert-danger" role="alert">
                              {errors.tipoDoc}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-6 mt-3">
                          <label htmlFor="cedula" className="form-label">
                            Cedula <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cedula"
                            onChange={handleChange}
                            value={values.cedula}
                          />
                          {errors.cedula && touched.cedula ? (
                            <div className="alert alert-danger" role="alert">
                              {errors.cedula}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-6 mt-3">
                          <label htmlFor="fecha_nac" className="form-label">
                            Fecha de nacimiento <span className="text-danger">*</span>
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="fecha_nac"
                            onChange={handleChange}
                            value={values.fecha_nac}
                          />
                          {errors.fecha_nac && touched.fecha_nac ? (
                            <div className="alert alert-danger" role="alert">
                              {errors.fecha_nac}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-6 mt-3">
                          <label htmlFor="contrasena" className="form-label">
                            Contraseña <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="contrasena"
                            onChange={handleChange}
                            value={values.contrasena}
                          />
                          {errors.contrasena && touched.contrasena ? (
                            <div className="alert alert-danger" role="alert">
                              {errors.contrasena}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-6 mt-3">
                          <label htmlFor="estado" className="form-label">
                            Estado <span className="text-danger">*</span>
                          </label>
                          <select
                            id="estado"
                            className="form-select"
                            onChange={handleChange}
                            value={values.estado}
                          >
                            <option value="">Seleccione estado</option>
                            <option value="1">Activo</option>
                            <option value="0">Inactivo</option>
                          </select>
                          {errors.estado && touched.estado ? (
                            <div className="alert alert-danger" role="alert">
                              {errors.estado}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      <div className="row">
                        <div className="col-md-6">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary w-50"
                          >
                            <h4>{params.id ? "Guardar" : "Agregar"}</h4>
                          </button>
                        </div>
                        <div className="col-md-6">
                          <a
                            type="button"
                            href=""
                            className="btn btn-danger w-50"
                            onClick={() => navigate(`/clientes`)}
                          >
                            <h4>Cancelar</h4>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
