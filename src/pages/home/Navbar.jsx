import React from "react";
import Logo from "../../utils/images/logo/01.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header id="menu">
        <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#menu">
                <img src={Logo} alt="website template image" />
              </a>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link className="scroll" to={'/'}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={'/about'}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={'/service'}>
                    Service
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={'/features'}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={'/portfolio'}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={'/pricing'}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="scroll"  to={'/team'}>
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={'blog'}>
                    Blog
                  </Link>
                </li>
                <li>
                  <a className="scroll" href={'http://ec2-3-110-1-81.ap-south-1.compute.amazonaws.com:8080/'} >
                    Main Site
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
