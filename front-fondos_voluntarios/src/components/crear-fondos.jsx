import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const CrearFondo = (props) => {
  const abrirModal = (props) => {
    Swal.fire({
      title: "Crea tu fondo",
      icon: "success",
      showConfirmButton: true,
      html: `Crear un fondo `,
    });
  };

  return (
    <>
      {
        <div className="container mt-2">
          <Link to={`/crear`}>{abrirModal(props)}</Link>
          <button className="btn btn-primary btn-sm">Crear</button>
        </div>
      }
    </>
  );
};
