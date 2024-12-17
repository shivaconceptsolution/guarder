import Header from "./Header";

export default function Home()
{
    return(
		<>
		<div className="hero_area">
         <div className="hero_bg_box">
          <div className="img-box">
             <img src="images/hero-bg.jpg" alt="" />
          </div>
           </div>
		   <Header />
		   <section className=" slider_section ">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Your Saftey <br />
                      <span>
                        Our Responsibility
                      </span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1"> Read more </a>
                      <a href="" className="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Your Saftey <br/>
                      <span>
                        Our Responsibility
                      </span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1"> Read more </a>
                      <a href="" className="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Your Saftey <br />
                      <span>
                        Our Responsibility
                      </span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1"> Read more </a>
                      <a href="" className="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container idicator_container">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
           </section>
          </div>
		   <section className="about_section layout_padding">
            <div className="container">
            <div className="row">
            <div className="col-md-6 px-0">
          <div className="img_container">
            <div className="img-box">
              <img src="images/about-img.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 px-0">
          <div className="detail-box">
            <div className="heading_container ">
              <h2>
                Who Are We?
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit
            </p>
            <div className="btn-box">
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
		
      </div>
    </div>
  </section>
  </>
	)
}