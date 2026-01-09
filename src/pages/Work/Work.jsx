import { Layout } from "../../components/Layout/Layout";
import "./Work.css"
import foto from "../../assets/foto.png";
import fotoC from "../../assets/Certificado-frontend.jpg"
import fotoG from "../../assets/google.jpg"
import fotoCC from "../../assets/certificado-c.jpg"
import fotoFull from "../../assets/fullstack.jpg"
import fotoB from "../../assets/backend.jpg"
import { FaCode, FaTools } from "react-icons/fa";


const Work = () => {

  return (
    <Layout>
      <section className="profile-section">
        <div className="profile-left">
          <img src={foto} alt="Perfil" className="profile-img" />
        </div>
        <>
        </>
        <div className="profile-right">
          <h2>Martina Rossignoli</h2>
          <p className="role">Frontend Developer

          </p>
          <p className="previous">Desarrollo Web Frontend: React, JavaScript, HTML, CSS</p>
        </div>
      </section>

      <section className="intro-section">
        <p>
          Hola, soy Martina シ, desarrolladora web con formación Full Stack y una clara
          orientación al Frontend. Disfruto{" "}
          <span className="highlight">
            comprender a las personas para crear interfaces que no solo funcionan, sino
            que también mejoran la experiencia y el valor de los productos digitales.
          </span>{" "}
          Cuento con conocimientos de backend que me permiten entender el ciclo completo
          de una aplicación, mientras continúo especializándome en el desarrollo frontend
          y el diseño de experiencias de usuario.
        </p>

      </section>

      <section className="edu-wrapper">

        <div className="edu-header">
          <p className="edu-subtitle">BACKGROUND</p>
          <h2 className="edu-title">
            Educación y <span>Formación</span>
          </h2>
        </div>

        <div className="edu-cards">

          {/* CARD 1 */}
          <div className="edu-card">
            <div className="edu-icon"> <i className="bx bxs-graduation"></i></div>

            <div>
              <h4 className="edu-type">Estudios Universitarios</h4>

              <h3 className="edu-name">
                Programación Web Full Stack Developer
              </h3>

              <p className="edu-institution">
                Universidad Tecnológica Nacional
              </p>

              <p className="edu-description">
                HTML5, CSS3, React y Node
                Javascript, Typescript y Mongo DB
                Desarrollo Front End y Back end
              </p>
              <div className="edu-tags">
                <span className="tag">+185h de habilidades técnicas</span>
                <span className="tag">+75h de habilidades interpersonales</span>
                <span className="tag">Duración: 12 meses</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="edu-card">
            <div className="edu-icon"><i className="bx bxs-badge-check"></i></div>

            <div>
              <h4 className="edu-type">Programa de capacitacion</h4>

              <h3 className="edu-name">
                Soporte IT
              </h3>

              <p className="edu-institution">
                Coursera / Junior Achivement
              </p>

              <p className="edu-description">
                Fundamentos del Soporte Técnico
                - Detección y resolución de problemas y atención al usuario.
                Sistemas Operativos - Configuración de Windows y Linux.
                Bits y Bytes de las redes de información - Protocolos, direccionamiento IP y conectividad.

              </p>

              <div className="edu-tags">
                <span className="tag">+100h de habilidades técnicas</span>
                <span className="tag">+15h de habilidades interpersonales</span>
                <span className="tag">Duración: 4 meses</span>
              </div>
            </div>
          </div>

        </div>

      </section>
      <section className="logros-section">
        <p className="logros-subtitle">LOGROS</p>
        <h2 className="logros-title">Certificados <span>Obtenidos</span></h2>
      </section>

      <div id="certCarousel" className="carousel slide carousel-dark" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#certCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#certCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#certCarousel" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#certCarousel" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#certCarousel" data-bs-slide-to="4"></button>

        </div>

        <div className="carousel-inner">

          {/* SLIDE 1 — CON IMAGEN */}
          <div className="carousel-item active">
            <div className="cert-card">
              <div className="cert-left">
                <img src={fotoC} alt="Certificado 1" className="cert-img" />
              </div>
              <div className="cert-right">
                <span className="cert-org">UNIVERSIDAD TECNOLOGICA NACIONAL</span>
                <h3>Certificación Desarrollo Frontend</h3>
                <p>Especialización en React, JavaScript y diseño web ,aplicando principios de usabilidad, accesibilidad y diseño responsivo. Implementó componentes dinámicos y experiencias interactivas orientadas a mejorar la experiencia del usuario.</p>
              </div>
            </div>
          </div>





          {/* SLIDE 4 — CON IMAGEN */}
          <div className="carousel-item">
            <div className="cert-card">
              <div className="cert-left">
                <img src={fotoB} alt="Certificado Backend Developer" className="cert-img" />
              </div>
              <div className="cert-right">
                <span className="cert-org">Universidad Tecnológica Nacional</span>
                <h3>Certificación de Desarrollo Backend Developer</h3>
                <p>
                  Formación avanzada en desarrollo backend con Node.js, enfocada en la creación
                  de aplicaciones web dinámicas e interactivas del lado del servidor. Incluye
                  manejo de bases de datos relacionales (MySQL) y no relacionales (MongoDB),
                  implementación de lógica de negocio, conexión con el servidor y
                  arquitectura orientada a entornos reales de producción.
                </p>
              </div>
            </div>
          </div>


          {/* SLIDE 5 — CON IMAGEN */}
          <div className="carousel-item">
            <div className="cert-card">
              <div className="cert-left">
                <img src={fotoFull} alt="Certificado 4" className="cert-img" />
              </div>
              <div className="cert-right">
                <span className="cert-org">Universidad Tecnológica Nacional</span>
                <h3>Diplomatura en Programación Web Full Stack</h3>
                <p>
                  Formación integral orientada al desarrollo de aplicaciones web dinámicas,
                  abarcando Frontend y Backend. Incluye diseño web con HTML5, CSS3 y Bootstrap,
                  programación con JavaScript y TypeScript, desarrollo con React JS y Node.js,
                  y gestión de bases de datos como MySQL y MongoDB, preparando para entornos
                  laborales reales tanto freelance como corporativos.
                </p>
              </div>
            </div>
          </div>

          {/* SLIDE 2 — CON IMAGEN */}
          <div className="carousel-item">
            <div className="cert-card">
              <div className="cert-left">
                <img src={fotoG} alt="Certificado 2" className="cert-img" />
              </div>
              <div className="cert-right">
                <span className="cert-org">Google / Coursera</span>
                <h3>Technical Support Fundamentals</h3>
                <p>Adquirió competencias esenciales en soporte IT, abarcando resolución de incidentes, administración básica de hardware, configuración de sistemas operativos Windows y Linux, manejo de redes, detección de fallas y asistencia al usuario final.</p>
              </div>
            </div>
          </div>

          {/* SLIDE 3 — CON IMAGEN */}
          <div className="carousel-item">
            <div className="cert-card">
              <div className="cert-left">
                <img src={fotoCC} alt="Certificado 3" className="cert-img" />
              </div>
              <div className="cert-right">
                <span className="cert-org">Claseflix</span>
                <h3>Diseño gráfico con canva</h3>
                <p>Adquirió competencias en diseño gráfico aplicando herramientas de Canva, creando piezas visuales atractivas y coherentes.</p>
              </div>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#certCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#certCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="divider"></div>

      <section className="servicios-section">

        <p className="servicios-subtitle">AUTÓNOMO</p>
        <h2 className="servicios-title">Servicios <span>que ofrezco</span></h2>
        <p className="servicios-description">
          Servicios profesionales diseñados para dar vida a tus proyectos digitales.
        </p>

        <div className="servicios-grid">

          {/* --- CARD 1 --- */}
          <div className="servicio-card">
            <div className="servicio-icon">
              <FaCode />
            </div>

            <h3>Desarrollo web</h3>
            <p>
              Sitios y aplicaciones web personalizados creados con tecnologías modernas.
              Desde landing pages hasta plataformas completas.
            </p>

            <ul>
              <li>Diseño adaptable</li>
              <li>Integración de APIs</li>
              <li>Componentes interactivos</li>
            </ul>
          </div>

          {/* --- CARD 2 --- */}
          <div className="servicio-card">
            <div className="servicio-icon">
              <FaTools />
            </div>

            <h3>Diseño UI </h3>
            <p>
              Interfaces visuales claras, atractivas y funcionales mediante ajustes constantes, mejoras visuales y soluciones centradas en el usuario.
            </p>

            <ul>
              <li>Optimización de la experiencia visual</li>
              <li>Mejoras continuasen la interfaz</li>
              <li>Maquetación y ajustes visuales en frontend</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export { Work }