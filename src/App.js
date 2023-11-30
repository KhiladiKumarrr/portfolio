import logo from './logo.svg';
import './App.css';



import undraw from './images/undraw/undraw_software_engineer_lvl5.svg'
import image01 from './images/project/project-image01.png'
import image02 from './images/project/project-image02.png'
import image03 from './images/project/project-image03.png'
import image04 from './images/project/project-image04.png'
import image05 from './images/project/project-image05.png'

import HomeButton from './images/undraw/settings_accessibility_FILL0_wght300_GRAD0_opsz24.png'
import { Carousel } from 'react-bootstrap';
//  import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div classNameName="App">



{/* <!-- MENU --> */}
<nav className="navbar navbar-expand-sm navbar-light">
    <div className="container">
        <a className="navbar-brand" href="index.html"><i className='uil uil-user'></i> Home
        {/* <img src={<HomeButton/>}/> */}
        
        </a>
        {/* <HomeIcon/> */}

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <a href="#about" className="nav-link"><span data-hover="About">About</span></a>
                </li>
                <li className="nav-item">
                    <a href="#project" className="nav-link"><span data-hover="Projects">Projects</span></a>
                </li>
                <li className="nav-item">
                    <a href="#resume" className="nav-link"><span data-hover="Resume">Resume</span></a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link"><span data-hover="Contact">Contact</span></a>
                </li>
            </ul>

            {/* <ul className="navbar-nav ml-lg-auto">
                <div className="ml-lg-4">
                  <div className="color-mode d-lg-flex justify-content-center align-items-center">
                    <i className="color-mode-icon"></i>
                    Color mode
                  </div>
                </div>
            </ul> */}
        </div>
    </div>
</nav>

{/* <!-- ABOUT --> */}
<section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
    <div className="container">
        <div className="row">
            
            <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                <div className="about-text">
                    <small className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></small>
                    <h1 className="animated animated-text">
                        <span className="mr-2">Hey folks, I'm</span>
                            <div className="animated-info">
                                <span className="animated-item">Akshay</span>
                                <span className="animated-item">ReactJs Developer</span>
                                {/* <span className="animated-item">UI Specialist</span> */}
                            </div>
                    </h1>
<p>Passionate ReactJS developer with three years of hands-on experience in the dynamic world of web development. My journey in this ever-evolving field has been a thrilling exploration of turning ideas into seamless, user-centric digital experiences.</p>
                    {/* <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p> */}
                    
                    {/* <div className="custom-btn-group mt-4"> */}
                      {/* <a href="#" className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> Download Resume</a> */}
                      {/* <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a> */}
                    {/* </div> */}
                </div>
            </div>

            <div className="col-lg-5 col-md-12 col-12">
                <div className="about-image svg">
                    {/* <img src="src/images/undraw/undraw_software_engineer_lvl5.svg" className="img-fluid" alt="svg image" /> */}
                    <img src={undraw} className="img-fluid" alt="svg image" />

                </div>
            </div>

        </div>
    </div>
</section>

{/* <!-- PROJECTS --> */}
<section className="project py-5" id="project"
>
    <div className="container"
    >
            
            <div className="row">
              <div className="col-lg-11 text-center mx-auto col-12">

                  <div className="col-lg-8 mx-auto">
                    <h2>Things I have Created</h2>
                  </div>
                  <Carousel className="owl-carousel owl-theme" 
                  style={{backgroundColor: "brown"}}
                  >
                    <Carousel.Item className="item"
                  // style={{backgroundColor: "brown"}}
                    
                    >


                      <div className="project-info">
                        <img src={image01} className="img-fluid" alt="project image" />
                      </div>
                    </Carousel.Item>

                    <Carousel.Item className="item">
                      <div className="project-info">
                        <img src={image02} className="img-fluid" alt="project image" />
                      </div>
                    </Carousel.Item>

                    <Carousel.Item className="item">
                      <div className="project-info">
                        <img src={image03} className="img-fluid" alt="project image" />
                      </div>
                    </Carousel.Item>

                    <Carousel.Item className="item">
                      <div className="project-info">
                        <img src={image04} className="img-fluid" alt="project image" />
                      </div>
                    </Carousel.Item>

                    <Carousel.Item className="item">
                      <div className="project-info">
                        <img src={image05} className="img-fluid" alt="project image" />
                      </div>
                    </Carousel.Item>
                  </Carousel>

              </div>
            </div>
    </div>
</section>

{/* <!-- FEATURES --> */}
<section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
    <div className="container">
        <div className="row">

            <div className="col-lg-6 col-12">
              <h2 className="mb-4">Experiences</h2>

                <div className="timeline">
                    <div className="timeline-wrapper">
                         <div className="timeline-yr">
                              <span>2022</span>
                         </div>
                         <div className="timeline-info">
                              <h3><span>Software Developer</span><br></br>
                              <small> Agreeya Solution</small></h3>
                              {/* <p>Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.</p> */}
                              <p>worked here for more then 2 years on more then 4 projects related to ReactJs, which includes creating dashboard and websites.Also plus getting data through API and show them on UI.</p>
                         </div>
                    </div>

                    <div className="timeline-wrapper">
                        <div className="timeline-yr">
                            <span>2020</span>
                        </div>
                        <div className="timeline-info">
                            <h3><span>Trainee Software Developer</span><small> Xavient system</small></h3>
                            {/* <p>Fusce rutrum augue id orci rhoncus molestie. Nunc auctor dignissim lacus vel iaculis.</p> */}
                            <p>my Earlier days in web develpement, i learn here about HTML,CSS,JavaScript, React and advance React topics</p>
                        </div>
                    </div>

                    {/* <div className="timeline-wrapper">
                        <div className="timeline-yr">
                            <span>2016</span>
                        </div>
                        <div className="timeline-info">
                            <h3><span>UI Freelancer </span></h3>
                            <p>Sed fringilla vitae enim sit amet cursus. Sed cursus dictum tortor quis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                    </div> */}
                    
                    {/* <div className="timeline-wrapper">
                        <div className="timeline-yr">
                            <span>2014</span>
                        </div>
                        <div className="timeline-info">
                            <h3><span>Junior Designer<small>Crafted Co.</small> </span></h3>
                            <p>Cras scelerisque scelerisque condimentum. Nullam at volutpat mi. Nunc auctor ipsum eget magna consequat viverra.</p>
                        </div>
                    </div> */}

                </div>
            </div>

            <div className="col-lg-6 col-12">
              <h2 className="mb-4 mobile-mt-2">Educations</h2>

                <div className="timeline">
                    <div className="timeline-wrapper">
                         <div className="timeline-yr">
                              <span>2018</span>
                         </div>
                         <div className="timeline-info">
                              <h3><span>B.Tech</span><small>ECE</small></h3>
                              <p>Did my graduation in electronics and communication in 2018 from GGSIPU university</p>
                         </div>
                    </div>

                    <div className="timeline-wrapper">
                        <div className="timeline-yr">
                            <span>2015</span>
                        </div>
                        <div className="timeline-info">
                            <h3><span>Diploma</span><small> ECE</small></h3>
                            {/* <p><a rel="nofollow" href="https://www.facebook.com/tooplate">Tooplate</a> is a great website to download HTML templates without any login or email.</p> */}
                            <p>Did my diploama in ECE in 2015 from Board Of Technical Education</p>
                        </div>
                    </div>
                    
                    <div className="timeline-wrapper">
                        <div className="timeline-yr">
                            <span>2012</span>
                        </div>
                        <div className="timeline-info">
                            <h3><span> Matericulation</span><small>CBSE</small></h3>
                            {/* <p>You can freely use Tooplate's templates for your business or personal sites. You cannot redistribute this template without a permission.</p> */}
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
</section>

{/* <!-- CONTACT --> */}
<section className="contact py-5" id="contact">
  <div className="container">
    <div className="row">
      
      <div className="col-lg-5 mr-lg-5 col-12">
        <div className="google-map w-100">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3503.0429133301964!2d77.1223182!3d28.5984894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d4a17466b83%3A0x60c451d82d96a388!2sDelhi%20cantt!5e0!3m2!1sen!2sin!4v1700480575150!5m2!1sen!2sin" width="400" height="300" frameborder="0"
           style={{border:0}}
           allowfullscreen
          ></iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.558402180099!2d-73.99373482142036!3d40.75895421922642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b8fb3083%3A0xa0f9aef176042a5c!2sTheater+District%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2smm!4v1549875377188" width="400" height="300" frameborder="0"
           style={{border:0}}
            allowfullscreen></iframe> */}
        </div>

        <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
            <div className="contact-info-item">
              <h3 className="mb-3 text-white">Akshay</h3>
              <p className="footer-text mb-0">9999999999</p>
              <p><a href="mailto:hello@company.co">akshay.tanwar50@gmail.com</a></p>
            </div>

            {/* <ul className="social-links">
                 <li><a href="#" className="uil uil-dribbble" data-toggle="tooltip" data-placement="left" title="Dribbble"></a></li>
                 <li><a href="#" className="uil uil-instagram" data-toggle="tooltip" data-placement="left" title="Instagram"></a></li>
                 <li><a href="#" className="uil uil-youtube" data-toggle="tooltip" data-placement="left" title="Youtube"></a></li>
            </ul> */}
        </div>
      </div>

      <div className="col-lg-6 col-12">
        <div className="contact-form">
          <h2 className="mb-4">Interested to work together? Let's talk</h2>

          <form action="" method="get">
            <div className="row">
              <div className="col-lg-6 col-12">
                <input type="text" className="form-control" name="name" placeholder="Your Name" id="name"/>
              </div>

              <div className="col-lg-6 col-12">
                <input type="email" className="form-control" name="email" placeholder="Email" id="email"/>
              </div>

              <div className="col-12">
                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message"></textarea>
              </div>

              <div className="ml-lg-auto col-lg-5 col-12">
                <input type="submit" className="form-control submit-btn" value="Send Button"/>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>





    </div>
  );
}

export default App;


