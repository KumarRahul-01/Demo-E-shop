import React from "react";
import { FaTruck } from "react-icons/fa6";
import { FaExchangeAlt } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaLinkedin, FaInstagramSquare,FaFacebook,FaTwitter } from "react-icons/fa";


const About = () => {
  return (
    <div>
      <div
        class="modal fade bg-white"
        id="templatemo_search"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            action=""
            method="get"
            class="modal-content modal-body border-0 p-0"
          >
            <div class="input-group mb-2">
              <input
                type="text"
                class="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                class="input-group-text bg-success text-light"
              >
                <i class="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <section class="bg-success py-5">
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-md-8 text-white">
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="col-md-4">
              <img src="src/assets/Img/about-hero.svg" alt="About Hero" />
            </div>
          </div>
        </div>
      </section>
      <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-truck fa-lg">
                  <FaTruck />
                </i>
              </div>
              <h2 class="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fas fa-exchange-alt">
                  <FaExchangeAlt />
                </i>
              </div>
              <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-percent">
                  <FaPercent />
                </i>
              </div>
              <h2 class="h5 mt-4 text-center">Promotion</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-user">
                  <FaUserTie />
                </i>
              </div>
              <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-light py-5">
        <div class="container my-4">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Our Brands</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div class="col-lg-9 m-auto tempaltemo-carousel">
              <div class="row d-flex flex-row">
                <div class="col-1 align-self-center">
                  <a
                    class="h1"
                    href="#templatemo-slide-brand"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <i class="text-light fas fa-chevron-left"></i>
                  </a>
                </div>

                <div class="col">
                  <div
                    class="carousel slide carousel-multi-item pt-2 pt-md-0"
                    id="templatemo-slide-brand"
                    data-bs-ride="carousel"
                  >
                    <div
                      class="carousel-inner product-links-wap"
                      role="listbox"
                    >
                      <div class="carousel-item active">
                        <div class="row">
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="src/assets/Img/brand_01.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="src/assets/Img/brand_02.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="src/assets/Img/brand_03.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="src/assets/Img/brand_04.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-1 align-self-center">
                  <a
                    class="h1"
                    href="#templatemo-slide-brand"
                    role="button"
                    data-bs-slide="next"
                  >
                    <i class="text-light fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="bg-dark" id="tempaltemo_footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4 pt-5">
              <h2 class="h2 text-success border-bottom pb-3 border-light ">
                E-Shop
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <i class="fas fa-map-marker-alt fa-fw"></i>
                  123 Consectetur at ligula 10660
                </li>
                <li>
                  <i class="fa fa-phone fa-fw"></i>
                  <a class="text-decoration-none" href="tel:010-020-0340">
                    010-020-0340
                  </a>
                </li>
                <li>
                  <i class="fa fa-envelope fa-fw"></i>
                  <a
                    class="text-decoration-none"
                    href="mailto:info@company.com"
                  >
                    info@company.com
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 pt-5">
              <h2 class="h2 text-light border-bottom pb-3 border-light">
                Products
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <a class="text-decoration-none" href="#">
                    Luxury
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Sport Wear
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Men's Shoes
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Women's Shoes
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Popular Dress
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Gym Accessories
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Sport Shoes
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 pt-5">
              <h2 class="h2 text-light border-bottom pb-3 border-light">
                Further Info
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <a class="text-decoration-none" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Shop Locations
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row text-light mb-4">
            <div class="col-12 mb-3">
              <div class="w-100 my-3 border-top border-light"></div>
            </div>
            <div class="col-auto me-auto">
              <ul class="list-inline text-left footer-icons">
                <li class="list-inline-item text-center">
                  <a
                    rel="nofollow"
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="http://fb.com/templatemo"
                  >
                    <i class="fab fa-facebook-f fa-lg fa-fw"><FaFacebook /></i>
                  </a>
                </li>
                <li class="list-inline-item  text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <i class="fab fa-instagram fa-lg fa-fw"><FaInstagramSquare /></i>
                  </a>
                </li>
                <li class="list-inline-item  text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <i class="fab fa-twitter fa-lg fa-fw"><FaTwitter /></i>
                  </a>
                </li>
                <li class="list-inline-item   text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.linkedin.com/"
                  >
                    <i class="fab fa-linkedin fa-lg fa-fw"><FaLinkedin /></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-auto">
              <label class="sr-only" for="subscribeEmail">
                Email address
              </label>
              <div class="input-group mb-2">
                <input
                  type="text"
                  class="form-control bg-light border-light text-dark"
                  id="subscribeEmail"
                  placeholder="Email address"
                />
                <div class="input-group-text  ">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-100 bg-black py-3">
          <div class="container">
            <div class="row pt-2">
              <div class="col-12">
                <p class="text-left text-light">
                  Copyright &copy; 2021 Company Name | Designed by{" "}
                  <a
                    rel="sponsored"
                    href="https://templatemo.com/page/1"
                    target="_blank"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
