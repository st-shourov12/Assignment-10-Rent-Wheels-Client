import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/RpFPV7mk/car1.jpg",
      text: "Premium Car Rentals",
      subtext:'Drive the finest luxury vehicles at unbeatable prices'
    },
    {
      image: "https://i.ibb.co.com/Vc78cTnk/car2.jpg",
      text: "Luxury Fleet",
      subtext:'Choose from our extensive collection of premium vehicles'
    },
    {
      image: "https://i.ibb.co.com/4n3PXcst/car3.jpg",
      text: "Rent With Confidence",
      subtext: 'Affordable rates with no hidden fees, book your ride today'
    },
  ];

  return (
    <div className="w-full h-[60vh] mx-auto ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                <h2 className="text-[#DC2626] sm:text-4xl text-2xl font-bold text-center drop-shadow-lg">
                  {slide.text}
                </h2>
                <h2 className="text-[white] sm:text-2xl font-medium text-center drop-shadow-lg">
                  {slide.subtext}
                </h2>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


export default HeroSection;