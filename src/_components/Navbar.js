import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header className="main-header clearfix">
        <nav className="main-menu clearfix">
          <div className="main-menu-wrapper">
            <div className="main-menu-wrapper__left">
              <div className="main-menu-wrapper__logo">
                <a href="/">
                  <img src="../assets/images/logo.png" alt="abc" />
                </a>
              </div>

              <div className="main-menu-wrapper__main-menu">
                <a href="/" className="mobile-nav__toggler">
                  <span className="mobile-nav__toggler-bar"></span>
                  <span className="mobile-nav__toggler-bar"></span>
                  <span className="mobile-nav__toggler-bar"></span>
                </a>

                <ul className="main-menu__list text-dark">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#industries">Industries</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="main-menu-wrapper__right">
              <div className="main-menu-wrapper__social-box">
                <div className="main-menu-wrapper__social">
                  <a
                    href="https://www.linkedin.com/company/lifeline-recruitment"
                    className="clr-dri"
                    target="blank_"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/lifelinerecuitment21/"
                    target="blank_"
                    className="clr-ins"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="main-menu-wrapper__search-box">
                <a href="/"
                  className="main-menu-wrapper__search search-toggler icon-magnifying-glass1">{null}</a>
              </div>
              <div className="main-menu-wrapper__phone-contact">
                <p>Need help? Talk to us</p>
                <a href="tel:+44 07450 158606">+44 07450 158606 </a>
              </div>
            </div>

            {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
