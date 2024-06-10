import { useEffect, useState } from "react";
const baseUrl = import.meta.env.VITE_BASE_URL
const Profile = () => {

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const showAlertTimeout = setTimeout(() => {
      setShowAlert(true);
    }, 2500);

    const closeAlertTimeout = setTimeout(() => {
      setShowAlert(false);
    }, 12500); 

    return () => {
      clearTimeout(showAlertTimeout);
      clearTimeout(closeAlertTimeout);
    };
  }, []);
  return (
    <>
      <div id="myAlert" className={`alert alert-indigo text-center alert-dismissible fade ${showAlert ? 'show' : ''}`} role="alert">
        ¿Demasiado texto? puedes leer una version resumida en mi{" "}
        <a
          className="text-decoration-none"
          target="_blank"
          href="https://drive.google.com/file/d/1O3Whs8wUS8YgJesjPpY_K6rCx-BhmFob/view?usp=sharing"
        >
          Curriculo
        </a>
        <button type="button" className="btn-close ms-3" aria-label="Close" onClick={()=> setShowAlert(false)}></button>
      </div>
      <div className="container mt-5">
        <div className="row mx-5 my-2">
          <div className="col-md-12 col-lg-6">
            <img src={`${baseUrl}/images/perfil_lego.png`} alt="Foto real" />
          </div>
          <div className="col-md-12 col-lg-6 mt-5">
            <h1 className="font-purple fw-bold">Pablo Olmedo</h1>
            <h2>Sobre mí</h2>
            <p>
              Desarrollador full stack de 26 años. Nacido y criado en Peñalolén
              (Santiago). Empecé mis estudios de analista programador el 2020
              (año de la pandemia). Desde muy temprano decidí enfocarme en la
              programación, por las oportunidades laborales que ofrecían. Para
              bien y para mal, el campo de la programación crece y cambia
              constantemente, he estado constantemente estudiando y
              desarrollando nuevas tecnologías. Pero, no hay que olvidar que no
              todo es trabajo. ¿Las cosas que me gusta hacer fuera del trabajo?
              Ir al cine, andar en bici, cocinar, dibujar y tomar fotos de
              animalitos. Abajo ya puedes leer mis skills ya de forma más seria
              y detallada.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-12 col-lg-6">
            <h3 className="fw-bold mb-3">Estudios</h3>
            <ul>
              <li>
                <h4 className="font-purple">
                  Analista Programador computacional
                  <span className="fst-italic"> (2020-2022)</span>
                </h4>
                <p>
                  A mediados del 2022 concluí mi carrera de Analista Programador
                  Computacional en IPChile. Desde el 2020 he aprendido lógica de
                  programación, desarrollo de BBDD (SQL Server y MySQL),
                  Programación Orientada a Objetos (Java y C++), desarrollo
                  Front-end (HTML, CSS y JS) de modelamiento y diseño de
                  proyectos, levantamiento, diseño y propuesta de soluciones a
                  los requerimientos del cliente. A lo largo de mi carrera
                  profesional, he debido reforzar y aprender habilidades, por lo
                  que he optado por cursos online de distintas materias:
                  Frontend, backend, devops, test unitarios y TDD, Git, AWS y
                  así.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-6">
            <h3 className="fw-bold mb-3">Experiencia laboral</h3>
            <ul>
              <li>
                <h4 className="font-purple">
                  Centribal
                  <span className="fst-italic"> (2022-2023)</span>
                </h4>
                <p>
                  Nuestro principal cliente era una corredora de seguros del
                  banco Itaú. Trabaje en los sitios web de Chile y Colombia de
                  la corredora, tanto en el front como servicios del backend,
                  además de dar soporte a tickets de usuarios. Las tecnologías
                  que más utilicé fueron Php, Laravel, JS, Mysql y React.
                </p>
              </li>
              <li>
                <h4 className="font-purple">
                  Autofact
                  <span className="fst-italic"> (2023-2024)</span>
                </h4>
                <p>
                  Trabaje principalmente en el Informe vehicular, un producto
                  propio que entregaba toda la información técnica y legal de un
                  vehículo. Para lograrlo sistematizábamos información desde
                  fuentes públicas y privadas, mediante distintas aplicaciones
                  (scrapers, lambdas, bbdd, APIs, librerías, etc). Toda la
                  información culminaba en un informe unico para cada solicitud
                  de patente en un sitio web. Trabaje prinicipalmente con Php,
                  AWS, TS, Jest, MySql y React.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row my-5">
          <h3 className="fw-bold mb-3">Habilidades y tecnologías</h3>
          <div className="col-md-12 col-lg-6">
            <h4 className="font-purple">Frontend</h4>
            <ul>
              <li>React</li>
              <li>JS y TS</li>
              <li>Laravel</li>
              <li>Next</li>
              <li>Bootstrap, MaterialUi</li>
              <li>Tailwind</li>
              <li>Formik, Yup</li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-6">
            <h4 className="font-purple">Backend</h4>
            <ul>
              <li>Lambda</li>
              <li>JS y TS</li>
              <li>RabbitMQ</li>
              <li>BBDD relacionales y no relaciones</li>
              <li>Firebase</li>
              <li>Cheerio</li>
              <li>Puppeteer</li>
              <li>Nest</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-6">
            <h4 className="font-purple">Otras Tecnologías</h4>
            <ul>
              <li>AWS</li>
              <li>Postman</li>
              <li>Git, Github y Bitbucket</li>
              <li>Scrum</li>
              <li>Jest, TDD</li>
              <li>Linux</li>
              <li>Docker</li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-6">
            <h4 className="font-purple">Habilidades blandas</h4>
            <ul>
              <li>Aprendizaje constante</li>
              <li>Adaptabilidad a los equipos de trabajo</li>
              <li>Comunicación efectiva</li>
              <li>Interes por los desafíos</li>
              <li>Empatía</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
