import React from 'react';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jaideep R. Vaidya</h2>
        <p><a href="mailto:jvaidya@clemson.edu">jvaidya@clemson.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      {/* <Age /> */}
      <p>Hi, I&apos;m Jaideep. I am an Automotive Engineer from&nbsp;
        <a href="https://cuicar.com/">Clemson University – International Center for Automotive Engineering</a>.
        Before coming to Clemson, I was in Mumbai getting
        my bachelor&apos;s degree in Mechanical Engineering. I aspire to enhance my portfolio by
        working with major teams and vehicle manufacturing units throughout the United States.
        <br /><br />
        Energetic, self-motivated with a work first, party later attitude.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jaideep R. Vaidya</p>
    </section>
  </section>
);

export default SideBar;
