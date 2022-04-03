import React from 'react';
import './App.css';
import Nav from './mycomponent/Nav';
import HeroSection from './mycomponent/HeroSection';

function App() {
  return <> 
        <div className="main-container">
            <Nav/>
            <HeroSection/>
            {/* About Us Section */}
            <section className="pt160 pb160 bg-light row">
                    <div className="col-md-6 content">
                        <p className='mx120 mb0 abt-para text-gray'>About Us</p>
                    </div>   
                    <div className="col-md-6 content">
                        <h2 className='about-h2 fw-normal ls text-gray'>DEVELOP & SHIP</h2>
                        <h2 className='about-h2 text-uppercase fw-bold ls text-gray'>Faster</h2>
                        <p className='abt-1 mb0 fs-0 mt-3 mt-md-5'>Unlock developer productivity. Long builds, complex config, and disjointed tools break the development process. Remove the obstacles individual contributors face by giving them a better toolkit.</p>
                    </div>
            </section>
            {/* case-study scetion */}
            <div className="row">
                            <img alt="" src="img/qq.jpg" />
                            <div className="col-md-6 bg-image1 pb-case">
                                <p className='pb-case text-white'>Case Study</p>
                                <h3 className="pb-case-h3 fw-normal ls text-white">Pinwheel inc</h3>
                                <p className="pb-case-p">It’s simple! With Pinwheel you have the tools you need to work together with your child to introduce healthy tech habits.</p>

                            </div>
                            <div className="col-md-6 bg-image2 pb-case">
                                <p className='pb-case text-white'>Case Study</p>
                                <h3 className="pb-case-h3 fw-normal ls text-white">Skribe ai</h3>
                                <p className="pb-case-p">Skribe replaces court reporters with software, drastically reduces costs, and makes it 10x faster & easier to capture, share and analyze testimony.</p>
                            </div>
                    </div>
            {/* testimonial scetion */}
            

            <section className="pt160 pb160 bg-blue row">
                    <div className="col-md-6 content">
                        <p className='mx120 mb0 abt-para'>Testimonial</p>
                    </div>   
                    <div className="col-md-6 content">
                    <img class="t_img" src="img/qq.png" />
                    <div class="testimonials quote-author text-white">
                                <ul>
                                    <li>
                                        <p class="lead">Everything we imagined in our project came true, our progress boosted 5x after we started the journey with Studio Developer Hub.</p>
                                        <div class="quote-author">
                                            <h4 class="uppercase text-white">Rassel peter</h4>
                                            <span className="t_author text-white">Bussiness</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>     
                    </div>
            </section>

            {/* blog scetion */}
            <section class="image-bg overlay parallax">
                <div class="background-image-holder">
                    <img alt="Background Image" class="background-image" src="img/cover11.jpg" />
                </div>
                <div class="container">
                    <div class="row">
            
                    </div>
                    {/* <!--end of row--> */}
                    <div class="row">
                        <div class="col-sm-5 mx-auto">
                            <div class="feature bordered boxed">
                                <div class="text-left">
                                    <h3 class="uppercase mb16">Build</h3>
                                    <h3 class="uppercase mb16">offshore team</h3>
                                </div>
                                <p>
                                We offer a seamless, full-build service for any of our customers.
                                </p>
                            </div>
                            {/* <!--end of feature--> */}
                        </div>
                        <div class="col-sm-5 mx-auto">
                            <div class="feature bordered boxed">
                                <div class="text-left">
                                    <h3 class="uppercase mb16">Hire</h3>
                                    <h3 class="uppercase mb16">your developers</h3>
                                </div>
                                <p>
                                We offer a seamless, full-build service for any of our customers.
                                </p>
                            </div>
                            {/* <!--end of feature--> */}
                        </div>
                    </div>
                    {/* <!--end of row--> */}
                </div>
                {/* <!--end of container--> */}
            </section>
            {/* Footer scetion */}
            <footer className="footer-1 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <span className="nat-para text-gray">&copy; 2022 Studio Developer Hub. All Rights Reserved.</span>
                        </div>
                        <div className="col-sm-6 text-right">
                        </div>
                    </div>
                </div>
                {/* <!--end of container--> */}
                <a className="btn btn-sm fade-half back-to-top inner-link" href="#top">Top</a>
            </footer>
        </div>
    </>
}

export default App;
// export default function App() {
//   return <input />;
// }
