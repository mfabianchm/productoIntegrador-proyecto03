import React from "react";
import Link from "next/link";

const Services6 = () => {
  return (
    <section className="serv-arch">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/img-cafeteria/header01.jpeg)" }}
          >
            <h6 className="numb">01</h6>
            <h5>Venta de café</h5>
            <p>
              Ponemos a tus diposición nuestros productos, tenemos bolsas desde
              250 gramos hasta 10 Kilos.
            </p>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/img-cafeteria/header03.webp)" }}
          >
            <h6 className="numb">02</h6>
            <h5>Cafeteras</h5>
            <p>
              Prepara tu bebida en una de nuestras modernas cafeteras fabricadas
              con la última tecnología.
            </p>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/img-cafeteria/molienda.jpeg)" }}
          >
            <h6 className="numb">03</h6>
            <h5>Molienda de Café</h5>
            <p>
              ¿Necesitas equipos de molienda para tu negocio? Nosotros podemos
              ayudarte, revisa nuestros productos.
            </p>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/img-cafeteria/header02.jpeg)" }}
          >
            <h6 className="numb">04</h6>
            <h5>Cafeterías</h5>
            <p>
              Visita cualquiera de nuestras sucursales a lo largo y ancho del
              país.
            </p>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{
              backgroundImage: "url(/img/img-cafeteria/articuloscafe.jpeg)",
            }}
          >
            <h6 className="numb">05</h6>
            <h5>Artículos</h5>
            <p>
              Dale un vistazo a nuestra tienda, donde podrás encontrar libros,
              playeras, llaveros y otras cosas interesantes para los amantes del
              café.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;
