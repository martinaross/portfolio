import "./About.css";
import foto from "../../assets/foto.png";
import { Layout } from "../../components/Layout/Layout";


const About = () => {
  return (
    <Layout>
      <section className="about-container">

        <div className="about-left">
          <img src={foto} className="about-img" alt="Foto principal" />

          <div className="about-line"></div>
        </div>

        <div className="about-right">
          <h1 className="about-title">Hola, soy <span>Martina</span></h1>

          <div className="about-section">
            <h3>ACERCA DE MÍ</h3>
            <p>
              Soy diseñadora/developer apasionada por la creatividad,
              las interfaces limpias y las experiencias que generan emoción.
              Actualmente sigo creciendo como Front-End Developer con React.
            </p>
          </div>

          <div className="about-section">
            <h3>VIAJE DE DISEÑO</h3>
            <p>
              Comencé creando diseños y con los años descubrí
              el mundo del desarrollo web, donde combino estética, lógica y detalle.
            </p>
          </div>

          <div className="about-section">
            <h3>DATO CURIOSO</h3>
            <p>
              Me apasiona aprender cosas nuevas, observar, crear y transformar ideas
              en experiencias visuales.
            </p>
          </div>
        </div>
      </section>
      <section className="filosofia-container">
        <h2 className="edu-title">
          Educación y <span>Formación</span>
        </h2>

        <div className="filosofia-grid">

          <div className="filosofia-card">
            <h3 className="card-title">Facilitar la vida a los demás.</h3>
            <p className="card-text">
              <strong>Diseño</strong> para reducir la fricción que las personas experimentan todos los días.
              Ya sea que esté rediseñando o empezando desde cero, mi intención siempre
              es resolver algo que sea significativo para alguien.
            </p>
          </div>

          <div className="filosofia-card">
            <h3 className="card-title">Resuelve con simplicidad.</h3>
            <p className="card-text">
              <strong>A veces </strong>, un problema no es tan complejo como parece. A veces, las mejores soluciones
              son las menos complicadas para todos. Diseño para mantener las cosas simples
              para mí y para los demás.
            </p>
          </div>

          <div className="filosofia-card">
            <h3 className="card-title">Diseñar es comprender.</h3>
            <p className="card-text">
              <strong>Los grandes diseños</strong> surgen de comprender lo que sucede a nivel
              de usuario y de sistema. Diseño para comprender a las personas y sus problemas
              para poder resolverlos con precisión.
            </p>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export { About };
