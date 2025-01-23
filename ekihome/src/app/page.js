import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <h1>Ekihome</h1>
        <nav>
          <ul>
            <li><a href="#Page1">Page1</a></li>
            <li><a href="#Page2">Page2</a></li>
            <li><a href="#Page3">Page3</a></li>
          </ul>
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
        <section>
          <div className="marketing-container">
            <div className="text-container">
              <h3>lorem</h3>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus nemo sapiente aliquam. Deserunt libero sunt sit numquam maxime accusamus dolore error odio vero perferendis! Harum repellendus deleniti atque rem.</div>
            </div>
            <div className="text-container">
              <h3>lorem</h3>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus nemo sapiente aliquam. Deserunt libero sunt sit numquam maxime accusamus dolore error odio vero perferendis! Harum repellendus deleniti atque rem.</div>
            </div>
            <div className="text-container">
              <h3>lorem</h3>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus nemo sapiente aliquam. Deserunt libero sunt sit numquam maxime accusamus dolore error odio vero perferendis! Harum repellendus deleniti atque rem.</div>
            </div>
          </div>
        </section>
        <section>
          <div className="pictures-container">
            <div className="image1"></div>
            <div className="image2"></div>
            <div className="image3"></div>
          </div>
        </section>
        <section>
          Waitlist
        </section>
        {/* <section id="intro">
          <h2>Explore the latest trends</h2>
          <p>Join us for two thrilling days of talks, keynotes, and panels!</p>
        </section>
        <section id="tickets">
          <h2>Get your tickets</h2>
          <p>Buy tickets now and assign them to attendees later.</p>
          <ul>
            <li>Early Ticket: 89€ + VAT</li>
            <li>Final Price: 189€ + VAT</li>
            <li>Group Ticket: 76€ + VAT (3 or more tickets)</li>
            <li>Student Ticket: 69€ + VAT (Student ID required)</li>
          </ul>
        </section>
        <section id="sponsor">
          <h2>Become a Sponsor</h2>
          <p>Connect with talents from all over the world and get to know speakers, tech leaders, and innovative companies.</p>
        </section>
        <section id="speakers">
          <h2>Call for Speakers</h2>
          <p>Share your knowledge and shape the future with us.</p>
        </section> */}
      </main>
      <footer>
        <p>&copy; Ekihome. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
