import React from "react";
import logo from "../assets/logo-large.png";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-hero-m-height lg:h-hero-l-height">
      <h1>
        <span className="text-3xl md:text-5xl lg:text-9xl font-semibold text-[#028182]">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Integrated", "Research &", "Development", "Initiatives"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
};

export default Hero;
