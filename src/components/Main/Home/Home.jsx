import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Home.css";

import slide1 from "../../../Img/Carousel/slide-1.jpg";
import slide2 from "../../../Img/Carousel/slider-2.jpg";
import { useEffect, useState } from "react";


function Home() {

    let [responseData, setResponseData] = useState([]);
    useEffect(() => {
        fetch("https://ecommerce.routemisr.com/api/v1/products")
            .then((res) => res.json())
            .then((data) => setResponseData(data.data));
    }, []);
    return (
        <div className="page">

            <main className="page-content">
                {/* Carousel-section */}
                <section className="Carousel-section py-5">
                    <div className="container">
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>

                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                            </div>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={slide1} className="d-block w-100" alt="slide-1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={slide2} className="d-block w-100" alt="slide-2" />
                                </div>
                            </div>

                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* categories section */}
                <section className="categories-section py-2">
                    <div className="container">
                        <h3>Categories we offer:</h3>

                        {/* */}
                        <div className="categories-slider py-2" id="categoriesSlider">
                            {/*    Categories components */}
                        </div>
                    </div>
                </section>

                {/* product label */}
                <section className="productLabel">
                    <div className="container py-4">
                        <h3>Featured products:</h3>
                    </div>
                </section>

                {/* product section */}
                <section className="Product-section py-3">
                    <div className="container">
                        <div className="row g-3" id="productsRow">
                            {responseData.map(product => (
                                
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" key={product._id}>
                                    <div className="product-card p-3 d-flex flex-column">
                                        <div className="product-image-wrapper mb-3">
                                            <img src={product.imageCover} className="product-img" alt={product.title} />
                                        </div>

                                        <p className="product-subcategory">{product.subcategory[0].name}</p>

                                        <h5 className="product-title mb-2">{product.title}</h5>

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="product-price">{product.price} EGP</span>
                                            <span className="product-rating">
                                                <i className="fa-solid fa-star star-color"></i> {product.ratingsAverage}
                                            </span>
                                        </div>

                                        <div className="mt-auto d-flex gap-2 justify-content-between">
                                            <button className="product-btn btn-sm">View</button>
                                            <button className="product-btn btn-sm">Wish List</button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>
            </main>

        </div>
    );
}

export default Home;
