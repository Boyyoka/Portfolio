import React from 'react';
import STRINGS from '../../localization';

export const Header = () => 
  <header id="home">

    <nav id="nav-wrap">

      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">{STRINGS.MOBILE_SHOW_NAVIGATION}</a>
      <a className="mobile-btn" href="#" title="Hide navigation">{STRINGS.MOBILE_HIDE_NAVIGATION}</a>

      <ul id="nav" className="nav">
        <li className="current"><a className="smoothscroll" href="#home">{STRINGS.MENU_HOME}</a></li>
        <li><a className="smoothscroll" href="#about">{STRINGS.MENU_ABOUT}</a></li>
        <li><a className="smoothscroll" href="#resume">{STRINGS.MENU_RESUME}</a></li>
        <li><a className="smoothscroll" href="#portfolio">{STRINGS.MENU_WORKS}</a></li>
        <li><a className="smoothscroll" href="#testimonials">{STRINGS.MENU_TESTIMONIALS}</a></li>
        <li><a className="smoothscroll" href="#contact">{STRINGS.MENU_CONTACT}</a></li>
      </ul>

    </nav>

    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">
        
        {/* I'm Boyyoka-san. */}
        {STRINGS.GENERAL_INTRODUCTION}
        
        </h1>

        <h3>
          {`${STRINGS.DETAILED_INTROCUCTION_1}
          ${STRINGS.HEY_YOU_WHAT_IS_YOUR_PROFFESION_QUESTIONMARK} ${STRINGS.DETAILED_INTROCUCTION_2}`} <span>{STRINGS.THE_NETHERLANDS}</span> {STRINGS.DETAILED_INTROCUCTION_8} <span>{STRINGS.KOREA}</span>. {STRINGS.DETAILED_INTROCUCTION_4} <a className="smoothscroll" href="#about">{STRINGS.DETAILED_INTROCUCTION_5}</a> {STRINGS.DETAILED_INTROCUCTION_6} <a className="smoothscroll" href="#about">{STRINGS.DETAILED_INTROCUCTION_7}</a>.
        </h3>
        <hr />
        <ul className="social">
        <li><a href="https://www.facebook.com/profile.php?id=100015186974262"><i className="fa fa-facebook" /></a></li>
        <li><a href="https://www.linkedin.com/in/shensly-hooplot-373797138/"><i className="fa fa-linkedin" /></a></li>
        <li><a href="https://github.com/Boyyoka"><i className="fa fa-github" /></a></li>
        <li><a href="live:boykehooplot"><i className="fa fa-skype" /></a></li>
        </ul>
      </div>
    </div>

    <p className="scrolldown">
      <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
    </p>

  </header>