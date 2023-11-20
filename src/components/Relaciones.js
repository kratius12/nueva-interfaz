import { useObras } from "../context/ObrasProvider";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Relaciones({ relaciones }) {
  const dataRelaciones = relaciones;
  const items = dataRelaciones.map((especialidades, index) => {
    return <span key={index}>{especialidades.especialidades}</span>;
  });
  return <>{items}</>;
}
