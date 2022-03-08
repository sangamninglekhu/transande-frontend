import React, { useState } from "react";
import "../../App.css";
import {
  faLaptopCode,
  faShirt,
  faEye,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";
/* eslint-disable */
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Home() {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => alert("Your message has been successfully sent."))
      .catch((error) => alert(error));
    return false;
  };


  const [state2, setState2] = useState({
    email2: "",
  });

  const handleChange2 = (e) =>
    setState2({ ...state2, [e.target.name]: e.target.value });

    const {
      register: register2,
      handleSubmit: handleSubmit2,
      formState: { errors: errors2 },
    } = useForm();
  
  const onSubmit2 = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", ...state2 }),
    })
      .then(() => alert("You are successfully subscribed to the newsletter now."))
      .catch((error) => alert(error));
    return false;
  };



  return (
    <>
      <section className="main-slider main-slider-two">
        <div
          className="swiper-container thm-swiper__slider"
          data-swiper-options='{"slidesPerView": 1, "loop": true,
        "effect": "fade",
        "pagination": {
            "el": "#main-slider-pagination",
            "type": "bullets",
            "clickable": true
        },
        "navigation": {
            "nextEl": "#main-slider__swiper-button-next",
            "prevEl": "#main-slider__swiper-button-prev"
        },
        "autoplay": {
            "delay": 7000
        }}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{ backgroundColor: "#5f9ea0" }}
              ></div>
              <div className="image-layer-overlay"></div>
              <div
                className="main-slider-two-shape-1"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/main-slider--two-shape-1.png)",
                }}
              ></div>
              <div className="main-slider-two-shape-2"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-slider__content text-center">
                      <h2>
                        Transande <br /> Apparel
                      </h2>
                      <p>Allevate Your Business</p>
                      <a
                        href="#contact"
                        className="thm-btn"
                      >
                        Collaborate Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{ backgroundColor: "#5f9ea0" }}
              ></div>
              <div className="image-layer-overlay"></div>
              <div
                className="main-slider-two-shape-1"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/main-slider--two-shape-1.png)",
                }}
              ></div>
              <div className="main-slider-two-shape-2"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-slider__content text-center">
                      <h2>
                        Scale Up <br />
                        Your Brand
                      </h2>
                      <p>Expand your Customer</p>
                      <a
                        href="#contact"
                        className="thm-btn"
                      >
                        Collaborate Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-slider__nav main-slider-two__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <span className="main-slider__next-text">Next</span>
              <i className="icon-right-arrow icon-left-arrow"></i>
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <span className="main-slider__prev-text">Prev</span>
              <i className="icon-right-arrow"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="industries" id="industries">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div
                className="section-title text-left"
                style={{ color: "#2f4f4f" }}
              >
                <h2 className="section-title__title">Industries we serve</h2>
                <span className="section-title__tagline"></span>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="industries__top-text-box">
                <p className="industries__top-text">
                  We are starting with following industries at first with plan
                  to gradually expand the range.{" "}
                </p>
              </div>
            </div>
          </div>
          <ul className="list-unstyled industries__content-box">
            <li
              className="industries__single wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="industries__icon">
                <FontAwesomeIcon icon={faShirt} />
              </div>
              <h3 className="industries__title">
                <a href="banking-advising.html">Apparel</a>
              </h3>
              <p className="industries__text">
                Hub for chain of ethical and sustainable clothing brands.
              </p>
            </li>
            <li
              className="industries__single wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="industries__icon">
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3 className="industries__title">
                <a href="business-growth.html">Cosmetics </a>
              </h3>
              <p className="industries__text">
                Beauty products from trusted brands.
              </p>
            </li>
            <li
              className="industries__single wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="industries__icon">
                <FontAwesomeIcon icon={faCubes} />
              </div>
              <h3 className="industries__title">
                <a href="financial-advice.html"> Blockchain</a>
              </h3>
              <p className="industries__text">
                Next-gen application with transparency and security.
              </p>
            </li>
            <li
              className="industries__single wow fadeInUp"
              data-wow-delay="900ms"
              data-wow-duration="1500ms"
            >
              <div className="industries__icon">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h3 className="industries__title">
                <a href="marketing-rule.html">Software</a>
              </h3>
              <p className="industries__text">
                All-in-one platform for brands at low cost.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="services-one" id="services">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Services we offer</h2>
            <span className="section-title__tagline">
              Bring you the best from the best
            </span>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="services-one__single">
                <div className="services-one__img">
                  <img src="assets/images/services/services1-1.jpg" alt="" />
                </div>
                <div className="services-one__content">
                  <h3 className="services-one__title">
                    <a href="consumer-product.html">Scale</a>
                  </h3>
                  <p className="services-one__text">
                    We make your presence in the digital world stand outline and
                    bring you the customers from all around the globe.
                  </p>
                  {/* <a href="consumer-product.html" className="services-one__btn">Read More</a> */}
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="600ms"
            >
              <div className="services-one__single">
                <div className="services-one__img">
                  <img src="assets/images/services/services1-2.jpg" alt="" />
                </div>
                <div className="services-one__content">
                  <h3 className="services-one__title">
                    <a href="audit-marketing.html">Market</a>
                  </h3>
                  <p className="services-one__text">
                    Our strategic approach to marketing will put your brands in
                    the pole position with strong branding.
                  </p>
                  {/* <a href="audit-marketing.html" className="services-one__btn">Read More</a> */}
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="900ms"
            >
              <div className="services-one__single">
                <div className="services-one__img">
                  <img src="assets/images/services/services1-3.jpg" alt="" />
                </div>
                <div className="services-one__content">
                  <h3 className="services-one__title">
                    <a href="banking-advising.html">Deliver</a>
                  </h3>
                  <p className="services-one__text">
                    From inventory to delivery, a software that works and
                    performs a big chunk of your day-to-day task with a robust
                    structure.
                  </p>
                  {/* <a href="banking-advising.html" className="services-one__btn">Read More</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="listen" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="listen__left">
                <h2 className="listen__title">We Listen to Our Customers</h2>
                <p className="listen__text">
                  We believe that the product should not be how the founders
                  envision but how the customers want it to be.
                </p>
                <div className="listen__progress-wrap">
                  <div className="listen__progress">
                    <div className="listen__progress-box">
                      <div
                        className="circle-progress"
                        data-options='{ "value": 0.5,"thickness": 3,"emptyFill": "#ffffff","lineCap": "square", "size": 112, "fill": { "color": "#3c72fc" } }'
                      ></div>
                      <span>50%</span>
                    </div>
                    <div className="listen__progress-content">
                      <h3>Sustainable Products</h3>
                    </div>
                  </div>
                  <div className="listen__progress">
                    <div className="listen__progress-box">
                      <div
                        className="circle-progress"
                        data-options='{ "value": 1,"thickness": 3,"emptyFill": "#ffffff","lineCap": "square", "size": 112, "fill": { "color": "#3c72fc" } }'
                      ></div>
                      <span>100%</span>
                    </div>
                    <div className="listen__progress-content">
                      <h3>Quality Service</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="listen__right">
                <div className="listen__right-faq">
                  <div
                    className="accrodion-grp"
                    data-grp-name="faq-one-accrodion"
                  >
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>How it works?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Upon successful conversation, we put your elected
                            products for sale on our platform with a lot of
                            controls with you to customize.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accrodion active">
                      <div className="accrodion-title">
                        <h4>How to track my inventory?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            We provide brands with their own portal
                            where they can login, check, track, and and update
                            their inventory.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>How secure is my data?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Transande is built by leveraging blockchain
                            technology which has the strongest encryption and
                            security in the digital world..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-one" id="team">
        <div className="team-one__container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Meet the team</h2>
            <span className="section-title__tagline">
              People that bring you results
            </span>
          </div>
          <div className="row justify-content-md-center">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src="assets/images/team/pratik.jpg" alt="" />
                  <div className="team-one__hover-content">
                    <h3 className="team-one__name">Pratik Dahal</h3>
                    <p className="team-one__title">Co-founder and CEO</p>
                  </div>
                  <div className="team-one__bottom">
                    <div className="team-one__btn-box">
                      <a
                        href="https://www.linkedin.com/in/pratik-dahal-a6a047182/"
                        className="team-one__btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Contact Me
                      </a>
                    </div>
                    <div className="team-one__social">
                      <a
                        href="https://www.linkedin.com/in/pratik-dahal-a6a047182/"
                        className="clr-ins"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src="assets/images/team/sangam.jpg" alt="" />
                  <div className="team-one__hover-content">
                    <h3 className="team-one__name">Sangam Ninglekhu</h3>
                    <p className="team-one__title">Co-founder and Chairman</p>
                  </div>
                  <div className="team-one__bottom">
                    <div className="team-one__btn-box">
                      <a
                        href="https://www.linkedin.com/in/sangamninglekhu/"
                        className="team-one__btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Contact Me
                      </a>
                    </div>
                    <div className="team-one__social">
                      <a
                        href="https://www.linkedin.com/in/sangamninglekhu/"
                        className="clr-fb"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src="assets/images/team/sandip.jpg" alt="" />
                  <div className="team-one__hover-content">
                    <h3 className="team-one__name">Sandip Gupta</h3>
                    <p className="team-one__title">
                      Co-founder and Managing Director
                    </p>
                  </div>
                  <div className="team-one__bottom">
                    <div className="team-one__btn-box">
                      <a
                        href="https://www.linkedin.com/in/sandipgupta1/"
                        className="team-one__btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Contact Me
                      </a>
                    </div>
                    <div className="team-one__social">
                      <a
                        href="https://www.linkedin.com/in/sandipgupta1/"
                        className="clr-fb"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="message-box" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="message-box__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title">
                    get in touch with our team
                  </h2>
                  {/* <span className="section-title__tagline">
                    Trusted by more than 4,200 customers
                  </span> */}
                </div>
                <div className="message-box__social">
                  <a
                    href="https://www.linkedin.com/company/transande"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  {/* <a href="/#" className="clr-fb">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="/#" className="clr-dri">
                    <i className="fab fa-dribbble"></i>
                  </a>
                  <a href="/#" className="clr-ins">
                    <i className="fab fa-instagram"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="message-box__right">
                <Form
                  name="contact"
                  onSubmit={handleSubmit(onSubmit)}
                  className="comment-one__form contact-form-validated"
                >
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="comment-form__input-box">
                        <Form.Field>
                          <input
                            placeholder="Full Name"
                            name="fullname"
                            type="text"
                            {...register("fullname", {
                              required: true,
                              maxLength: 20,
                              onChange: handleChange,
                            })}
                            value={state.fullname}
                          />
                        </Form.Field>
                        {errors.fullname && <p>Full name is required and should not exceed 20 characters.</p>}

                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="comment-form__input-box">
                        <Form.Field>
                          <input
                            placeholder="Email"
                            name="email"
                            type="email"
                            {...register("email", {
                              required: true,
                              pattern:
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              onChange: handleChange,
                            })}
                            value={state.email}
                          />
                        </Form.Field>
                        {errors.email && <p>Email is required and should be valid.</p>}

                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="comment-form__input-box">
                        <Form.Field>
                          <input
                            placeholder="Subject"
                            name="subject"
                            type="text"
                            {...register("subject", {
                              required: true,
                              maxLength: 20,
                              onChange: handleChange,
                            })}
                            value={state.subject}
                          />
                        </Form.Field>
                        {errors.subject && <p>Subject is required and should not exceed 20 characters.</p>}

                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="comment-form__input-box">
                        <Form.Field>
                          <textarea
                            placeholder="Message"
                            name="message"
                            type="text"
                            {...register("message", {
                              required: true,
                              maxLength: 200,
                              onChange: handleChange,
                            })}
                            value={state.message}
                          ></textarea>
                        </Form.Field>
                        {errors.message && (
                          <p>
                            Message is required and should not exceed 200
                            characters.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="comment-form__input-box"></div>
                      <button
                        type="submit"
                        className="thm-btn comment-form__btn"
                      >
                        Send a message
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div
          className="site-footer-shape wow slideInRight"
          data-wow-delay="100ms"
          data-wow-duration="3500ms"
          style={{
            backgroundImage: "url(assets/images/shapes/footer-shape.png)",
          }}
        ></div>
        <div className="container">
          <div className="site-footer__top">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <a href="/">
                      <img src="assets/images/logo.png" alt="" />
                    </a>
                  </div>
                  <p className="footer-widget__text">
                    Transande Apparel Pvt. Ltd..
                  </p>
                  <ul className="list-unstyled footer-widget__contact-list">
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-square-alt"></i>
                      </div>
                      <div className="text">
                        <p>
                          <a href="tel:+977 9862679570">+977 9862679570</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="text">
                        <p>
                          <a href="mailto:info@transande.com">
                            info@transande.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="text">
                        <p>Srijananagar, Bhaktapur</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__explore clearfix">
                  <h3 className="footer-widget__title">Explore</h3>
                  <ul className="footer-widget__explore-list list-unstyled">
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
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                  {/* <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                                    <li><a href="contact.html">Support</a></li>
                                    <li><a href="faq.html">Terms of use</a></li>
                                    <li><a href="about.html">Privacy policy</a></li>
                                    <li><a href="faq.html">Help</a></li>
                                </ul> */}
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-6 col-md-8 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__newsletter">
                  <h3 className="footer-widget__title footer-widget__title-news">
                    Newsletter
                  </h3>
                  <Form
                    name="newsletter"
                    onSubmit={handleSubmit2(onSubmit2)}
                    className="footer-widget__newsletter-form"
                  >
                    <p className="footer-widget__newsletter-text">
                      Subscribe for latest articles and resources
                    </p>
                    <div className="footer-widget__newsletter-input-box">
                      <Form.Field>
                        <input
                          placeholder="Email"
                          name="email2"
                          type="email"
                          {...register2("email2", {
                            required: true,
                            pattern:
                              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            onChange: handleChange2,
                          })}
                          value={state2.email2}
                        />
                      </Form.Field>

                      {/* <input type="text" placeholder="Your name" name="name"> */}
                    <button
                      type="submit"
                      className="footer-widget__newsletter-btn"
                    >
                      Register
                    </button>
                    </div>
                    {errors2.email2 && <p>Email is required and should be valid.</p>}


                  </Form>

                  {/* <form className="footer-widget__newsletter-form">
                    <p className="footer-widget__newsletter-text">
                      Subsrcibe for latest articles and resources
                    </p>
                    <div className="footer-widget__newsletter-input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                      <button
                        type="submit"
                        className="footer-widget__newsletter-btn"
                      >
                        Register
                      </button>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer-bottom">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer-bottom__inner">
                  <div className="site-footer-bottom__left">
                    <p>
                      © Copyright 2019 by <a href="/">Transande</a> | Built by{" "}
                      <a
                        href="https://bitmosys.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bitmosys Labs
                      </a>
                    </p>
                  </div>
                  <div className="site-footer__social">
                    {/* <a href="https://www.facebook.com/Transande-Apparel-105269985429551" className="clr-fb"><i className="fab fa-facebook"></i></a> */}
                    <a
                      href="https://www.linkedin.com/company/transande"
                      className="clr-dri"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    {/* <a href="/" className="clr-ins"><i className="fab fa-instagram"></i></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="angleup">
        <a
          href="/#"
          data-target="html"
          className="scroll-to-target scroll-to-top"
        >
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}

export default Home;
