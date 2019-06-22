import React from 'react';
import STRINGS from '../../localization';

import ContactForm from './Forms/ContactForm'

export const Contact = () =>
  <section id="contact">
    <div className="row section-head">
      <div className="two columns header-col">
        <h1><span>{STRINGS.GET_IN_TOUCH}</span></h1>
      </div>
      <div className="ten columns">
        <p className="lead">{STRINGS.CONTACT_LEAD}</p>
      </div>
    </div>
    <div className="row">
      <div className="eight columns">
        <ContactForm />
      </div>
      <aside className="four columns footer-widgets">
        <div className="widget widget_contact">
          <h4>{STRINGS.CONTACT_PHONE}</h4>
          <p className="address">
            Shensly Hooplot<br />
            {/* 1600 Amphitheatre Parkway <br />
            Mountain View, CA 94043 US<br /> */}
            <span>(+82) 010-9846-5549</span><br />
            <span>(+31) 0640459622</span>
          </p>
        </div>
        {/* <div className="widget widget_tweets">
          <h4 className="widget-title">Latest Tweets</h4>
          <ul id="twitter">
            <li>
              <span>
                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
              <a href="#">http://t.co/CGIrdxIlI3</a>
              </span>
              <b><a href="#">2 Days Ago</a></b>
            </li>
            <li>
              <span>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi
              <a href="#">http://t.co/CGIrdxIlI3</a>
              </span>
              <b><a href="#">3 Days Ago</a></b>
            </li>
          </ul>
        </div> */}
      </aside>
    </div>
  </section> /* Contact Section End*/
