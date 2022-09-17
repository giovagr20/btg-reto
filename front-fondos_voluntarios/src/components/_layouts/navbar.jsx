import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../assets/images/logocode.png' 
import { Link } from "react-router-dom";

export const Navbar = () => {
  let nombreApp = "BTG Reto";
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary text-color">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="https://giovaapp.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            id="title-app"
          >
            <img src={logo} alt="" width="30" height="24" /> {nombreApp}
          </a>
          <ul className="navbar-nav d-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Reto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
