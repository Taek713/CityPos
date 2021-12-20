import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
  <nav className="flex-nav">
    <div className="container">
      <div className="grid">
        <div className="column-xs-9 column-md-8">
          <p id="logo">Detroit<span id="highlight">.</span></p>
        </div>
        <div className="column-xs-3 column-md-4">
          <a href="#" className="toggle-nav">Menu <i className="ion-navicon-round" /></a>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Plan Your Trip</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <main className="intro-section">
    <div className="container">
      <div className="grid">
        <div className="column-xs-12">
          <ul className="slider">
            <li className="slider-item active">
              <div className="grid vertical">
                <div className="column-xs-12 column-md-2 hide-mobile">
                  <div className="intro">
                    <a href="#">
                      <h1 className="title"><span className="underline">Explore Detroit</span></h1>
                    </a>
                  </div>
                </div>
                <div className="column-xs-12 column-md-10">
                  <div className="image-holder">
                    <img src="https://images.unsplash.com/photo-1598038748999-1174fb7d2562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                  </div>
                  <div className="grid">
                    <div className="column-xs-12 column-md-9">
                      <div className="intro show-mobile">
                        <a href="#">
                          <h1 className="title"><span className="underline">Explore Detroit</span></h1>
                        </a>
                      </div>
                      <p className="description">Detroit, Michigan’s busy city, mixes the ultramodern and the traditional, from dim buildings to historic temples.</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="slider-item">
              <div className="grid vertical">
                <div className="column-xs-12 column-md-2 hide-mobile">
                  <div className="intro">
                    <a href="#">
                      <h1 className="title"><span className="underline">Explore The city</span></h1>
                    </a>
                  </div>
                </div>
                <div className="column-xs-12 column-md-10">
                  <div className="image-holder">
                    <img src="https://images.unsplash.com/photo-1475552196046-a1b5ed257646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
                  </div>
                  <div className="grid">
                    <div className="column-xs-12 column-md-9">
                      <div className="intro show-mobile">
                        <a href="#">
                          <h1 className="title"><span className="underline">Explore the city</span></h1>
                        </a>
                      </div>
                      <p className="description">Detroit is famous for its numerous classical Coneys, gardens, imperial restaurants, rooftop parties and traditional drinks served everywhere.</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="slider-item">
              <div className="grid vertical">
                <div className="column-xs-12 column-md-2 hide-mobile">
                  <div className="intro">
                    <a href="#">
                      <h1 className="title"><span className="underline">Explore More</span></h1>
                    </a>
                  </div>
                </div>
                <div className="column-xs-12 column-md-10">
                  <div className="image-holder">
                    <img src="https://images.unsplash.com/photo-1472262808738-234c7a128280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRldHJvaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                  </div>
                  <div className="grid">
                    <div className="column-xs-12 column-md-9">
                      <div className="intro show-mobile">
                        <a href="#">
                          <h1 className="title"><span className="underline">Explore More</span></h1>
                        </a>
                      </div>
                      <p className="description">This is a fairly large city and commercial center known for its modern architecture, nightlife and hearty street food.</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="slider-item">
              <div className="grid vertical">
                <div className="column-xs-12 column-md-2 hide-mobile">
                  <div className="intro">
                    <a href="#">
                      <h1 className="title"><span className="underline">Explore Detroit</span></h1>
                    </a>
                  </div>
                </div>
                <div className="column-xs-12 column-md-10">
                  <div className="image-holder">
                    <img src="https://images.unsplash.com/photo-1505880167668-ec27c3eb9110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
                  </div>
                  <div className="grid">
                    <div className="column-xs-12 column-md-9">
                      <div className="intro show-mobile">
                        <a href="#">
                          <h1 className="title"><span className="underline">Explore Detroit</span></h1>
                        </a>
                      </div>
                      <p className="description">Kalkaska, one of the northernmost of Detroit’s, is known for its lakes, natural mini forest vibes and ski areas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="grid">
            <div className="column-xs-12">
              <div className="controls">
                <button className="previous">
                  <span className="visually-hidden">Previous</span>
                  <span className="icon arrow-left" aria-hidden="true" />
                </button><button className="next">
                  <span className="visually-hidden">Next</span>
                  <span className="icon arrow-right" aria-hidden="true" />
                </button></div>
            </div>
          </div>
        </div>
      </div>
    </div></main>
</div>

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
