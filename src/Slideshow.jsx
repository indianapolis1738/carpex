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
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="reason">
            Flexible transactions
          </p>
          <br />
          <p className="why">
            Get paid by Carp Exchange in any currency, or combination of currencies you want and buy in any currency or combinations of currencies you want.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="reason">
            Privacy
          </p><br />
          <p className="why">
            Your accounts privacy and secuirity is our utmost priority so your personal details will only be shared with your permission.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="reason">
            Privacy
          </p><br />
          <p className="why">
            Your accounts privacy and secuirity is our utmost priority so your personal details will only be shared with your permission.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="reason">
            Privacy
          </p><br />
          <p className="why">
            Your accounts privacy and secuirity is our utmost priority so your personal details will only be shared with your permission.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="reason">
            Privacy
          </p><br />
          <p className="why">
            Your accounts privacy and secuirity is our utmost priority so your personal details will only be shared with your permission.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
