import React from 'react';

import STRINGS from '../../localization'

export const About = () => 
<section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="assets/images/profilepic.jpg" alt />
    </div>
    <div className="nine columns main-col">
      <h2>{STRINGS.ABOUT_ME_TITLE}</h2>
      <p>{STRINGS.ABOUT_ME_CONTENT}
      </p>
      <div className="row">
        {/* <div className="columns contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            <span>Watashino Boyyoka-san</span><br />
            <span>1600 Amphitheatre Parkway<br />
              Mountain View, CA 94043 US
            </span><br />
            <span>(123)456-7890</span><br />
            <span>anyone@website.com</span>
          </p>
        </div> */}
        {/* <div className="columns download">
          <p>
            <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
          </p>
        </div> */}
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section> /* About Section End*/
