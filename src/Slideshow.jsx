import privacy from './Images/icon-3.png'
import security from './Images/icon-4.png'
import support from './Images/icon1.png'
import swap from './Images/icon2.png'
import card from './Images/icon5.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
// import required modules
import { Autoplay,EffectFlip, Pagination, Navigation } from "swiper";

export default function SlideShow() {
  return (
    <>
      <Swiper
        effect={"flip"}
        rewind={true}
        grabCursor={true}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={card} alt="card" className="card-icon" />
          <br />
          <p className="reason">
            Flexible transactions
          </p>
          <br />
          <p className="why">
            Get paid by Carp Exchange in any currency, or combination of currencies you want and buy in any currency or combinations of currencies you want.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={privacy} alt="privacy" className="card-icon" />
          <p className="reason">
            Privacy
          </p><br />
          <p className="why">
            Your accounts privacy and secuirity is our utmost priority so your personal details will only be shared with your permission.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={security} alt="security" className="card-icon" />
          <p className="reason">
            Secure Transaction
          </p><br />
          <p className="why">
            Carp Exchange is a secure and reliablle platform that ensure safe transactions for users.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swap} alt="deposit" className="card-icon" />
          <p className="reason">
           Fiat Deposit
          </p><br />
          <p className="why">
            We accept deposits of major fiat currencies including USD, JPY, EUR, SGD, HKD, and AUD
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={support} alt="support" className="card-icon" />
          <p className="reason">
            24/7 Support
          </p><br />
          <p className="why">
           Having an issue with trading.
            Our support team is readily at your service.
            <a href='https://wa.link/07fs30'>
            Connect with us here
            </a>
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
