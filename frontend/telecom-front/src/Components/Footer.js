import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGem, faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-light">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-light">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="me-4 text-light">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="me-4 text-light">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#" className="me-4 text-light">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="me-4 text-light">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="me-4 text-light">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                <FontAwesomeIcon icon={faGem} className="me-3" />Company name
              </h6>
              <p className="text-light">
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">Products</h6>
              <p><a href="#!" className="text-light">Angular</a></p>
              <p><a href="#!" className="text-light">React</a></p>
              <p><a href="#!" className="text-light">Vue</a></p>
              <p><a href="#!" className="text-light">Laravel</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">Useful links</h6>
              <p><a href="#!" className="text-light">Pricing</a></p>
              <p><a href="#!" className="text-light">Settings</a></p>
              <p><a href="#!" className="text-light">Orders</a></p>
              <p><a href="#!" className="text-light">Help</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">Contact</h6>
              <p className="text-light"><FontAwesomeIcon icon={faHome} className="me-3" />New York, NY 10012, US</p>
              <p className="text-light"><FontAwesomeIcon icon={faEnvelope} className="me-3" />info@example.com</p>
              <p className="text-light"><FontAwesomeIcon icon={faPhone} className="me-3" />+01 234 567 88</p>
              <p className="text-light"><FontAwesomeIcon icon={faPrint} className="me-3" />+01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4 text-light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: <a className="text-light fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  );
}

export default Footer;
