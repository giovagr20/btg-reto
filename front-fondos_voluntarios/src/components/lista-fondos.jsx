import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Fondos } from "../services/fondos-service";
import logoReact from "../assets/images/logo192.png";

export const ListaFondos = () => {
  const [response, setResponse] = useState(null);
  const [habilitado, setHabilitado] = useState();

  useEffect(() => {
    setHabilitado(true);
    Fondos()
      .then((response) => {
        setResponse(response.data.message);
        setHabilitado(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      { habilitado ? (
        <div className="container text-center">
          <img src={logoReact} alt="Info" className="App-logo" />
        </div>
      ) : (
        <div className="container mt-2">
          {JSON.stringify(response)}
          { response.map((element) => {
            return (
              <div
                className="card mb-2"
                key={element.id}
                style={{ width: "20rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title"> {element.name}</h5>
                  <p className="card-text"> {element.category} </p> <br />
                  <p className="card-text">
                    {" "}
                    <strong> $ {element.minimum}.00 </strong>
                  </p>
                </div>
              </div>
            );
          })}
          <button className="btn btn-primary">Crear Fondo</button>
        </div>
      )}
    </>
  );
};
