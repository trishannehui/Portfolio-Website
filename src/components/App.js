import React from 'react';
import './App.css';
import flower from './assets/flower.png';
import froggie from './assets/froggie.png';
import bear from './assets/bear.png';
import berry from './assets/berry.png';
import bulaklak from './assets/bulaklak.png';
import leaf from './assets/leaf.png';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';
import portfolio from './assets/portfolio.PNG';


function Hero() {
  return (
    <section className="hero">
    <div className="falling-leaves">
      <img src={flower} className="leaf leaf1" alt="leaf" />
      <img src={froggie} className="leaf leaf2" alt="leaf" />
      <img src={bear} className="leaf leaf3" alt="leaf" />
      <img src={berry} className="leaf leaf4" alt="leaf" />
      <img src={leaf} className="leaf leaf5" alt="leaf" />
      <img src={bulaklak} className="leaf leaf6" alt="leaf" />
    </div>
    <h1>Hello, I'm <span>Trish-Anne</span></h1>
    <p>2nd Year | BSIT student</p>
    <a href="#work" className="button">See My Works</a>
  </section>
);
}

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p> I am a 20 year old female, studying at the Dalubhasaan ng Lungsod ng Lucena, currently living in Lucena City.   </p>
    </section>
  );
}

function Works() {
  const work = [
    {
      name: 'Taking pictures',
      description: 'Capturing moments, mostly random.',
      image: pic3,
    },
    {
      name: 'Web Design',
      description: 'My focus on web designing is that it rely on the theme.',
      image: portfolio,
    },
    {
      name: 'Creative Writing',
      description: 'Writing soulful events that happened to be so plain.',
      image: pic4,
    },
  ];

  return (
    <section className="work" id="work">
      <h2>My Works</h2>
      <div className="grid">
        {work.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.name} className="work-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>If you have any concerns, feel free to reach out!</p>
      <a href="mailto:huidemt@gmail.com" className="contactButton">Email Me</a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Trish-Anne | All Rights Reserved</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
