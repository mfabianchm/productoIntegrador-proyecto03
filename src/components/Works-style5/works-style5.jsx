/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio po-arch section-padding pb-70" id="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Productos
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                Todos
              </span>
              <span data-filter=".brand">Cafeteras</span>
              <span data-filter=".web">Bolsas de Café</span>
              <span data-filter=".graphic">Otros</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/img-cafeteria/taza.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Taza personalizada</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Otros</Link>,<Link href="/">$250MXN</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/img-cafeteria/bolsa1kg.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Bolsa de 1kg</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Café a granel</Link>,
                  <Link href="/">$400 MXN</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img
                    src="/img/img-cafeteria/bolsaCafe500grs.jpeg"
                    alt="image"
                  />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Bolsa de 500 gramos</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Café a granel</Link>,
                  <Link href="/">$220 MXN</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img
                    src="/img/img-cafeteria/bolsacafe250grs.webp"
                    alt="image"
                  />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Bolsa de 250 gramos</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Café a granel</Link>,
                  <Link href="/">$140 MXN</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img
                    src="/img/img-cafeteria/cafeterafrancesa.webp"
                    alt="image"
                  />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Cafetera Francesa</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Cafeteras</Link>,
                  <Link href="/">$1200 MXN</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img
                    src="/img/img-cafeteria/cafeteraitaliana.jpeg"
                    alt="image"
                  />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Cafetera Italiana</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Cafeteras</Link>,
                  <Link href="/">$1600 MXN</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle5;
