import React, { useContext, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";
import Helmet from "../components/helmet.jsx";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { MdDevices, MdHealthAndSafety } from "react-icons/md";
import { CgTrack } from "react-icons/cg";

const MentaulUp = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet
        title={getText("AboutPageTitle") || "Teching Technologies"}
        description={
          getText("AboutPageDesc") || "Learn more about our services."
        }
        link="/teachingTech"
        keywords="about, EduAgency, Uzbekistan, education"
      />
      <div
        style={{
          background:
            "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
        }}
        className="min-h-screen"
      >
        <Wrapper>
          <div data-aos="fade-up" className="pt-40 flex flex-col items-center">
            <div className="bg-white px-8 py-16 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                  Mental Up
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {getText("mentalUpDesc")}
                </p>
              </div>
              <div className="">
                <img
                  src="/img/mentalup.webp"
                  alt="About Us"
                  className="rounded-xl w-[450px]"
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
            >
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <IoExtensionPuzzleOutline
                  className="w-12 h-12 mb-4"
                  color="red"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {getText("mentalUpCard1Header")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getText("mentalUpCard1Text")}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <FaRegCalendarAlt className="w-12 h-12 mb-4" color="#5c97f7" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {getText("mentalUpCard2Header")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getText("mentalUpCard2Text")}
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <FaChildren className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {getText("mentalUpCard3Header")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getText("mentalUpCard3Text")}
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <MdHealthAndSafety className="w-12 h-12 mb-4" color="green" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {getText("mentalUpCard4Header")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getText("mentalUpCard4Text")}
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <CgTrack className="w-12 h-12 mb-4" color="blue" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {getText("mentalUpCard5Header")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getText("mentalUpCard5Text")}
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <MdDevices className="w-12 h-12 mb-4" color="#e25cf7" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {getText("mentalUpCard6Header")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getText("mentalUpCard6Text")}
                </p>
              </div>
            </div>
          </div>
          <ContactUs />
        </Wrapper>
      </div>
    </>
  );
};

export default MentaulUp;
