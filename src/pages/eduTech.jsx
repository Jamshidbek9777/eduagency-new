import React, { useContext } from "react";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";

const EgitimTech = () => {
  const services = [
    {
      title: getText("eduTech4"),
      description: getText("eduTech5"),
      images: ["/img/k12net.png"],
      icon: "🏫",
    },
    {
      title: getText("eduTech6"),
      description: getText("eduTech7"),
      images: ["/img/okulaile.png"],
      icon: "📚",
    },
    {
      title: getText("eduTech8"),
      description: getText("eduTech9"),
      images: ["/img/mentalup.webp", "/img/0.jpg"],
      icon: "🎮",
    },
    {
      title: getText("eduTech10"),
      description: getText("eduTech11"),
      images: ["/img/vedubox_logo.svg"],
      icon: "💻",
    },
  ];

  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div
      className="max-w-[1720px] mx-auto px-6 py-12 font-sans pt-48 space-y-16"
      style={{ border: "1px solid red" }}
    >
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[500px] rounded-3xl shadow-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent flex flex-col justify-center items-center"
          style={{ backgroundImage: 'url("/img/edutechbg.jpg")' }}
        >
          <h1 className="text-6xl font-extrabold text-white text-center drop-shadow-md">
            {getText("eduTech1")}
          </h1>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-lg">
            {getText("ctaButton")} {/* Add call-to-action */}
          </button>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">
          {getText("eduTech2")}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {getText("eduTech3")}
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden flex flex-col"
          >
            {/* Icon and Title */}
            <div className="p-6 flex items-center space-x-4">
              <span className="text-5xl text-blue-500">{service.icon}</span>
              <h3 className="text-xl font-bold text-gray-800">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <p className="px-6 text-gray-600 flex-grow">
              {service.description}
            </p>

            {/* Images */}
            <div className="grid grid-cols-2 gap-2 mt-4 px-6 pb-6">
              {service.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Service ${index + 1} Image ${imgIndex + 1}`}
                  className="w-full h-32 object-cover rounded-xl shadow-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EgitimTech;
