import logo from './Images/CEX.jpg';
import flag from './Images/nigeria.png';
import box from './Images/New.png';
import iphone from './Images/Pink-Iphone.png'
import icon from './Images/icon-step-1.png'
import './App.css'
import SlideShow from './Slideshow';


function App() {



  return (
    <>
      <div>
        <nav className='navigation'>
          <img src={logo} className="logo" alt="React logo" />

          <div className='nav-links'>
            <img src={flag} className='flag' alt='flag' />
            <p>Market</p>
            <p><a href='https://wa.link/07fs30'>
            Trade
            </a></p>
            <p>Blog</p>
            <p>About Us</p>
            
          </div>
        </nav>
      </div>
      <div className='section'>
        <div>
          <p className='bold-buy'>
            Sell and Buy <br />
            Crypto with ease.
          </p>
          <p className='regular-buy'>
            Buy and sell Bitcoin, Ethereum, XRP and many other cryptocurrencies with fiat , cryptocurrencies or your national currency 
          </p>
          <div className='input-field'>
            <input type="email" name="email" id="email" placeholder='Enter e-mail address here.' />
            <button type="submit">
              <a href="https://wa.link/07fs30">
                Get Started
                </a>
            </button>
          </div>
        </div>
        <img
          src={box}
          alt='box'
          className='box'
        />
      </div>
      <div className='blue-box'>
        <p className='yellow'>SECURELY BUY, SELL and TRACK</p>
        <p className='p-trade'>Trade any cryptocurrency of your choice with fiat currency using bank transfer.</p>
        <table className='table-div'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Change($)</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
      <div className="trusted-div">
        <div className='trusted-plat'>
          <p className='a-trusted'>
            A trusted Cryptocurrency <br /> trading Platform
          </p>
          <p className="small-cap">
            Why Carp Exchange?
          </p>
        </div>
        <div className="lines">
          <SlideShow/>
        </div>
      </div>
      <div className="how-to">
        <p className="how-to-p">
          How to trade with confidence
        </p>
        <p className="begin">
          Begin your trading journey with these easy steps
        </p>
      </div>
      <div className="steps">
        <div className="items-step">
          <div className="first-item">
            <img src={icon} alt="icon" className="icon" />
            <div className="icon-content">
              <p className="bold-icon-content">
                Create your account
              </p>
              <p className="small-icon-content">
                Enter your e-mail adress and other sign up details to  create your account successfully.
              </p>
            </div>
          </div>
          <div className="first-item">
            <img src={icon} alt="icon" className="icon" />
            <div className="icon-content">
              <p className="bold-icon-content">
                Create your account
              </p>
              <p className="small-icon-content">
                Enter your e-mail adress and other sign up details to  create your account successfully.
              </p>
            </div>
          </div>
          <div className="first-item">
            <img src={icon} alt="icon" className="icon" />
            <div className="icon-content">
              <p className="bold-icon-content">
                Create your account
              </p>
              <p className="small-icon-content">
                Enter your e-mail adress and other sign up details to  create your account successfully.
              </p>
            </div>
          </div>
          <div className="first-item">
            <img src={icon} alt="icon" className="icon" />
            <div className="icon-content">
              <p className="bold-icon-content">
                Create your account
              </p>
              <p className="small-icon-content">
                Enter your e-mail adress and other sign up details to  create your account successfully.
              </p>
            </div>
          </div>
          <button className='whatsapp'>
            <a href='https://wa.link/07fs30'>
            Get Started
            </a>
          </button>
        </div>
        <img
          src={iphone}
          alt='phone'
          className='phone'
        />
      </div>
      <footer className='footer-item'>
        Carp Exchange 2023. ALL RIGHTS RESERVED
      </footer>
    </>
  )
}

export default App
