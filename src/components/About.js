import React from "react";
import "./Style.css";
import Bg from "./images/computer-1245714_1920.jpg";
import Photo from "./images/photo6215100106227689809.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${Bg})` }}>
      <div className="bg2 mt-5">
        <div className="jumbotron mt-5" style={{ background: "transparent" }}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  src={Photo}
                  alt="Riyo-firsan"
                  style={{ width: "540px", height: "350px" }}
                />
              </div>
              <div className="col-6">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <hr className="my-4" />
                <p>
                  It uses utility classes for typography and spacing to space
                  content out within the larger container.
                </p>
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron-fluid mt-5 mb-5">
        <h2 className="text-center">Skills</h2>
        <div className="container C">
          <div className="C">
            <div className="col-4">
              <img alt="Html" />
            </div>
            <div className="col-4">
              <img alt="Html" />
            </div>
            <div className="col-4">
              <img alt="JavaScript" />
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron-fluid mt-5 mb-5">
        <h1 className="text-center">Project</h1>
        <hr />
        <div className="container C">
          <div className="C">
            <div></div>
          </div>
        </div>
      </div>
      <div className="jumbotron-fluid ">
        <div className="container ">
          <div className="C">
            <div className="col-4">
              <h3>email : </h3>
            </div>
            <div className="col-4">
              <h3>phone : </h3>
            </div>
            <div className="col-4">
              <h3>address : </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
