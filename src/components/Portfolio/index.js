import React, { Component } from 'react';
import { repos } from '../../services/api'
import Item from "./Item";
import { Loader } from '../Loader'

class Portfolio extends Component {

  state = {
    repositories: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true })
    repos.then(res => {
      const { data: { data: { search: { edges } } } } = res

      this.setState({
        repositories: edges,
        loading: false
      })
    })
      .catch(err => {
        this.setState({
          loading: false
        })
      })
  }

  render() {
    const { repositories, loading } = this.state;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            {loading ?
              <Loader />
              :
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <Item
                  name="Boyyoka"
                  description="Wallpaper website with pretty much anything you could look for"
                  languages={[{ name: 'C#' }, { name: '.NET' }, { name: 'JQuery' }, { name: 'HTML' }, { name: 'CSS' }]}
                  image="assets/images/portfolio/boyyoka_logo.png"
                  cover="assets/images/portfolio/modals/boyyoka_cover.png"
                  url="http://boyyoka.azurewebsites.net"
                  index={10}
                />
                <Item
                  name="XrayTrade"
                  description="Trading platform for smart contracts"
                  languages={[{ name: 'Javscript' }, { name: 'ReactJS' }, { name: 'NodeJS' }]}
                  image="assets/images/portfolio/xray_logo.png"
                  cover="assets/images/portfolio/modals/xray_cover.png"
                  url="https://xray.trade/"
                  index={11}
                />
                <Item
                  name="Plingo"
                  description="Educational platform for learning languages"
                  languages={[{ name: 'Javascript' }, { name: 'ReactJS' }, { name: 'NodeJS' }, { name: 'NextJS' }]}
                  image="assets/images/portfolio/plingo_logo.png"
                  cover="assets/images/portfolio/modals/plingo_cover.png"
                  url="https://plingo.io/"
                  index={12}
                />
                {
                  repositories.filter(({ node: { name } }) => (name.toLowerCase() !== 'test' &&
                    name.toLowerCase() !== 'portfolio' &&
                    name.toLowerCase() !== 'racecondition-and-threading' &&
                    name.toLowerCase() !== 'angularjs-single-page' &&
                    name.toLowerCase() !== 'mayonaka'
                  ))
                    .map(({ node: { name, description, url, primaryLanguage, languages: { nodes } } }, index) =>
                      <Item
                        key={index}
                        name={name}
                        description={description}
                        languages={nodes}
                        image={name.toLowerCase().includes('api') ? `assets/images/portfolio/api_logo.png`
                          : `assets/images/portfolio/${name.toLowerCase()}_logo.png`}
                        cover={name.toLowerCase().includes('api') ? `assets/images/portfolio/modals/api_cover.png`
                          : `assets/images/portfolio/modals/${name.toLowerCase()}_cover.png`}
                        url={url}
                        index={index}
                      />
                    )
                }
              </div>
            }
          </div> {/* twelve columns end */}
        </div> {/* row End */}
      </section> /* Portfolio Section End*/
    )
  }
}

export default Portfolio

