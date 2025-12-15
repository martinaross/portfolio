import { Layout } from "../../components/Layout/Layout";
import "./Work.css"
import foto from "../../assets/foto.png";
import fotoC from "../../assets/Certificado-frontend.jpg"
import fotoG from "../../assets/google.jpg"
import fotoCC from "../../assets/certificado-c.jpg"
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
          Hola, soy Martina シ, desarrolladora front-end y disfruto{" "}
          <span className="highlight">comprender a las personas para ofrecer soluciones técnicas completas que no solo funcionan, sino que también mejoran los servicios/productos.</span>
          {" "}Para inspirarme y mantener mis habilidades actualizadas, exploro nuevas tecnologias emergentes y patrones de diseño..
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
                <span className="tag">+300h de habilidades técnicas</span>
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
                <span className="tag">+220h de habilidades técnicas</span>
                <span className="tag">+25h de habilidades interpersonales</span>
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
              <li>Diagnóstico y soporte de diseño</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export { Work }