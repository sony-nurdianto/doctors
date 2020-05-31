import React from "react";
import "./Style.css";
import Bg from "./images/BackRound.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg" style={{ backgroundImage: `url(${Bg})` }}>
        <div className="jumbotron " style={{ background: "transparent" }}>
          <h1 classname="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr classname="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
      </div>
      <div className="jumbotron-fluid">
        <div className="container ft">
          <div className="row">
            <div className="col">
              <div>
                <Link>
                  <img alt="linkind" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div>
                <Link>
                  <img alt="instagram" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div>
                <Link>
                  <img alt="facebook" />
                </Link>
              </div>
            </div>
            <div className="col">
              <Link>
                <img alt="twiter" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
