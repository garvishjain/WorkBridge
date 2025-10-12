import Headers from "../Header/Headers";

function Services(){
    return(
        <>
        <Headers />
        <main>
        {/* <!-- slider Area Start--> */}
        <div className="slider-area ">
            <div className="single-slider hero-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/about.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap pt-100">
                                <h2>Services</h2>
                                <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Services</a></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- slider Area End--> */}
        {/* <!-- Services Area Start --> */}
        <div className="services-area1 section-padding30">
            <div className="container">
                {/* <!-- section tittle --> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle mb-55">
                            <div className="front-text">
                                <h2 className="">Our Services</h2>
                            </div>
                            <span className="back-text">Services</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service-cap mb-30">
                            <div className="service-img">
                                <img src="assets/img/service/servicess1.png" alt="" />
                            </div>
                            <div className="service-cap">
                                <h4><a href="services_details.html">Engineering techniques & implementation</a></h4>
                                <a href="services_details.html" className="more-btn">Read More <i className="ti-plus"></i></a>
                            </div>
                            <div className="service-icon">
                                <img src="assets/img/icon/services_icon1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service-cap mb-30">
                            <div className="service-img">
                                <img src="assets/img/service/servicess2.png" alt="" />
                            </div>
                            <div className="service-cap">
                                <h4><a href="services_details.html">Engineering techniques & implementation</a></h4>
                                <a href="services_details.html" className="more-btn">Read More <i className="ti-plus"></i></a>
                            </div>
                            <div className="service-icon">
                                <img src="assets/img/icon/services_icon1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service-cap mb-30">
                            <div className="service-img">
                                <img src="assets/img/service/servicess3.png" alt="" />
                            </div>
                            <div className="service-cap">
                                <h4><a href="services_details.html">Engineering techniques & implementation</a></h4>
                                <a href="services_details.html" className="more-btn">Read More <i className="ti-plus"></i></a>
                            </div>
                            <div className="service-icon">
                                <img src="assets/img/icon/services_icon1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service-cap mb-30">
                            <div className="service-img">
                                <img src="assets/img/service/servicess4.png" alt="" />
                            </div>
                            <div className="service-cap">
                                <h4><a href="services_details.html">Engineering techniques & implementation</a></h4>
                                <a href="services_details.html" className="more-btn">Read More <i className="ti-plus"></i></a>
                            </div>
                            <div className="service-icon">
                                <img src="assets/img/icon/services_icon1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service-cap mb-30">
                            <div className="service-img">
                                <img src="assets/img/service/servicess5.png" alt="" />
                            </div>
                            <div className="service-cap">
                                <h4><a href="services_details.html">Engineering techniques & implementation</a></h4>
                                <a href="services_details.html" className="more-btn">Read More <i className="ti-plus"></i></a>
                            </div>
                            <div className="service-icon">
                                <img src="assets/img/icon/services_icon1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service-cap mb-30">
                            <div className="service-img">
                                <img src="assets/img/service/servicess6.png" alt="" /> 
                            </div>
                            <div className="service-cap">
                                <h4><a href="services_details.html">Engineering techniques & implementation</a></h4>
                                <a href="" className="more-btn">Read More <i className="ti-plus"></i></a>
                            </div>
                            <div className="service-icon">
                                <img src="assets/img/icon/services_icon1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Services Area End -->  */}
    </main>
        </>
    )
}

export default Services;