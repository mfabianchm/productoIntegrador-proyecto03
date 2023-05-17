/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const FooterArch = () => {
  return (
    <footer className="sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contáctanos</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Dirección</h6>
                    <p>Avenida Tamaulipas 540, Colonia Condesa, CDMX.</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>cafeteria@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Número Telefónico</h6>
                    <p>+87986451666</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Últimos blogs</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <img src="/img/img-cafeteria/elaboracionCafe.jpeg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      Te contamos todo el proceso para la elaboración del café
                    </p>
                    <span className="date main-color">06 ago 2022</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="/img/img-cafeteria/tips.jpeg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>Crece tu negocio aplicando lo siguiente.</p>
                    <span className="date main-color">01 feb 2022</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Suscríbete" />
                    <span className="subs pe-7s-paper-plane back-color"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>Negocio de cafetería</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArch;
