import './App.css';
import bag from './navIcons/bag.png';
import down from './navIcons/down.png';
import up from './navIcons/up.png';
import info from './navIcons/info.png';
import hourglass from './navIcons/hourglass.png'
import brush from './navIcons/brush.png';

function App() {
  return (
    <body>
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
            <img src={info} alt="description" />
            <img src={brush} alt="brush" />
            <img src={bag} alt="description" />          
            <img src={down} alt="description" />
          </div>
         </div>
      <section className="about">
        <div className="content">
          <h1>We Are</h1>
          <a id="gradient">Aeternum</a>
          <h2>Develop and Launch your company's <br />website with us.</h2>
        </div>
      </section>
      </body>
  );
}

export default App;
