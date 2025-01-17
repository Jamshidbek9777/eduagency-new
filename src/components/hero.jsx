import Wrapper from "../layout/wrapper.jsx";
import {getText} from "../languages/index.js";
import {useContext} from "react";
import {LanguageContext} from "../context/language.jsx";

const HeroSection = () => {
    const { selectedLanguage } = useContext(LanguageContext);
    return (
      <Wrapper>
        <div className="h-screen pt-48 flex flex-wrap items-center justify-center lg:justify-between      py-12 relative">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#EBAD26] leading-tight">
              {getText("hero1")}
            </h1>
            <p className="mt-4 text-gray-600">{getText("hero2")}</p>
            <button className="mt-6 px-6 py-3 bg-[#2664eb] text-white rounded-lg shadow-lg  transition">
              {getText("hero3")}
            </button>
          </div>

          <div className="relative lg:w-1/2 flex justify-center items-center">
            <div className="w-72 h-72 lg:w-[450px] lg:h-[570px]  overflow-hidden">
              <img
                src="/img/student1.png"
                alt="Student"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute top-[-30px] right-[-1px] rotate-[25deg]">
              <img
                src="/img/chart.png"
                alt="3D Icon 1"
                className="w-12 h-12 lg:w-16 lg:h-16"
              />
            </div>
            <div className="absolute bottom-[350px] left-[8px] rotate-[-15deg]">
              <img
                src="/img/book.png"
                alt="3D Icon 2"
                className="w-16 h-16 lg:w-20 lg:h-20"
              />
            </div>
            <div className="absolute top-[50%] right-[50px] rotate-[45deg]">
              <img
                src="/img/pen.png"
                alt="3D Icon 3"
                className="w-10 h-10 lg:w-14 lg:h-14"
              />
            </div>
          </div>

          {/*/!* Stats Section *!/*/}
          {/*<div className="w-full  bg-gray-100 py-10 rounded-xl">*/}
          {/*    <div*/}
          {/*        className="max-w-7xl mx-auto px-6 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">*/}
          {/*        /!* Service Stats *!/*/}
          {/*        <div className="flex flex-col items-center">*/}
          {/*            <span className="text-4xl font-bold text-green-600">20+</span>*/}
          {/*            <p className="mt-2 text-gray-700">{getText('hero5')}</p>*/}
          {/*        </div>*/}
          {/*        /!* Students Stats *!/*/}
          {/*        <div className="flex flex-col items-center">*/}
          {/*            <span className="text-4xl font-bold text-blue-600">1000+</span>*/}
          {/*            <p className="mt-2 text-gray-700">{getText('hero6')}</p>*/}
          {/*        </div>*/}
          {/*        /!* Partner Institutions *!/*/}
          {/*        <div className="flex flex-col items-center">*/}
          {/*            <span className="text-4xl font-bold text-red-600">50+</span>*/}
          {/*            <p className="mt-2 text-gray-700">{getText('hero7')}</p>*/}
          {/*        </div>*/}
          {/*        /!* Support Team *!/*/}
          {/*        <div className="flex flex-col items-center">*/}
          {/*            <span className="text-4xl font-bold text-yellow-600">24/7</span>*/}
          {/*            <p className="mt-2 text-gray-700">{getText('hero8')}</p>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
      </Wrapper>
    );
};

export default HeroSection;
