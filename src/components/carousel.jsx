import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Wrapper from "../layout/wrapper.jsx";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

export const Carousel = () => {
  return (
    <div className="pt-52 w-full">
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <Wrapper>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-10">
              {/* Text Section */}
              <div className="text-center md:text-left max-w-lg">
                <h1 className="text-3xl md:text-5xl font-bold text-[#1966a2]">
                  Egitim Platforma
                </h1>
                <p className="text-2xl font-bold mt-4 text-[#e63f38]">
                  You can get knowledge from a wide range of resources to
                  improve your skills.
                </p>
                <Button
                  color="primary"
                  className="mt-10"
                  startContent={<ArrowRight />}
                >
                  Learn more
                </Button>
              </div>
              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src="/img/slider1.png"
                  alt="Slider 1"
                  className="w-full max-w-sm md:max-w-lg"
                />
              </div>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-10">
              {/* Text Section */}
              <div className="text-center md:text-left max-w-lg">
                <h1 className="text-2xl md:text-4xl font-bold text-[#1966a2]">
                  Egitim Platforma
                </h1>
                <p className="text-2xl font-bold mt-4 text-[#e63f38]">
                  You can get knowledge from a wide range of resources to
                  improve your skills.
                </p>
                <Button
                  color="primary"
                  className="mt-10"
                  startContent={<ArrowRight />}
                >
                  Learn more
                </Button>
              </div>
              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src="/img/slider1.png"
                  alt="Slider 1"
                  className="w-full max-w-sm md:max-w-lg"
                />
              </div>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-10">
              {/* Text Section */}
              <div className="text-center md:text-left max-w-lg">
                <h1 className="text-2xl md:text-4xl font-bold text-[#1966a2]">
                  Egitim Platforma
                </h1>
                <p className="text-2xl font-bold mt-4 text-[#e63f38]">
                  You can get knowledge from a wide range of resources to
                  improve your skills.
                </p>
                <Button
                  color="primary"
                  className="mt-10"
                  startContent={<ArrowRight />}
                >
                  Learn more
                </Button>
              </div>
              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src="/img/slider1.png"
                  alt="Slider 1"
                  className="w-full max-w-sm md:max-w-lg"
                />
              </div>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-10">
              {/* Text Section */}
              <div className="text-center md:text-left max-w-lg">
                <h1 className="text-2xl md:text-4xl font-bold text-[#1966a2]">
                  Egitim Platforma
                </h1>
                <p className="text-2xl font-bold mt-4 text-[#e63f38]">
                  You can get knowledge from a wide range of resources to
                  improve your skills.
                </p>
                <Button
                  color="primary"
                  className="mt-10"
                  startContent={<ArrowRight />}
                >
                  Learn more
                </Button>
              </div>
              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src="/img/slider1.png"
                  alt="Slider 1"
                  className="w-full max-w-sm md:max-w-lg"
                />
              </div>
            </div>
          </Wrapper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
