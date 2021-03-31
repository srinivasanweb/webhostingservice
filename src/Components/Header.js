import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
<header>
  {/* Header Start */}
  <div className="header-area header-transparent">
    <div className="main-header">
      <div className="header-bottom  header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-2 col-lg-1 col-md-1">
              <div className="logo">
              <Link to="/"><img src="assets/img/logo/logo.png" alt /></Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8">
              {/* Main-menu */}
              <div className="main-menu f-right d-none d-lg-block">
                <nav> 
                  <ul id="navigation">                                                                                                                                     
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blog">Blog</Link>
                      <ul className="submenu">
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/blogdetails">Blog Details</Link></li>
                      </ul>
                    </li>
                    {/*<li><a href="#">Pages</a>
                      <ul className="submenu">
                        <li><a href="elements.html">Element</a></li>
                      </ul>
                    </li>*/}
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>             
            <div className="col-xl-2 col-lg-3 col-md-3">
              <div className="header-right-btn f-right d-none d-lg-block">
                <Link to="/contact" className="btn header-btn">
                  {/* iocn */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25">
                    <path fill="#FFF" fillRule="evenodd" d="M17.433 17.55c2.608.869 4.5 3.614 4.5 6.526 0 .26-.211.471-.472.471H.704a.471.471 0 01-.472-.471c0-2.912 1.892-5.657 4.499-6.526l2.243-.748.804-1.609a5.152 5.152 0 01-.999-1.449h-.414a1.417 1.417 0 01-1.416-1.415v-.553a1.417 1.417 0 01-.943-1.334V7.47A7.072 7.072 0 0111.082.393c3.902 0 7.077 3.175 7.077 7.077v2.972c0 .781-.635 1.415-1.415 1.415h-.859l-.1.602a5.168 5.168 0 01-1.399 2.733l.805 1.61 2.242.748zm-6.99 4.606l.639 1.028c.673-1.079.64-1.03.663-1.062a17.7 17.7 0 001.067-1.594l-1.773-1.773-1.682 1.78a17.84 17.84 0 001.063 1.587l.023.034zm.577-4.754l.834-.881a4.722 4.722 0 01-1.755-.04l.921.921zm-2.639-1.305l-.562 1.125c.29.839.644 1.66 1.056 2.449l1.497-1.583-1.991-1.991zm3.307 1.972l1.601 1.602c.412-.787.766-1.608 1.057-2.449l-.642-1.284-2.016 2.131zm-4.672-.286l-1.986.662c-2.094.698-3.649 2.822-3.836 5.159h9.039l-.581-.932a18.923 18.923 0 01-2.636-4.889zm-1.123-5.454c0 .26.212.472.472.472h.085a4.932 4.932 0 01-.07-.342l-.1-.602h-.387v.472zm-.944-1.887c0 .26.212.472.472.472h.72a30.74 30.74 0 01-.229-2.818v-.001-.005l-.005-.149h-.958v2.501zm11.795.472c.26 0 .471-.212.471-.472V7.941h-.957l-.003.081a30.74 30.74 0 01-.232 2.892h.721zm-.473-3.916h.926a6.14 6.14 0 00-6.115-5.661 6.13 6.13 0 00-6.115 5.661h.927c.034-2.605 2.155-4.717 4.766-4.717h.845c2.61 0 4.732 2.112 4.766 4.717zm-.943.067c.001-2.112-1.71-3.841-3.823-3.841h-.845c-1.981 0-3.605 1.518-3.803 3.439a4.27 4.27 0 013.282-1.552c.125 0 .245.049.333.138a7.586 7.586 0 004.262 2.131l.59.084V7.46c.003-.118.004-.247.004-.395zm-.474 5.239c.087-.526.121-.714.164-1.006v-.001c.136-.91.231-1.899.278-2.884l-.695-.099A8.538 8.538 0 019.952 6.06a3.318 3.318 0 00-2.455 1.315l-.635.847c.06 1.481.33 3.793.566 4.579h1.376a1.415 1.415 0 011.335-.944h.943a1.416 1.416 0 110 2.831h-.943c-.615 0-1.14-.395-1.334-.944h-.962c.545.914 1.39 1.552 2.312 1.782a3.83 3.83 0 001.855 0c1.476-.369 2.594-1.724 2.844-3.222zm-5.187.969c0 .26.212.471.472.471h.943a.471.471 0 100-.943h-.943a.472.472 0 00-.472.472zm4.153 7.398v.001l-.007.013c-.39.687-.828 1.355-1.301 1.987l-.58.932h9.038c-.186-2.337-1.742-4.461-3.835-5.159l-1.986-.662a18.869 18.869 0 01-1.329 2.888zm2.452-.652a.472.472 0 110-.944.472.472 0 010 .944zm1.945.054c.559.43 1.02.991 1.336 1.622a.473.473 0 01-.845.421 3.753 3.753 0 00-1.066-1.294.472.472 0 01.575-.749z" ></path>
                  </svg>+880.762.009
                </Link>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
</header>

            )
    }
}
