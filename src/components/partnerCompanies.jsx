import Partner1 from "/img/partner1.svg";
import Partner2 from "/img/partner2.svg";
import Partner3 from "/img/partner3.png";
import Partner4 from "/img/partner4.svg";
import Partner5 from "/img/partner5.png";
import Partner6 from "/img/partner6.webp";
import Partner7 from "/img/partner7.svg";
import Partner8 from "/img/partner8.png";
import Partner9 from "/img/partner9.png";

export default function LogoCarousel() {
  const logos = [
    { src: Partner1, alt: "" },
    { src: Partner2, alt: "" },
    { src: Partner3, alt: "" },
    { src: Partner4, alt: "" },
    { src: Partner5, alt: "" },
    { src: Partner6, alt: "" },
    { src: Partner7, alt: "" },
    { src: Partner8, alt: "" },
    { src: Partner9, alt: "" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt} className="w-36 p-5" />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt} className="w-36 p-5" />
          </li>
        ))}
      </ul>
    </div>
  );
}
