import "./Layout.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <header>
        <img src={logo} alt="imagen de logo" />
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                work
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                about
              </NavLink>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Ys3peZmDVJD2QuG7n_T0QipQZ0Ps3leY/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {props.children}
      </main>

      <footer className="footer"> <div className="footer-content"> <p className="footer-email">martinayulianarossignoli@gmail.com</p> <div className="footer-icons"> <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"> <i className="bx bxl-linkedin"></i> </a> <a href="https://github.com" target="_blank" rel="noreferrer"> <i className="bx bxl-github"></i> </a>
        {/* <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> <i className="bx bxl-instagram"></i> </a> */} </div> </div> </footer>
    </>
  );
};

export { Layout };
