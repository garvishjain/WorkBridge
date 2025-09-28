

function Footers(){
    <footer>
        {/* <!-- Footer Start--> */}
        <div className="footer-main">
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row  justify-content-between">
                            <div className="col-lg-4 col-md-4 col-sm-8">
                                <div className="single-footer-caption mb-30">
                                    {/* <!-- logo --> */}
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                                    </div>
                                    <div className="footer-tittle">
                                        <div className="footer-pera">
                                            <p className="info1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Quick Links</h4>
                                        <ul>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Projects</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-7">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Contact</h4>
                                        <div className="footer-pera">
                                            <p className="info1">198 West 21th Street, Suite 721 New York,NY 10010</p>
                                        </div>
                                        <ul>
                                            <li><a href="#">Phone: +95 (0) 123 456 789</a></li>
                                            <li><a href="#">Cell: +95 (0) 123 456 789</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-8">
                                <div className="single-footer-caption mb-50">
                                    {/* <!-- Form --> */}
                                    <div className="footer-form">
                                        <div id="mc_embed_signup">
                                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative mail_part" noValidate>
                                                <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus" onFocus={(e) => (e.target.placeholder = "")} onBlur={(e) => (e.target.placeholder = "Email Address")} />
                                                <div className="form-icon">
                                                    <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                                                        SIGN UP
                                                    </button>
                                                </div>
                                                <div className="mt-10 info"></div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <!-- Map --> */}
                                    <div className="map-footer">
                                        <img src="assets/img/gallery/map-footer.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Copy-Right --> */}
                        <div className="row align-items-center">
                            <div className="col-xl-12 ">
                                <div className="footer-copy-right">
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        {/* <!-- Footer End--> */}
    </footer>
}

export default Footers;