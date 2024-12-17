import { Link } from "react-router-dom";

export default function Header()
{
    return(<>
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_link-container">
            <a href="" className="contact_link1">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Lorem ipsum dolor sit amet,
              </span>
            </a>
            <a href="" className="contact_link2">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 1234567890
              </span>
            </a>
            <a href="" className="contact_link3">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                demo@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <span>
                Guarder
              </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>

            <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html"> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html"> Services </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="guard.html"> Guards </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>)
}