import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function HeroSection(){
   
    return(

                    <section className="row image-square right bg-grey pb-sm-64">
                                <div class="nav-bar fixed-top col-md-6">
                                <div class="module left">
                                    <a href="index.html">
                                        <img class="logo logo-light" alt="Studio Hub" src="img/logo-new.png" />
                                        <img class="logo logo-dark" alt="Studio Hub" src="img/logo-new.png" />
                                    </a>
                                </div>
                                </div>
                            <div className="col-md-6 image">
                                <div className="background-image-holder">
                                    <img alt="image" className="background-image" src="img/home2022.jpg" />
                                </div>
                            </div>
                            <div className="col-md-6 content">
                                <h3 className="dis-1 fw-normal ls text-white">A better way to</h3>
                                <h1 className="dis-3">
                                    Build
                                </h1>
                                <h2 className="dis-2 text-uppercase fw-bold ls text-white">Startup Team</h2>
                                <p className="mb0 nat-para fs-0 mt-3 mt-md-5">Go from idea to production with the fastest workflow for remote fullstack teams.</p>

                            </div>
                    </section>
                        
    );
}

export default HeroSection;