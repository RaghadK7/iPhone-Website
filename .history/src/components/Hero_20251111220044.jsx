import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState, useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5, duration: 1 });
  }, []);

  // تحديث الفيديو عند تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full nav-height bg-black relative overflow-hidden">
      <div className="h-full w-full flex-center flex-col relative z-10">
        <p id="hero" className="hero-title text-white text-5xl font-semibold opacity-0">
          iPhone 15 Pro
        </p>
      </div>

      {/* الفيديو بالخلف */}
      <video
        autoPlay
        muted
        playsInline
        key={videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
