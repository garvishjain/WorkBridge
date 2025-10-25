// import { Link } from 'react-router-dom'


function Headers(){
    return(
        <header>
        {/* <!-- Header Start --> */}
        <div className="header-area header-transparent">
            <div className="main-header ">
                <div className="header-top d-none d-lg-block">
                   <div className="container-fluid">
                       <div className="col-xl-12">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="header-info-left">
                                    <ul>     
                                        <li>+(91) 99811 41447</li>
                                        <li>info@workbridgeindia.com</li>
                                        <li>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</li>
                                    </ul>
                                </div>
                                <div className="header-info-right">
                                    <ul className="header-social">    
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                       <li> <a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                       </div>
                   </div>
                </div>
               <div className="header-bottom  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            {/* <!-- Logo --> */}
                            <div className="col-xl-2 col-lg-2 col-md-1">
                                <div className="logo">
                                    {/* <!-- logo-1 --> */}
                                    <a href="/" className="big-logo"><img src="assets/img/logo/WorkBridgeIndiaLogo_AM-removebg-preview.PNG" alt="" /></a>
                                    {/* <!-- logo-2 --> */}
                                    <a href="/" className="small-logo"><img src="assets/img/logo/WorkBridgeLogo-removebg-preview.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                {/* <!-- Main-menu --> */}
                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav> 
                                        <ul id="navigation">
                                            {/* <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/project">Projects</Link></li>
                                            <li><Link to="/service">Services</Link></li>
                                            <li><a href="blog.html">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li><a href="elements.html">Element</a></li>
                                                    <li><a href="project_details.html">Projects Details</a></li>
                                                    <li><a href="services_details.html">Services Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li> */}
                                        </ul>
                                            <li><a href="public/assets/document/Presentation - WorkBridge India Overview_20251007_000126_0000.pdf" download>Download Our Documentation</a></li>
                                    </nav>
                                </div>
                            </div>             
                            <div className="col-xl-2 col-lg-2 col-md-3">
                                <div className="header-right-btn f-right d-none d-lg-block">
                                    <a href="#" className="btn">Contact Now</a>
                                </div>
                            </div>
                            {/* <!-- Mobile Menu --> */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
    </header>
    )
}

export default Headers