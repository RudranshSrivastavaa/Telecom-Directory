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
                <FontAwesomeIcon icon={faGem} className="me-3" />Telecom
              </h6>
              <p className="text-light">
              The Telecom Directory project is a full-stack application designed to manage and retrieve telecom-related data efficiently through a user-friendly interface and robust backend API.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">Products</h6>
              <p><a href="#!" className="text-light">Node</a></p>
              <p><a href="#!" className="text-light">React</a></p>
              <p><a href="#!" className="text-light">Express</a></p>
              <p><a href="#!" className="text-light">Bootstrap</a></p>
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
              <p className="text-light"><FontAwesomeIcon icon={faHome} className="me-3" />Odisha, 769008 Rourkela, India</p>
              <p className="text-light"><FontAwesomeIcon icon={faEnvelope} className="me-3" />rudransh15srivastava23@gmail.com</p>
              <p className="text-light"><FontAwesomeIcon icon={faPhone} className="me-3" />+91 9026950002</p>
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
