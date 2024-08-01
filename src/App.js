import './App.css';
import './locomotive-scroll.css';
import bag from './navIcons/bag.png';
import down from './navIcons/down.png';
import emptyglass from './navIcons/hourglass1.png';
import halfglass from './navIcons/glassbottom.png';
import halfglass1 from './navIcons/glasstop.png';
import up from './navIcons/up.png';
import info from './navIcons/info.png';
import hourglass0 from './navIcons/hourglass0.png'
import brush from './navIcons/brush.png';
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


export const App = () => {

  const scrollRef = new useRef(null);
  const clockRef = useRef(null);
  const mainRef = useRef(null);

  const handleMouseEnter = (designType) => {
    const imageElement = document.querySelector('.designImages img');
    const imagePath = `${process.env.PUBLIC_URL}/static/${designType}.png`; // Replace with your actual image paths
    imageElement.src = imagePath;
    imageElement.style.opacity = 1; // Make the image fully visible
  };

  const handleMouseLeave = () => {
    const imageElement = document.querySelector('.designImages img');
    imageElement.style.opacity = 0; // Make the image fully transparent
  };
  
  useEffect(() => {

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: false,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === clockRef.current && entry.isIntersecting) {
            entry.target.classList.add('slide-in-clock');
          } else if (entry.target === clockRef.current) {
            entry.target.classList.remove('slide-in-clock');
          }
          if (entry.target === mainRef.current && entry.isIntersecting) {
            entry.target.classList.add('slide-in-main');
          } else if (entry.target === mainRef.current) {
            entry.target.classList.remove('slide-in-main');
          }
          
        });
      },
      { threshold: 0.1 }
    );

    if (clockRef.current) {
      observer.observe(clockRef.current);
    }

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    return () => {
      if (clockRef.current) {
        observer.unobserve(clockRef.current);
      }
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
      scroll.destroy();
    };
  }, []);

  return (

    <body ref={scrollRef} className='scroll-container'>
      
      <section className="home">
        <div className="title">
          <h1>{'AETERNUM'.split('').map((char, index) => <span key={index} style={{ animationDelay: `${index * 0.075}s` }}>{char}</span>)}</h1>
        </div>
        <div className="subtitle">
          <h1>{'Where  you  create  a  page  in  history'.split('').map((char, index) => {
            return char !== ' ' ? (
              <span key={index} className="subtitle-char" style={{ animationDelay: `${index * 0.025}s` }}>
                {char}
              </span>
            ) : (
              <span key={index} aria-hidden="true">&nbsp;&nbsp;</span>
            );
          })}</h1>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <img id="line1" src={`${process.env.PUBLIC_URL}/static/one.jpeg`} alt="description" />       
          </div>
          <div className="grid-item">
            <img id="line2" src={`${process.env.PUBLIC_URL}/static/two.jpeg`} alt="description" />       
          </div>
          <div className="grid-item">
            <img id="line3" src={`${process.env.PUBLIC_URL}/static/three.jpeg`} alt="description" />       
          </div>
          <div className="grid-item">
            <img id="line4" src={`${process.env.PUBLIC_URL}/static/four.jpeg`} alt="description" />       
          </div>
          <div className="grid-item">
            <img id="line5" src={`${process.env.PUBLIC_URL}/static/five.jpeg`} alt="description" />       
          </div>
          <div className="grid-item">
            <img id="line6" src={`${process.env.PUBLIC_URL}/static/six.jpeg`} alt="description" />       
          </div>
          <div className="grid-item">
            <img id="line7" src={`${process.env.PUBLIC_URL}/static/seven.jpeg`} alt="description" />       
          </div>
          <div className="grid-item">
            <img id="line8" src={`${process.env.PUBLIC_URL}/static/eight.jpeg`} alt="description" />       
          </div>
          <div className="grid-item">
            <img id="line9" src={`${process.env.PUBLIC_URL}/static/nine.jpeg`} alt="description" />       
          </div>
          <div className="grid-item">
            <img id="line10" src={`${process.env.PUBLIC_URL}/static/ten.jpeg`} alt="description" />       
          </div>
          <div className="grid-item">
            <img id="line11" src={`${process.env.PUBLIC_URL}/static/eleven.jpeg`} alt="description" />       
          </div>
        </div>
      </section>

        <div className="navbar">
          <div className="nav">
            <img src={up} alt="description" />
            <button onClick={() => document.querySelector('.home').scrollIntoView({ behavior: 'smooth' })}>
              <img src={hourglass0} alt="Go to home"/>
            </button>
            <button onClick={() => document.querySelector('.about').scrollIntoView({ behavior: 'smooth' })}>
              <img src={info} alt="description"/>
            </button>
            <button onClick={() => document.querySelector('.design').scrollIntoView({ behavior: 'smooth' })}>
              <img src={brush} alt="brush"/>
            </button>
            <img src={bag} alt="description" />          
            <img src={down} alt="description" />
          </div>
         </div>

      <section className="about">
        <div className="content">
          <div className="main" ref={mainRef}>
            <h1>We Are</h1>
            <a id="gradient">Aeternum</a>
            <h2>Develop and Launch your company's <br />website with us.</h2>
          </div>
          <div className="clock" ref={clockRef}>
          <div className="hour-container">
            <div className="hour-item" id="hour1" ></div>
            <div className="hour-item" id="hour2" ></div>
            <div className="hour-item" id="hour3" ></div>
            <div className="hour-item" id="hour4" ></div>
          </div>
        </div>
        </div>
        
      </section>
      
      <section className="design">
          <div className='designContent'>
            <div className='titles'>
              <h1 className='designTitle'>Personally designed by us.</h1>
              <h2 className='designSubtitle'>Hover over each design to discover our capabilities</h2>
            </div>
            <div className='designChange'>
              <ul className='designTypes'>
                <li>
                  <a className='designName' onMouseEnter={() => handleMouseEnter('nixar')} onMouseLeave={handleMouseLeave} href='#Minimal'>Minimalistic</a>
                  <div className="underline"></div>
                </li>
                <li>
                  <a className='designName' onMouseEnter={() => handleMouseEnter('krowe')} onMouseLeave={handleMouseLeave} href='#Professional'>Professional</a>
                  <div className="underline"></div>
                </li>
                <li>
                  <a className='designName' onMouseEnter={() => handleMouseEnter('portfolio')} onMouseLeave={handleMouseLeave} href='#Vibrant'>Vibrant</a>
                  <div className="underline"></div>
                </li>
                <li>
                  <a className='designName' onMouseEnter={() => handleMouseEnter('trays')} onMouseLeave={handleMouseLeave} href='#Artistic'>Artistic</a>
                  <div className="underline"></div>
                </li>
              </ul>
              <div className='designScreen'>
                <div className='designImages'>
                  <img src=''></img>
                </div>
              </div>
            </div>
          </div>
      </section>
      
  <section className="pricing">
    <div className="pricing-container">
      <div className="pricing-box">
        <div className="pricing-header">
          <span style={{color: 'black'}}className ='pricing-plans'>BASIC</span>
          <p className = 'tier-price'>$100: ONE TIME</p>
          </div>
        <div className="pricing-content">
          <ul>
           <li>Highly Skilled Team: Access to experienced developers, designers, and project managers.</li>
           <br></br>
           <br></br>
           <li>Template Design: Access to a library of templates with limited design elements.</li>
           <br></br>
           <br></br>
           <li>Responsive Design: Websites optimized for all devices, ensuring a seamless user experience.</li>
           <br></br>
           <br></br>
           <li>Innovative Ideas: Creative solutions to help your website stand out.</li>
           <br></br>
           <br></br>
           <li>Timely Delivery: Efficient project management ensures projects are completed on schedule.</li>
           <br></br>
           <br></br>
          </ul>
          <button className='purchase-button'>PURCHASE</button>
        </div>
      </div>
      <div className="pricing-box">
        <div className="pricing-header" style={{backgroundColor: '#4ECDC4'}}>
        <span style={{color: 'black'}} className ='pricing-plans'>ADVANCED</span>
        <p className = 'tier-price'>$400: ONE TIME</p>
        </div>
        <div className="pricing-content">
          <ul>
          <li>Highly Skilled Team: Access to experienced developers, designers, and project managers.</li>
          <br></br>
           <br></br>
          <li>Bespoke Solutions: Customized web development tailored to your specific business needs.</li>
          <br></br>
           <br></br>
          <li>Advanced Technology: Utilization of the latest tools and technologies.</li>
          <br></br>
           <br></br>
          <li>Exceptional Design: User-friendly, aesthetically pleasing, and intuitive website design.</li>
          <br></br>
           <br></br>
          <li>Responsive Design: Websites optimized for all devices, ensuring a seamless user experience.</li>
          <br></br>
           <br></br>
          <li>Innovative Ideas: Creative solutions to help your website stand out.</li>
          <br></br>
           <br></br>
          <li>Timely Delivery: Efficient project management ensures projects are completed on schedule.</li>
          <br></br>
           <br></br>
          <button className='purchase-button'>PURCHASE</button>
          </ul>  
        </div>
      </div>
      <div className="pricing-box">
        <div className="pricing-header" style={{backgroundColor: '#34171B'}}>
        <span style={{color: 'black'}}className ='pricing-plans'>PREMIUM</span>
        <p className = 'tier-price'>$60: PER MONTH</p>
        </div>
        <div className="pricing-content">
        <ul>
          <li>Highly Skilled Team: Access to experienced developers, designers, and project managers.</li>
          <br></br>
           <br></br>
          <li>Bespoke Solutions: Customized web development tailored to your specific business needs.</li>
          <br></br>
           <br></br>
          <li>Advanced Technology: Utilization of the latest tools and technologies.</li>
          <br></br>
           <br></br>
          <li>Exceptional Design: User-friendly, aesthetically pleasing, and intuitive website design.</li>
          <br></br>
           <br></br>
          <li>Responsive Design: Websites optimized for all devices, ensuring a seamless user experience.</li>
          <br></br>
           <br></br>
          <li>Continuous Support: Ongoing maintenance and support services.</li>
          <br></br>
           <br></br>
          <li>Innovative Ideas: Creative solutions to help your website stand out.</li>
          <br></br>
           <br></br>
          <li>Website Marketing: Implementation of marketing strategies to grow your brand.</li>
          <br></br>
           <br></br>
          <button className='purchase-button'>PURCHASE</button>

        </ul>
        </div>
      </div>
    </div>
  </section>


      <footer className="aeternum-footer">
        <div className="footer-content">
          <h2 className="aeternum-text">Aeternum</h2>
          <a href="/FAQ" class="faq-link">
      <p class="faq-text">FAQ</p>
    </a>
          <div className="contact-info">
            <div className="email-info">
            <a href="#" class="social-icon"><img src={`${process.env.PUBLIC_URL}/static/email.png`} alt="description" /></a>
              <span>aeternum.dev@gmail.com</span>
            </div>
            <div className="phone-info">
            <a href="#" class="social-icon"><img src={`${process.env.PUBLIC_URL}/static/phone.png`} alt="description" /></a>
              <span>11111111</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="social-icons">
          <a href="#" className="social-icon"><img src={`${process.env.PUBLIC_URL}/static/facebook.png`} alt="description" /></a>
            <a href="#" className="social-icon"><img src={`${process.env.PUBLIC_URL}/static/twitter.png`} alt="description" /></a>
            <a href="https://www.instagram.com/aeternum.dev?igsh=enpscm16ZzZzY3Vt" className="social-icon" target="_blank"  rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/static/insta.png`} alt="description" /></a>




            <a href="https://www.linkedin.com/company/aeternum-web-design/" target="_blank" rel="noopener noreferrer" className="social-icon"><img src={`${process.env.PUBLIC_URL}/static/linkedin.png`} alt="description" /></a>
            <a href="#" className="social-icon"><img src={`${process.env.PUBLIC_URL}/static/tiktok.png`} alt="description" /></a>
            <a href="#" className="social-icon"><img src={`${process.env.PUBLIC_URL}/static/utube.png`} alt="description" /></a>
          </div>
        </div>
      </footer>
    </body>

  );
}
