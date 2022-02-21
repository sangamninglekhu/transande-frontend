import React from "react";
import '../../App.css';
import { faLaptopCode, faShirt, faEye, faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Home() {
    return (
        <>
        <section className="main-slider main-slider-two">
        <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true,
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
            "delay": 5000
        }}'>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="image-layer"
                        style={{backgroundColor: '#5f9ea0'}}>
                    </div>
                    <div className="image-layer-overlay"></div>
                    <div className="main-slider-two-shape-1"
                        style={{backgroundImage: 'url(assets/images/shapes/main-slider--two-shape-1.png)'}}>
                            
                        </div>
                    <div className="main-slider-two-shape-2"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main-slider__content text-center">
                                    <h2>Transande <br/> Apparel
                                    </h2>
                                    <p>Allevate Your Business</p>
                                    <a href="about.html" className="thm-btn">Collaborate Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="image-layer"
                        style={{backgroundColor: '#5f9ea0'}}>
                    </div>
                    <div className="image-layer-overlay"></div>
                    <div className="main-slider-two-shape-1"
                        style={{backgroundImage: 'url(assets/images/shapes/main-slider--two-shape-1.png)'}}></div>
                    <div className="main-slider-two-shape-2"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main-slider__content text-center">
                                <h2>Scale Up<br/> Fast
                                    </h2>
                                    <p>Expand your Customer</p>
                                    <a href="about.html" className="thm-btn">Collaborate Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-slider__nav main-slider-two__nav">
                <div className="swiper-button-prev" id="main-slider__swiper-button-next"><span
                        className="main-slider__next-text">Next</span><i className="icon-right-arrow icon-left-arrow"></i>
                </div>
                <div className="swiper-button-next" id="main-slider__swiper-button-prev"><span
                        className="main-slider__prev-text">Prev</span><i className="icon-right-arrow"></i>
                </div>
            </div>
        </div>
    </section>

    <section className="industries">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="section-title text-left" style={{color: '#2f4f4f'}}>
                            <h2 className="section-title__title">Industries we serve</h2>
                            <span className="section-title__tagline"></span>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="industries__top-text-box">
                            <p className="industries__top-text">We are starting with following industries at first with plan to gradually expand the range. </p>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled industries__content-box">
                    <li className="industries__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="industries__icon">
                        <FontAwesomeIcon icon={faShirt} />    
                        </div>
                        <h3 className="industries__title"><a href="banking-advising.html">Apparel</a></h3>
                        <p className="industries__text">Hub for chain of ethical and sustainable clothing brands.</p>
                    </li>
                    <li className="industries__single wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="industries__icon">
                        <FontAwesomeIcon icon={faEye} />    
                        </div>
                        <h3 className="industries__title"><a href="business-growth.html">Cosmetics </a></h3>
                        <p className="industries__text">Beauty products from trusted brands.</p>
                    </li>
                    <li className="industries__single wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="industries__icon">
                        <FontAwesomeIcon icon={faCubes} />    
                        </div>
                        <h3 className="industries__title"><a href="financial-advice.html"> Blockchain</a></h3>
                        <p className="industries__text">Next-gen application with transparency and security.</p>
                    </li>
                    <li className="industries__single wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
                        <div className="industries__icon">
                        <FontAwesomeIcon icon={faLaptopCode} />    
                        </div>
                        <h3 className="industries__title"><a href="marketing-rule.html">Software</a></h3>
                        <p className="industries__text">All-in-one platform for brands at low cost.</p>
                    </li>
                </ul>
            </div>
        </section>

        <section className="services-one">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="section-title__title">Services we offer</h2>
                    <span className="section-title__tagline">The best service company in the world</span>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/services/services-1-1.jpg" alt="" />
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><a href="consumer-product.html">consumer product</a>
                                </h3>
                                <p className="services-one__text">Lorem ipsum is simmply free sed qui magni dolores eos qui
                                    voluptatem sequi nesciunt eque porro.</p>
                                <a href="consumer-product.html" className="services-one__btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/services/services-1-2.jpg" alt="" />
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><a href="audit-marketing.html">Audit Marketing</a></h3>
                                <p className="services-one__text">Lorem ipsum is simmply free sed qui magni dolores eos qui
                                    voluptatem sequi nesciunt eque porro.</p>
                                <a href="audit-marketing.html" className="services-one__btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="900ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/services/services-1-3.jpg" alt="" />
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><a href="banking-advising.html">Banking Advising</a>
                                </h3>
                                <p className="services-one__text">Lorem ipsum is simmply free sed qui magni dolores eos qui
                                    voluptatem sequi nesciunt eque porro.</p>
                                <a href="banking-advising.html" className="services-one__btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        </>
    )
}

export default Home;
