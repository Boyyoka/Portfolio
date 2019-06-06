import React from 'react';
import { Testimonial } from './Testimonial'
import STRINGS from '../../localization'

export const Testimonials = () =>
  <section id="testimonials">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col">
          <h1><span>{STRINGS.TESTIMONIALS_TITLE}</span></h1>
        </div>
        <div className="ten columns flex-container">
          <div className="flexslider">
            <ul className="slides">
              {STRINGS.TESTIMONIALS.map(({ testimonial, name }) => <Testimonial testimonial={testimonial} name={name} />)}

            </ul>
          </div> {/* div.flexslider ends */}
        </div> {/* div.flex-container ends */}
      </div> {/* row ends */}
    </div>  {/* text-container ends */}
  </section> /* Testimonials Section End*/
