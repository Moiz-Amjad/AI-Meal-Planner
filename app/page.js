'use client';
import Head from 'next/head';
import { useState } from 'react';
import WaitlistModal from '../components/WaitlistModal';
import "../public/css/style.css";
import "../public/css/font-awesome.min.css";
import Script from 'next/script';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Head>
        <title>Namari - Free Landing Page Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../public/css/style.css" />
        <link rel="stylesheet" href="../public/css/namari-color.css" />
        <link rel="stylesheet" href="../public/css/font-awesome.min.css" />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' />
        <script src="jquery-3.7.1.min.js"></script>
      
      </Head>
      <Script type="text/javascript" src="/static/jquery.1.8.3.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/wow.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/featherlight.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/featherlight.gallery.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/jquery.enllax.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/jquery.scrollUp.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/jquery.easing.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/jquery.stickyNavbar.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/jquery.waypoints.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/images-loaded.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/lightbox.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/site.js" strategy="lazyOnload" />
      {/* Preloader 
      <div id="preloader">
        <div id="status" className="la-ball-triangle-path">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

       Page Border */}
      <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
        <div className="top-border wow fadeInDown animated" style={{ visibility: 'visible', animationName: 'fadeInDown' }}></div>
        <div className="right-border wow fadeInRight animated" style={{ visibility: 'visible', animationName: 'fadeInRight' }}></div>
        <div className="bottom-border wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}></div>
        <div className="left-border wow fadeInLeft animated" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}></div>
      </div>

      <div id="wrapper">

        <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
          <div id="header" className="nav-collapse">
            <div className="row clearfix">
              <div className="col-1">

                {/* Logo */}
                <div id="logo">
                  {/* Logo that is shown on the banner */}
                  <img src="images/logo.png" id="banner-logo" alt="Landing Page"/>
                  {/* The Logo that is shown on the sticky Navigation Bar */}
                  <img src="images/logo-2.png" id="navigation-logo" alt="Landing Page"/>
                </div>
                {/* End of Logo */}

                <aside>
                  {/* Social Icons in Header */}
                  <ul className="social-icons">
                    <li>
                      <a target="_blank" title="Facebook" href="https://www.facebook.com/username">
                        <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" title="Google+" href="http://google.com/+username">
                        <i className="fa fa-google-plus fa-1x"></i><span>Google+</span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" title="Twitter" href="http://www.twitter.com/username">
                        <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" title="Instagram" href="http://www.instagram.com/username">
                        <i className="fa fa-instagram fa-1x"></i><span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" title="behance" href="http://www.behance.net">
                        <i className="fa fa-behance fa-1x"></i><span>Behance</span>
                      </a>
                    </li>
                  </ul>
                  {/* End of Social Icons in Header */}
                </aside>

                {/* Main Navigation */}
                <nav id="nav-main">
                  <ul>
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#clients">Clients</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                  </ul>
                </nav>
                {/* End of Main Navigation */}

                <div id="nav-trigger"><span></span></div>
                <nav id="nav-mobile"></nav>

              </div>
            </div>
          </div>

          {/* Banner Content */}
          <div id="banner-content" className="row clearfix">
            <div className="col-38">
              <div className="section-heading">
                <h1>A FREE AND SIMPLE LANDING PAGE</h1>
                <h2>Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!</h2>
              </div>

              {/* Call to Action */}
              <button className="button" onClick={handleModalToggle}>JOIN WAITLIST TODAY</button>
            </div>
          </div>
        </header>

        {/* Waitlist Modal */}
        {isModalOpen && <WaitlistModal isOpen={isModalOpen} onClose={handleModalToggle} />}

        {/* Main Content Area */}
        <main id="content">
          <section id="about" className="introduction scrollto">
            <div className="row clearfix">
              <div className="col-3">
                <div className="section-heading">
                  <h3>SUCCESS</h3>
                  <h2 className="section-title">How We Help You To Sell Your Product</h2>
                  <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                </div>
              </div>

              <div className="col-2-3">
                {/* Icon Block */}
                <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                  <div className="icon"><i className="fa fa-html5 fa-2x"></i></div>
                  <div className="icon-block-description">
                    <h4>HTML5 &amp; CSS3</h4>
                    <p>Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico</p>
                  </div>
                </div>
                {/* End of Icon Block */}
              

                    {/* Icon Block */}
                  <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                    {/* Icon */}
                    <div className="icon">
                      <i className="fa fa-bolt fa-2x"></i>
                    </div>
                    {/* Icon Block Description */}
                    <div className="icon-block-description">
                      <h4>Easy to Use</h4>
                      <p>Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi</p>
                    </div>
                  </div>
                  {/* End of Icon Block */}

                  {/* Icon Block */}
                  <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                    {/* Icon */}
                    <div className="icon">
                      <i className="fa fa-tablet fa-2x"></i>
                    </div>
                    {/* Icon Block Description */}
                    <div className="icon-block-description">
                      <h4>Fully Responsive</h4>
                      <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum</p>
                    </div>
                  </div>
                  {/* End of Icon Block */}

                  {/* Icon Block */}
                  <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                    {/* Icon */}
                    <div className="icon">
                      <i className="fa fa-rocket fa-2x"></i>
                    </div>
                    {/* Icon Block Description */}
                    <div className="icon-block-description">
                      <h4>Parallax Effect</h4>
                      <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum</p>
                    </div>
                  </div>
                  {/* End of Icon Block */}
                </div>

            </div>


        </section>
     


        <aside id="gallery" className="row text-center scrollto clearfix" data-featherlight-gallery data-featherlight-filter="a">
          <a href="images/gallery-images/gallery-image-1.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="0.1s">
            <img src="images/gallery-images/gallery-image-1.jpg" alt="Landing Page" />
          </a>
          <a href="images/gallery-images/gallery-image-2.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="0.3s">
            <img src="images/gallery-images/gallery-image-2.jpg" alt="Landing Page" />
          </a>
          <a href="images/gallery-images/gallery-image-3.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="0.5s">
            <img src="images/gallery-images/gallery-image-3.jpg" alt="Landing Page" />
          </a>
          <a href="images/gallery-images/gallery-image-4.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="1.1s">
            <img src="images/gallery-images/gallery-image-4.jpg" alt="Landing Page" />
          </a>
          <a href="images/gallry-images/gallery-image-5.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="0.9s">
            <img src="images/gallery-images/gallery-image-5.jpg" alt="Landing Page" />
          </a>
          <a href="images/gallery-images/gallery-image-6.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="0.7s">
            <img src="images/gallery-images/gallery-image-6.jpg" alt="Landing Page" />
          </a>
        </aside>



        {/* Content Section */}
        <div id="services" className="scrollto clearfix">
          <div className="row no-padding-bottom clearfix">
            {/* Content Left Side */}
            <div className="col-3">
              {/* User Testimonial */}
              <blockquote className="testimonial text-right bigtest">
                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</q>
                <footer>— John Doe, Happy Customer</footer>
              </blockquote>
              {/* End of Testimonial */}
            </div>
            {/* End Content Left Side */}

            {/* Content of the Right Side */}
            <div className="col-3">
              <div className="section-heading">
                <h3>BELIEVING</h3>
                <h2 className="section-title">Focusing On What Matters Most</h2>
                <p className="section-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!
                </p>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!
              </p>
              <a href="#" data-videoid="UYJ5IjBRlW8" data-videosite="youtube" className="button video link-lightbox">
                WATCH VIDEO <i className="fa fa-play" aria-hidden="true"></i>
              </a>
            </div>
            {/* End Content Right Side */}

            <div className="col-3">
              <img src="images/dancer.jpg" alt="Dancer" />
            </div>
          </div>
        </div>
        {/* End of Content Section */}

        {/* Testimonials */}
        <aside id="testimonials" className="scrollto text-center" data-enllax-ratio=".2">
          <div className="row clearfix">
            <div className="section-heading">
              <h3>FEEDBACK</h3>
              <h2 className="section-title">What our customers are saying</h2>
            </div>

            {/* User Testimonial */}
            <blockquote className="col-3 testimonial classic">
              <img src="images/user-images/user-1.jpg" alt="User" />
              <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</q>
              <footer>John Doe - Happy Customer</footer>
            </blockquote>
            {/* End of Testimonial */}

            <blockquote className="col-3 testimonial classic">
              <img src="images/user-images/user-2.jpg" alt="User" />
              <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</q>
              <footer>Roslyn Doe - Happy Customer</footer>
            </blockquote>

            <blockquote className="col-3 testimonial classic">
              <img src="images/user-images/user-3.jpg" alt="User" />
              <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</q>
              <footer>Thomas Doe - Happy Customer</footer>
            </blockquote>
          </div>
        </aside>


        {/* Clients */}
        <section id="clients" className="scrollto clearfix">
          <div className="row clearfix">
            <div className="col-3">
              <div className="section-heading">
                <h3>TRUST</h3>
                <h2 className="section-title">Companies who use our services</h2>
                <p className="section-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!
                </p>
              </div>
            </div>

            <div className="col-2-3">
              <a href="#" className="col-3">
                <img src="images/company-images/company-logo1.png" alt="Company" />
                <div className="client-overlay"><span>Tree</span></div>
              </a>
              <a href="#" className="col-3">
                <img src="images/company-images/company-logo2.png" alt="Company" />
                <div className="client-overlay"><span>Fingerprint</span></div>
              </a>
              <a href="#" className="col-3">
                <img src="images/company-images/company-logo3.png" alt="Company" />
                <div className="client-overlay"><span>The Man</span></div>
              </a>
              <a href="#" className="col-3">
                <img src="images/company-images/company-logo4.png" alt="Company" />
                <div className="client-overlay"><span>Mustache</span></div>
              </a>
              <a href="#" className="col-3">
                <img src="images/company-images/company-logo5.png" alt="Company" />
                <div className="client-overlay"><span>Goat</span></div>
              </a>
              <a href="#" className="col-3">
                <img src="images/company-images/company-logo6.png" alt="Company" />
                <div className="client-overlay"><span>Justice</span></div>
              </a>
              <a href="#" className="col-3">
                <img src="images/company-images/company-logo7.png" alt="Company" />
                <div className="client-overlay"><span>Ball</span></div>
              </a>
              <a href="#" className="col-3">
                <img src="images/company-images/company-logo8.png" alt="Company" />
                <div className="client-overlay"><span>Cold</span></div>
              </a>
              <a href="#" className="col-3">
                <img src="images/company-images/company-logo9.png" alt="Company" />
                <div className="client-overlay"><span>Cold</span></div>
              </a>
            </div>
          </div>
        </section>
        {/* End of Clients */}


        <section id="pricing" className="secondary-color text-center scrollto clearfix ">
            <div className="row clearfix">

                <div className="section-heading">
                    <h3>YOUR CHOICE</h3>
                    <h2 className="section-title">We have the right package for you</h2>
                </div>

                {/* Pricing Tables */}
                <section id="pricing" className="secondary-color text-center scrollto clearfix">
                  <div className="row clearfix">
                    <div className="section-heading">
                      <h3>YOUR CHOICE</h3>
                      <h2 className="section-title">We have the right package for you</h2>
                    </div>

    {/* Pricing Block */}
    <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.4s">
      <div className="pricing-block-content">
        <h3>Personal</h3>
        <p className="pricing-sub">The standard version</p>
        <div className="pricing">
          <div className="price"><span>$</span>19</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <ul>
          <li>5 Downloads</li>
          <li>2 Extensions</li>
          <li>Tutorials</li>
          <li>Forum Support</li>
          <li>1 year free updates</li>
        </ul>
        <a href="#" className="button">BUY TODAY</a>
      </div>
    </div>
    {/* End Pricing Block */}

    {/* Pricing Block */}
    <div className="pricing-block featured col-3 wow fadeInUp" data-wow-delay="0.6s">
      <div className="pricing-block-content">
        <h3>Student</h3>
        <p className="pricing-sub">Most popular choice</p>
        <div className="pricing">
          <div className="price"><span>$</span>29</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <ul>
          <li>15 Downloads</li>
          <li>5 Extensions</li>
          <li>Tutorials with Files</li>
          <li>Forum Support</li>
          <li>2 years free updates</li>
        </ul>
        <a href="#" className="button">BUY TODAY</a>
      </div>
    </div>
    {/* End Pricing Block */}

    {/* Pricing Block */}
    <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.8s">
      <div className="pricing-block-content">
        <h3>Business</h3>
        <p className="pricing-sub">For the whole team</p>
        <div className="pricing">
          <div className="price"><span>$</span>49</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <ul>
          <li>Unlimited Downloads</li>
          <li>Unlimited Extensions</li>
          <li>HD Video Tutorials</li>
          <li>Chat Support</li>
          <li>Lifetime free updates</li>
        </ul>
        <a href="#" className="button">BUY TODAY</a>
      </div>
    </div>
    {/* End Pricing Block */}
  </div>
  </section>
{/* End of Pricing Tables */}
</div>
</section>
</main>





    {/* Footer */}
    <footer id="landing-footer" className="clearfix">
          <div className="row clearfix">
            <p id="copyright" className="col-2">Made with love by <a href="https://www.shapingrain.com">ShapingRain</a></p>
            <ul className="col-2 social-icons">
              <li>
                <a target="_blank" title="Facebook" href="https://www.facebook.com/username">
                  <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                </a>
              </li>
              <li>
                <a target="_blank" title="Google+" href="http://google.com/+username">
                  <i className="fa fa-google-plus fa-1x"></i><span>Google+</span>
                </a>
              </li>
              <li>
                <a target="_blank" title="Twitter" href="http://www.twitter.com/username">
                  <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
                </a>
              </li>
              {/* Add more social icons as necessary */}
            </ul>
          </div>
        </footer>
      </div>

    </div>
  );
}


