import React from 'react';

export const Item = ({name, description, image, url}) => 
		<div className="columns portfolio-item">
			<div className="item-wrap">
				<a href="#modal-01" title>
					<img alt src="assets/images/portfolio/coffee.jpg" />
					<div className="overlay">
						<div className="portfolio-item-meta">
							<h5>{name}</h5>
							<p>{description}</p>
						</div>
					</div>
					<div className="link-icon"><i className="icon-plus" /></div>
				</a>
			</div>
		</div> 
