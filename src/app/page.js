import React from 'react';
import './styles.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <div className="pageframe">

        <header className="header">
          <nav className="navbar">
            <img src="/ekihome-nobg.png" alt="ekihome-logo" className="ekihome-logo" />
            <div>
              <h1 className="ekihome-text">Ekihome</h1>
              <h2 className="ekihome-subtext">Residencia ecuestre</h2>
            </div>
            {/* <ul className="links">
              <li className="link"><a href="#waitlist">Lista de espera</a></li>
              <li className="link"><a href="#footer">Contacto</a></li>
              <li className="link"><a href="#footer">Acceso</a></li>
            </ul> */}
          </nav>
        </header>
        <main>
          <section id="video">
            <div className="landing-video-container">
              <video loop autoPlay muted className="landing-video">
                <source src="/landing.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          </section>
          <section id="intro">
            <div className="intro-container">
              <div className="text-container">
                <h3>Instalaciones de primera clase</h3>
                <div>Nuestras instalaciones están diseñadas para proporcionar el máximo confort y seguridad a tu caballo, con amplios establos y prados verdes.</div>
              </div>
              <div className="text-container">
                <h3>Cuidado personalizado</h3>
                <div>Ofrecemos una gama completa de servicios, desde alimentación y limpieza hasta atención veterinaria y programas de rehabilitación.</div>
              </div>
              <div className="text-container">
                <h3>Ambiente tranquilo</h3>
                <div>Rodeado de naturaleza, nuestro centro ecuestre es el lugar ideal para que tu caballo se relaje y recupere en un entorno sereno.</div>
              </div>
            </div>
          </section>
          <section id="pictures">
            <div className="pictures-container">
              <div className="image1"></div>
              <div className="image2"></div>
              <div className="image3"></div>
            </div>
          </section>
          <section id="opinions">
            <div className="opinions-container">
              <h3>Esto opinan nuestros clientes</h3>
              <div>
                <p className="opinion">"Ekihome Residencia Ecuestre es el lugar perfecto para mi caballo. Las instalaciones son de primera clase, el ambiente es tranquilo y el cuidado personalizado es excepcional. ¡No podría estar más satisfecho!" - Laura Fernández</p>
                <p className="opinion">"Desde que descubrí Ekihome Residencia Ecuestre, mi caballo ha encontrado su segundo hogar. El ambiente tranquilo y las instalaciones de primera clase son inigualables. ¡Recomiendo este lugar a todos los amantes de los caballos!" - Carlos Martínez</p>
                <p className="opinion">"Ekihome Residencia Ecuestre ha superado todas mis expectativas. El cuidado y la atención que brindan a los caballos es inigualable. ¡Mi caballo nunca ha estado más feliz y relajado!" - Ana Gómez</p>
              </div>
            </div>
          </section>
          <section id="video2">
            <div className="secondary-video-container">
              <video loop autoPlay muted className="secondary-video">
                <source src="/Ekihomev8.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          </section>
          <section id="waitlist">
            <h1>Únete a la lista de espera</h1>
            <p>Estamos aceptando peticiones para reserva de box con prado de 200 metros cuadrados</p>
            <button>Lista de espera</button>
          </section>
          <section id="summary">
            <p className="summary-text">El hogar para <u>tu caballo y tú</u></p>
          </section>
        </main>
        <footer id="footer">
          <div className="copyright"><p>&copy; Copyright Ekihome S.p.A. 28690 Brunete, Madrid | <a href="https://maps.app.goo.gl/JVDP1Uz6HXPURVXMA">Ubicación</a> | <a href="mailto:000">Contacto</a></p></div>
          <div><a href="https://www.instagram.com/ekihome_residenciaecuestre"><img src="/instagram.png" alt="Instagram" className="logo" /></a></div>
        </footer>
      </div>
    </div>
  );
}

export default App;
