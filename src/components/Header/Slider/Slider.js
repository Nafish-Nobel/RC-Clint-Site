import React from "react";
import { Carousel } from "react-bootstrap";
import img from "../../footer/img.png";
import './Slide.css';

/* ths is the carousel, which is used in home component  */
const Slider = () => {
  return (
    <div className="container bg-dark rounded shadow p-4 slider-edit">
      <div className="row g-2">
        <div className="col-6">
        <div className="w-100 h-25">
      <Carousel className="bg-transparent mx-auto">
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://www.motortrend.com/uploads/sites/5/2019/09/Koenigsegg-Regera-0-400-0-World-Record.jpg"
            alt=""
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://img.gta5-mods.com/q95/images/koenigsegg-ccx-hot-pursuit-police-add-on-replace-template/78c1d3-GTA5%2011-07-2016%2003-22-58-245.jpg"
            alt=""
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://cdn.carbuzz.com/gallery-images/original/259000/100/259186.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://i.ytimg.com/vi/YbWdV37Ym8M/maxresdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://i.ytimg.com/vi/hFyhYsnhNuE/maxresdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://soymotor.com/sites/default/files/styles/mega/public/imagenes/noticia/hyprcars-24-horas-le-mans_1.jpg?itok=0WKbMiPK"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://i.ytimg.com/vi/zoP9FlqyxTo/maxresdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://images.hgmsites.net/hug/koenigsegg-regera_100502863_h.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
        </div>
        <div className="col-6">
              <img src={img} alt="" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
