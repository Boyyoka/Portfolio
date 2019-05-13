import React, { Component } from 'react';
import { repos } from '../../services/api'
import { Item } from "./Item";

class Portfolio extends Component {

	state = {
		repositories: [],
		loading: false,
	}

	componentDidMount() {
		this.setState({loading: true})
		repos.then(res => {
			const { data: { data: { search: { edges }}}} = res

			this.setState({ 
				repositories: edges,
				loading: false
			})
		})
		.catch( err => {
			 this.setState({
				 loading: false
			 })
		})
	}

	render(){
		const { repositories, loading } = this.state;

		return (
			<section id="portfolio">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Check Out Some of My Works.</h1>
						{/* portfolio-wrapper */}
						<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						{
							repositories.forEach( ({node: {name, description, url}}) => (
								<Item
									name={name}
									description={description}
									image={null}
									url={url}
								/>
							))
						}
				
							
						
						
				
						</div> {/* portfolio-wrapper end */}
					</div> {/* twelve columns end */}

					{/* Modal Popup
							--------------------------------------------------------------- */}
					<div id="modal-01" className="popup-modal mfp-hide">
						<img className="scale-with-grid" src="assets/images/portfolio/modals/m-coffee.jpg" alt />
						<div className="description-box">
							<h4>Coffee Cup</h4>
							<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
							<span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
						</div>
						<div className="link-box">
							<a href="http://www.behance.net">Details</a>
							<a className="popup-modal-dismiss">Close</a>
						</div>
					</div>{/* modal-01 End */}
					<div id="modal-02" className="popup-modal mfp-hide">
						<img className="scale-with-grid" src="assets/images/portfolio/modals/m-console.jpg" alt />
						<div className="description-box">
							<h4>Console</h4>
							<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
							<span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
						</div>
						<div className="link-box">
							<a href="http://www.behance.net">Details</a>
							<a className="popup-modal-dismiss">Close</a>
						</div>
					</div>{/* modal-02 End */}
					<div id="modal-03" className="popup-modal mfp-hide">
						<img className="scale-with-grid" src="assets/images/portfolio/modals/m-judah.jpg" alt />
						<div className="description-box">
							<h4>Judah</h4>
							<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
							<span className="categories"><i className="fa fa-tag" />Branding</span>
						</div>
						<div className="link-box">
							<a href="http://www.behance.net">Details</a>
							<a className="popup-modal-dismiss">Close</a>
						</div>
					</div>{/* modal-03 End */}
					<div id="modal-04" className="popup-modal mfp-hide">
						<img className="scale-with-grid" src="assets/images/portfolio/modals/m-intothelight.jpg" alt />
						<div className="description-box">
							<h4>Into the Light</h4>
							<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
							<span className="categories"><i className="fa fa-tag" />Photography</span>
						</div>
						<div className="link-box">
							<a href="http://www.behance.net">Details</a>
							<a className="popup-modal-dismiss">Close</a>
						</div>
					</div>{/* modal-04 End */}
					<div id="modal-05" className="popup-modal mfp-hide">
						<img className="scale-with-grid" src="assets/images/portfolio/modals/m-farmerboy.jpg" alt />
						<div className="description-box">
							<h4>Farmer Boy</h4>
							<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
							<span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
						</div>
						<div className="link-box">
							<a href="http://www.behance.net">Details</a>
							<a className="popup-modal-dismiss">Close</a>
						</div>
					</div>{/* modal-05 End */}
					<div id="modal-06" className="popup-modal mfp-hide">
						<img className="scale-with-grid" src="assets/images/portfolio/modals/m-girl.jpg" alt />
						<div className="description-box">
							<h4>Girl</h4>
							<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
							<span className="categories"><i className="fa fa-tag" />Photography</span>
						</div>
						<div className="link-box">
							<a href="http://www.behance.net">Details</a>
							<a className="popup-modal-dismiss">Close</a>
						</div>
					</div>{/* modal-06 End */}
					<div id="modal-07" className="popup-modal mfp-hide">
						<img className="scale-with-grid" src="assets/images/portfolio/modals/m-origami.jpg" alt />
						<div className="description-box">
							<h4>Origami</h4>
							<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
							<span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
						</div>
						<div className="link-box">
							<a href="http://www.behance.net">Details</a>
							<a className="popup-modal-dismiss">Close</a>
						</div>
					</div>{/* modal-07 End */}
					<div id="modal-08" className="popup-modal mfp-hide">
						<img className="scale-with-grid" src="assets/images/portfolio/modals/m-retrocam.jpg" alt />
						<div className="description-box">
							<h4>Retrocam</h4>
							<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
							<span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
						</div>
						<div className="link-box">
							<a href="http://www.behance.net">Details</a>
							<a className="popup-modal-dismiss">Close</a>
						</div>
					</div>{/* modal-01 End */}
				</div> {/* row End */}
			</section> /* Portfolio Section End*/
		)
	}
}

export default Portfolio

