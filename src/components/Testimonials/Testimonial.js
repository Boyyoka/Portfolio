import React from 'react';

export const Testimonial = ({ name, testimonial }) => (
  <li>
    <blockquote>
      <p>{testimonial}</p>
      <cite>{name}</cite>
    </blockquote>
  </li> 
)