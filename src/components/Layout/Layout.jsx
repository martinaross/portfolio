import { useState } from "react"; // 1. Importamos useState
import "./Layout.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Layout = (props) => {
  const [menuOpen, setMenuOpen] = useState(false); // 2. Estado para el menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <img src={logo} alt="imagen de logo" />

        {/* 3. Botón Hamburguesa */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={menuOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </button>

        {/* 4. Clase dinámica 'open' para el nav */}
        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setMenuOpen(false)} // Cierra el menú al hacer click
              >
                work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setMenuOpen(false)}
              >
                about
              </NavLink>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Ys3peZmDVJD2QuG7n_T0QipQZ0Ps3leY/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Currículum Vitae
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {props.children}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-email">martinayulianarossignoli@gmail.com</p>
          <div className="footer-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"> <i className="bx bxl-linkedin"></i> </a>
            <a href="https://github.com" target="_blank" rel="noreferrer"> <i className="bx bxl-github"></i> </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Layout };