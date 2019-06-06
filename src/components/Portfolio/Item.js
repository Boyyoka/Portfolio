import React, { Component } from 'react';
import { Popup } from './Popup'

class Item extends Component {

  state = {
    popup: false
  }

  togglePopup = (condition) => {
    this.setState({ popup: !condition })
  }

  render() {
    const { name, description, image, cover, url, index, languages } = this.props
    const { popup } = this.state

    return(
      <div 
        className="columns portfolio-item" 
        onClick={() => this.togglePopup(popup)}
        >
        <div className="item-wrap">
          <a href={`#modal-0${index}`} name>
            <img alt src={image} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{name}</h5>
                {/* <p>{description}</p> */}
              </div>
            </div>
            <div className="link-icon"><i className="icon-plus" /></div>
          </a>
        </div>
        { popup && 
          <Popup 
            show={popup}
            title={name}
            description={description}
            link={url}
            languages={languages}
            image={image}
            cover={cover}
          />
        }
      </div> 
    )
  }
}

export default Item;


