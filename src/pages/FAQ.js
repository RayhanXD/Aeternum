import React, { useState, useEffect } from 'react';
import './FAQ.css'; 
import { Link } from 'react-router-dom';



const faqData = [
  {
    question: "How does this work?",
    answer: "We work together with extensive communication so that your vision becomes a reality. Firstly you’ll have to sign up and give us your information, in which case we will reach out to you to set up a date and time to discuss what you want to promote and how. Our team of programmers and designers will get straight to it over time and give you constant updates on what changes need to be made. After a while, your website will be set up on the Internet where you can view it anytime."
  },
  {
    question: "Is Pricing Negotiable?",
    answer: "While the base prices may not be negotiable, based on how quickly you would need it, the additional costs may change. Those charges will be negotiable. We try to make sure that we can meet the needs of our clients."
  },
  {
    question: "Why does it cost so little?",
    answer: "Our company's main goal is to meet the needs of our clients. However many start-up companies face the problem of not having the funds to promote their brand. We want to make sure that they have the same opportunities to grow."
  },
  {
    question: "What happens if I don’t like my website at first glance?",
    answer: "It’s alright if you don’t like your website, that’s why we are here. If at the moment you aren’t so sure about the design, we will work with you to make sure that it completely fits your vision."
  },
  {
    question: "What if I want to update my website in the future?",
    answer: "Our company understands that your website will need constant development, in which case we still offer our services if you wish to be part of our monthly plan so we may constantly update your website."
  },
  {
    question: "How will I get my domain?",
    answer: "The domain will be added to the charge and will be given to you after the website is finished."
  },
  {
    question: "How long will it take for my website to be made?",
    answer: "The time may vary based on quality but our company has a goal to finish any website within 2 weeks."
  },
  {
    question: "Can you work with my existing website?",
    answer: "Yes, we can help update, redesign, or maintain your existing website. All you have to do is either given any existing code or the domain access and we’ll take care of the rest."
  },
  {
    question: "What if I encounter an issue with my website?",
    answer: "Our support team is available to assist you with any issues. You can contact us via email or phone, and we will respond promptly."
  },
  {
    question: "Can you help with digital marketing?",
    answer: "Absolutely! We provide a range of digital marketing services, including social media management, content marketing, and PPC advertising."
  },
  {
    question: "What payment gateways do you support?",
    answer: "We support various payment gateways, including PayPal, Stripe, Square, and more. Any other forms will have to be discussed."
  },
  {
    question: "Can you integrate third-party services or APIs?",
    answer: "Yes, we can integrate a wide range of third-party services and APIs to enhance the functionality of your website."
  },
];

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <body>
        <div className="faq-container">
          <Link to="/" className="home-link">Home</Link>
          <h1 className="faq-title">F A Q</h1>
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
              onClick={() => toggleExpand(index)}
            >
              <div className="faq-question">
                <h2>{faq.question}</h2>
                <span className={`arrow ${expandedIndex === index ? 'up' : 'down'}`}></span>
              </div>
              <div className={`faq-answer ${expandedIndex === index ? 'expanded' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>


      <footer className="aeternum-footer">
          <div className="footer-content">
            <h2 className="aeternum-text">Aeternum</h2>
            <Link to="/FAQ" className="faq-link">
              <p className="faq-text">FAQ</p>
            </Link>
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
};

export default Faq;
