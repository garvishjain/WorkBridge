import Headers from "../Header/Headers";

function Projects(){
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
                                <h2>Our projects</h2>
                                <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Project</a></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- slider Area End--> */}
        {/* <!-- Project Area Start --> */}
        <section className="project-area  section-padding30">
            <div className="container">
               <div className="project-heading mb-35">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            {/* <!-- Section Tittle --> */}
                            <div className="section-tittle section-tittle3">
                                <div className="front-text">
                                    <h2 className="">Our Projects</h2>
                                </div>
                                <span className="back-text">Gellary</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="properties__button">
                                {/* <!--Nav Button  --> */}
                                <nav> 
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false"> Show  all </a>
                                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Intorior</a>
                                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Recent</a>
                                        <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Big building</a>
                                        <a className="nav-item nav-link" id="nav-technology" data-toggle="tab" href="#nav-techno" role="tab" aria-controls="nav-contact" aria-selected="false">Park</a>
                                    </div>
                                </nav>
                                {/* <!--End Nav Button  --> */}
                            </div>
                        </div>
                    </div>
               </div>
                <div className="row">
                    <div className="col-12">
                        {/* <!-- Nav Card --> */}
                        <div className="tab-content active" id="nav-tabContent">
                            {/* <!-- card ONE --> */}
                            <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">           
                                <div className="project-caption">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project1.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                    <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project2.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project3.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project4.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project5.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project6.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card TWO --> */}
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="project-caption">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project5.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project6.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project1.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project2.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project3.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project4.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card THREE --> */}
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div className="project-caption">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project3.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project4.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project1.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project2.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project5.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project6.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- card FUR --> */}
                            <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                <div className="project-caption">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project1.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project2.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project3.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project4.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project5.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project6.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- card FIVE --> */}
                            <div className="tab-pane fade" id="nav-techno" role="tabpanel" aria-labelledby="nav-technology">
                                <div className="project-caption">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project1.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project2.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project3.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project4.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project5.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-project mb-30">
                                                <div className="project-img">
                                                    <img src="assets/img/gallery/project6.png" alt="" />
                                                </div>
                                                <div className="project-cap">
                                                   <a href="project_details.html" className="plus-btn"><i className="ti-plus"></i></a>
                                                    <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                    <h4><a href="project_details.html">Factory</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* <!-- End Nav Card --> */}
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Project Area End --> */}
    </main>
    </>
)
}

export default Projects;