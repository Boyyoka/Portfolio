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
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
          <li><a href="#"><i className="fa fa-skype"></i></a></li>
        </ul>
      </div>
    </div>

    <p className="scrolldown">
      <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
    </p>

  </header>