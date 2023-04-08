import React from 'react'
import AboutImg from "../../utils/images/aboutus/01.jpg";

const About = () => {
  return (
    <div>
            <section id="about">
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="heading">
              <h2>
                ABOUT <span>US</span>
              </h2>
              <div className="line"></div>
              <p>
                <span>
                  <strong>L</strong>
                </span>
                orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad
                minim veniam
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ab-sec">
              <div className="col-md-6">
                <h3
                  className="wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationDelay: "300ms",
                    animationIterationCount: "fadeInDown",
                  }}
                >
                  <span>W</span>e Are Creative And Awesome
                </h3>
                <p>
                  <span>
                    <strong>L</strong>
                  </span>
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor.Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. book.
                </p>
              </div>
              <div
                className="col-md-6 ab-sec-img wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1000ms",
                  animationDelay: "300ms",
                  animationIterationCount: "fadeInUp",
                }}
              >
                <img src={AboutImg} alt="website template image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* bg-sec */}
      <div class="bg-sec">
        <div class="container">
          <div class="col-md-10 col-sm-10 col-xs-8">
            <h3>Premium quality free onepage template</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
          </div>
          <div class="col-md-2 col-sm-2 col-xs-4">
            <a
              class="btn-down"
              href="https://www.free-css.com/free-css-templates"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
