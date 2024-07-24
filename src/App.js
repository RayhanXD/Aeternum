import './App.css';
import './locomotive-scroll.css';
import bag from './navIcons/bag.png';
import down from './navIcons/down.png';
import emptyglass from './navIcons/hourglass1.png';
import halfglass from './navIcons/glassbottom.png';
import halfglass1 from './navIcons/glasstop.png';
import up from './navIcons/up.png';
import info from './navIcons/info.png';
import hourglass from './navIcons/hourglass.png'
import brush from './navIcons/brush.png';
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


export const App = () => {

  const scrollRef = new useRef(null);
  const numbers = [
    'U', 
    'M', 
    { img: emptyglass },
    { img: halfglass }, 
    { img: halfglass1}, 
    { img: emptyglass }, 
    'A', 
    'E', 
    'T', 
    'E', 
    'R', 
    'N'
  ];  
  const rotationStep = 360 / numbers.length;
  const clockRef = useRef(null);
  const mainRef = useRef(null);

  const handleMouseEnter = (designType) => {
    const imageElement = document.querySelector('.designImages img');
    const imagePath = `${process.env.PUBLIC_URL}/static/${designType}.jpeg`; // Replace with your actual image paths
    imageElement.src = imagePath;
    imageElement.style.opacity = 1; // Make the image fully visible
  };

  const handleMouseLeave = () => {
    const imageElement = document.querySelector('.designImages img');
    imageElement.style.opacity = 0; // Make the image fully transparent
    imageElement.src = `${process.env.PUBLIC_URL}/static/back.jpg`;
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
              <span key={index} className="subtitle-char" style={{ animationDelay: `${index * 0.05}s` }}>
                {char}
              </span>
            ) : (
              <span key={index} aria-hidden="true">&nbsp;</span>
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
            <img src={hourglass} alt="description" />
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
          <div className="outer">
          <div className="number-container">
              {numbers.map((item, index) => {
                const rotation = rotationStep * index;
                const style = {
                  transform: `rotate(${rotation}deg) translate(230px) rotate(${-rotation}deg)`
                };
                return (
                  <div key={index} className="number" style={style}>
                    {typeof item === 'object' && item.img ? (
                      <img src={item.img} id="hourimg" />
                    ) : (
                      <span>{item}</span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="inner">
            </div>
            <div className="hand">
            </div>
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
                  <a className='designName' onMouseEnter={() => handleMouseEnter('Black')} onMouseLeave={handleMouseLeave} href='#0'>Minimalistic</a>
                  <div className="underline"></div>
                </li>
                <li>
                  <a className='designName' onMouseEnter={() => handleMouseEnter('grey')} onMouseLeave={handleMouseLeave} href='#0'>Professional</a>
                  <div className="underline"></div>
                </li>
                <li>
                  <a className='designName' onMouseEnter={() => handleMouseEnter('lightgrey')} onMouseLeave={handleMouseLeave} href='#0'>Vibrant</a>
                  <div className="underline"></div>
                </li>
                <li>
                  <a className='designName' onMouseEnter={() => handleMouseEnter('white')} onMouseLeave={handleMouseLeave} href='#0'>Artistic</a>
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
      
    <div class="pricing-section"></div>

  
        
    </body>
    
  );
}
