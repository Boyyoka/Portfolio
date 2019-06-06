import React from 'react';

export const Popup = ({ title, description, languages, link, show, image, cover }) =>
  <div className={`Overlay ${show && 'show'}`}>
    <div id="modal-01" className="popup-modal">
      <img className="scale-with-grid" src={cover} alt />
      <div className="description-box">
        <h4>{title}</h4>
        <p>{description}</p>
        {languages.map(({ name }) => <span className="categories"><i className="fa fa-tag" />{name}</span>)}
      </div>
      <div className="link-box">
        <a target="_blank" rel="noopener noreferrer" href={`${link}`}>Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>
  </div>
