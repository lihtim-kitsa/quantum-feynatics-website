import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Members from '../components/Members';
import Projects from '../components/Projects';
import Focus from '../components/Focus';
import Resources from '../components/Resources';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Members />
      <Projects />
      <Focus />
      <Resources />
      <Contact />
    </div>
  );
};

export default HomePage;
