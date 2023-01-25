import LandingScreen from './media/LandingScreenImg.png';
import MarvelLogo from './media/Marvel_Studios_2016_Transparent_Logo.webp';

const LandingScreenSection = () => {
  return (
    <>
      <img
        src={LandingScreen}
        alt="Landing Screen"
        className="brightness-50 object-cover h-screen w-screen"
      />
      <img
        src={MarvelLogo}
        alt="Marvel Studios' Logo"
        className="absolute top-10 inset-x-0 mx-auto h-16 w-64 object-contain"
      />
      <div className="absolute text-white inset-0 flex items-center justify-center">
        <div className="trailers-text uppercase font-serif text-3xl duration-[.8s]">
          MCU Trailers
        </div>
      </div>
      <svg className="arrows">
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </>
  );
};

export default LandingScreenSection;
