import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  // Simulate loading for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="mb-8">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">Technologies</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">Tech Stack</h2>
      </div>
      <div className="tech-icons-wrapper grid grid-cols-2 md:grid-cols-6 gap-x-1 gap-y-6 justify-items-center">
        {isLoading ? (
          // Skeleton loaders
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="w-32 h-32 md:w-36 md:h-36 glass rounded-xl p-3">
              <div className="w-full h-full bg-gray-700 rounded-lg animate-pulse"></div>
            </div>
          ))
        ) : (
          technologies.map((technology) => (
            <div className="w-32 h-32 md:w-36 md:h-36 glass rounded-xl p-3" key={technology.name}>
              <img
                src={technology.icon}
                alt={technology.name}
                className="tech-icon w-full h-full object-contain"
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
