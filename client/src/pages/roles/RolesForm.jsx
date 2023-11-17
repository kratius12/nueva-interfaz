import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useRol } from "../../context/roles/RolesProvider";
import * as Yup from 'yup';

const rolSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, 'El nombre debe contener al menos 3 caracteres')
        .max(50, 'El nombre no puede contener mas de 50 caracteres')
        .required('El nombre es requerido'),
    estado: Yup.string()
        .required('El estado es requerido')
});
export default function RolesForm() {
    //   const [agreed, setAgreed] = useState(false)
    const { createRol, getRol, updateRol, Roles } = useRol()
    useEffect(() => {
        Roles()
    }, [])

    const params = useParams()
    const navigate = useNavigate()
    const [rol, setRol] = useState({
        nombre: "",
        estado: ""
    })

    useEffect(() => {
        const loadRoles = async () => {
            if (params.id) {
                const rol = await getRol(params.id)
                setRol({
                    nombre: rol.nombre,
                    estado: rol.estado
                    })
            }
        }
        loadRoles()
    }, [getRol, params.id])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Formik initialValues={rol}
                        enableReinitialize={true}
                        validationSchema={rolSchema}
                        onSubmit={async (values) => {
                            console.log(values);
                            if (params.id) {
                                await updateRol(params.id, values)
                                navigate("/roles")
                            } else {
                                await createRol(values)
                                navigate("/roles")
                            }
                            setRol({
                                nombre: "",
                                estado: ""
                            })
                        }}
                    >
                        {({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="card text-center w-100">
                                    <div className="card-header bg-primary text-white">
                                        <h2>{params.id ? "Editar" : "Agregar"} Rol </h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6 mt-3">
                                                <label htmlFor="nombre" className="form-label">Nombre <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="nombre" onChange={handleChange} value={values.nombre} />
                                                {errors.nombre && touched.nombre ? (
                                                    <div className="alert alert-danger" role="alert">{errors.nombre}</div>
                                                ) : null}
                                            </div>
                                            <div className="col-6 mt-3">
                                                <label htmlFor="estado" className="form-label">Estado <span className="text-danger">*</span></label>
                                                <select id="estado" className="form-select" onChange={handleChange} value={values.estado} >
                                                    <option value="">Seleccione estado</option>
                                                    <option value="1">Activo</option>
                                                    <option value="0">Inactivo</option>
                                                </select>
                                                {errors.estado && touched.estado ? (
                                                    <div className="alert alert-danger" role="alert">{errors.estado}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button type="submit" disabled={isSubmitting} className="btn btn-primary w-50">
                                                    <h4>{params.id ? "Guardar" : "Agregar"}</h4>
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <a type="button" href="" className="btn btn-danger w-50" onClick={() => navigate(`/roles`)}>
                                                    <h4>Cancelar</h4>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
