import logo from './Images/CEX.jpg';
import flag from './Images/nigeria.png';
import box from './Images/New.png';
import icon from './Images/icon-step-1.png'
import mobile from './Images/Pink-Iphone.png'
import './App.css'
import SlideShow from './Slideshow';
import FetchCoin from './FetchCoin'
import { BrowserRouter } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import Headroom from 'react-headroom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FetchNews from './FetchNews';


function App() {

const notify = () => toast("Thank you for joining our waitlist!");

  return (
    <>
    <BrowserRouter>
        <div id='navb'>
          <Headroom>
            <nav className='navigation' >
              <Link to='#navb'>
              <img src={logo} className="logo" alt="React logo" />
              </Link>
          

          <div className='nav-links'>
            <img src={flag} className='flag' alt='flag' />
            <p><Link to='#fetchcoin' smooth>Market</Link></p>
            <p><Link to='#trade' smooth>
            Trade
            </Link></p>
            <p>About Us</p>
            
          </div>
            </nav>
            </Headroom>
      </div>
      <div className='section'>
        <div className='right-section'>
          <p className='bold-buy'>
            Sell and Buy <br />
            Crypto with ease.
          </p>
          <p className='regular-buy'>
             Join our waitlist to stay informed when we launch our new product and services. 🤩
          </p>
          <div className='input-field'>
            <input type="email" name="email" id="email" placeholder='Enter e-mail address here.' />
            <button onClick={notify} className='input-field-button' type="submit">
                Join Waitlist
              </button>
            <ToastContainer />
          </div>
        </div>
        <img
          src={box}
          alt='box'
          className='box'
        />
      </div>
      
      <div className='blue-box' id="fetchcoin">
        <p className='yellow'>SECURELY BUY, SELL and TRACK</p>
        <p className='p-trade'>Trade any cryptocurrency of your choice with fiat currency using bank transfer.</p>
        <br />
        <FetchCoin/>
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
        <br /><br />
      <div className="how-to" id='trade'>
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
               Verify your account
              </p>
              <p className="small-icon-content">
                After creating your account take the identity verification and authentication questions for secure account and safe transactions.
              </p>
            </div>
          </div>
          <div className="first-item">
            <img src={icon} alt="icon" className="icon" />
            <div className="icon-content">
              <p className="bold-icon-content">
                Fuel your account
              </p>
              <p className="small-icon-content">
              Add funds to your crypto account through bank transfer  and start trading crypto whenever you choose to.
              </p>
            </div>
          </div>
          <div className="first-item">
            <img src={icon} alt="icon" className="icon" />
            <div className="icon-content">
              <p className="bold-icon-content">
               Start Trading
              </p>
              <p className="small-icon-content">
               You heard right! You have the free pass to buy and sell crypto curriences of your choice from the top rated to other varities.
              </p>
            </div>
          </div>
          <button className='whatsapp'>
            <a href='https://wa.link/07fs30'>
            Get Started
            </a>
          </button>
        </div>
          <div className="phone-div">
        <img
          src={mobile}
          alt='phone'
          className='phone'
            />
           
          </div>
        </div>
        <FetchNews/>
      <footer className='footer-item'>
        Carp Exchange 2023. ALL RIGHTS RESERVED
        </footer>
        </BrowserRouter>
    </>
  )
}

export default App
