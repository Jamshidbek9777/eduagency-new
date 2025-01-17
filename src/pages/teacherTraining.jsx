import React, { useContext } from "react";
import {
  FaBrain,
  FaGlobe,
  FaBullseye,
  FaGamepad,
  FaChalkboardTeacher,
  FaUserCheck,
  FaLaptopCode,
  FaFolder,
  FaBook,
  FaUserTie,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";

const TeacherTrainings = () => {
  const teacherTrainings = [
    {
      title: getText("tTrain3"),
      description: getText("tTrain4"),
      color: "from-blue-500 to-purple-600",
      icon: <FaBrain />,
    },
    {
      title: getText("tTrain7"),
      description: getText("tTrain8"),
      color: "from-yellow-400 to-orange-500",
      icon: <FaBullseye />,
    },
    {
      title: getText("tTrain9"),
      description: getText("tTrain10"),
      color: "from-pink-500 to-red-500",
      icon: <FaGamepad />,
    },
    {
      title: getText("tTrain13"),
      description: getText("tTrain14"),
      color: "from-gray-400 to-gray-600",
      icon: <FaUserCheck />,
    },
    {
      title: getText("tTrain15"),
      description: getText("tTrain16"),
      color: "from-yellow-400 to-orange-500",
      icon: <FaLaptopCode />,
    },
    {
      title: getText("tTrain23"),
      description: getText("tTrain24"),
      color: "from-green-400 to-teal-500",
      icon: <FaUsers />,
    },
    // New cards added below
    {
      title: "İletişim Becerileri Eğitimi",
      description:
        "Etkili iletişim, bir öğretmenin sınıfta meydana getireceği ortamın temel taşlarından biridir. Bu eğitimle:\n" +
        "• Öğretmenlerin öğrenci ve veli iletişim becerilerini geliştirmeyi,\n" +
        "• Çatışma çözme yöntemlerini kazandırmayı,\n" +
        "• Öğrencilerle güçlü bağlar kurarak öğrenme motivasyonunu artırmayı amaçlıyoruz.",
      color: "from-indigo-400 to-blue-500",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Zihin Haritaları Eğitimi",
      description:
        "Modern öğretim yaklaşımlarının vazgeçilmezi olan zihin haritaları, hem öğrencilerin hem de öğretmenlerin bilgiye sistematik ve yaratıcı bir şekilde yaklaşmasını sağlar. Bu eğitimle:\n" +
        "• Zihin haritalarını ders planlamada ve anlatımda kullanma,\n" +
        "• Öğrencilerin bilgileri kalıcı şekilde öğrenmesine yardımcı olacak stratejiler geliştirme,\n" +
        "• Soyut kavramları somut hale getirme tekniklerini öğretiyoruz.",
      color: "from-teal-400 to-green-500",
      icon: <FaFolder />,
    },
    {
      title: "Ölçme ve Değerlendirme Eğitimi",
      description:
        "Eğitimin en kritik unsurlarından biri doğru ölçme ve değerlendirmenin yapılmasıdır. Bu eğitim kapsamında:\n" +
        "• Farklı ölçme ve değerlendirme yöntemlerini öğretmek,\n" +
        "• Alternatif değerlendirme yaklaşımlarını sınıfa entegre etmek,\n" +
        "• Akademik ve duygusal gelişimi takip etme yöntemlerini kazandırmak hedefleniyor.",
      color: "from-red-400 to-pink-500",
      icon: <FaChartLine />,
    },
  ];

  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-48">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-6">
          {getText("tTrain1")}
        </h2>
        <p className="text-gray-600 mb-10">{getText("tTrain2")}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {teacherTrainings.map((training, index) => (
          <div
            key={index}
            className={`cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-t-4 ${training.color}`}
          >
            <div className={"flex items-center space-x-4 mb-4"}>
              <div className="text-3xl text-white bg-gradient-to-r p-3 rounded-lg shadow-md">
                {training.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {training.title}
              </h3>
            </div>

            <p className="text-gray-600 text-sm whitespace-pre-line">
              {training.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherTrainings;
