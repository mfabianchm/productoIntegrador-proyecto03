/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const LatestNews = () => {
  return (
    <section className="blog section-padding" id="blog-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Blogs
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
              <div className="img">
                <img src="/img/img-cafeteria/elaboracionCafe.jpeg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <a className="date">
                      <span>
                        <i>06</i> Agosto
                      </span>
                    </a>

                    <span>/</span>

                    <a className="tag">
                      <span className="main-color">Datos curiosos</span>
                    </a>
                  </div>
                  <h5>
                    <a>
                      Te contamos todo el proceso para la elaboración del café.
                    </a>
                  </h5>
                  <div className="btn-more">
                    <a className="simple-btn main-color">Leer más</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <div className="img">
                <img src="/img/img-cafeteria/tips.jpeg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <a className="date">
                      <span>
                        <i>01</i> Febrero
                      </span>
                    </a>

                    <span>/</span>

                    <a className="tag">
                      <span className="main-color">Marketing</span>
                    </a>
                  </div>
                  <h5>
                    <a>Crece tu negocio aplicando lo siguiente.</a>
                  </h5>
                  <div className="btn-more">
                    <a className="simple-btn main-color">Leer más</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
