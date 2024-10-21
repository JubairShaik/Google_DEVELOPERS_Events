"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegSquare } from "react-icons/fa6";

const Hero = () => {
  const [boldLetters, setBoldLetters] = useState(Array(15).fill(true));
  const [direction, setDirection] = useState(true);
  const [vibrate, setVibrate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoldLetters((prev) => {
        const nextBoldLetters = [...prev];
        if (direction) {
          const lastTrueIndex = nextBoldLetters.lastIndexOf(true);
          if (lastTrueIndex !== -1) {
            nextBoldLetters[lastTrueIndex] = false;
            if (lastTrueIndex === 0) {
              setDirection(false);
              setVibrate(true);
            }
          }
        } else {
          const firstFalseIndex = nextBoldLetters.indexOf(false);
          if (firstFalseIndex !== -1) {
            for (let i = 0; i <= firstFalseIndex; i++) {
              nextBoldLetters[i] = true;
            }
            if (nextBoldLetters.every((isBold) => isBold)) {
              setDirection(true);
              setVibrate(true);
            }
          }
        }
        return nextBoldLetters;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    if (vibrate) {
      const timeout = setTimeout(() => {
        setVibrate(false);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [vibrate]);

  const titleLetters = [
    { letter: '"', color: "text-red-500" },  // Double quote
    { letter: "G", color: "text-green-600" },
    { letter: "D", color: "text-green-600" },
    { letter: "G", color: "text-green-600" },
    { letter: "\u00A0", color: "text-black" },
    { letter: "O", color: "text-yellow-500" },
    { letter: "N", color: "text-yellow-500" },
    { letter: "\u00A0", color: "text-black" },
    { letter: "C", color: "text-blue-500" },
    { letter: "A", color: "text-blue-500" },
    { letter: "M", color: "text-blue-500" },
    { letter: "P", color: "text-blue-500" },
    { letter: "U", color: "text-blue-500" },
    { letter: "S", color: "text-blue-500" },
    { letter: '"', color: "text-red-600" },  // Double quote
  ];

  
  
  return (
    <div className="w-full min-h-screen">
      <div className="relative w-full min-h-screen font-GSD_Regular flex items-center justify-center flex-col">
        <Image
          src="/images/left_kite.svg"
          alt="left_kite"
          width={40}
          height={90}
          className="absolute top-[33%] left-[0%] w-[10vw]"
        />
        <Image
          src="/images/right_kite.svg"
          alt="right_kite"
          width={40}
          height={90}
          className="absolute top-[44%] right-[0%] w-[10vw]"
        />
        <Image
          src="/images/planets.svg"
          alt="planets"
          width={40}
          height={90}
          className="absolute top-[12%] right-[10%] w-[8vw]"
        />
        <Image
          src="/images/boysitting.svg"
          alt="boy_sitting"
          width={40}
          height={90}
          className="absolute bottom-[0%] left-[0%] w-[18vw]"
        />
        <Image
          src="/images/cloud_1.svg"
          alt="Cloud_1"
          width={40}
          height={90}
          className="absolute top-[8%] left-[40%] w-[22vw]"
        />
        <Image
          src="/images/cloud_2.svg"
          alt="Cloud_2"
          width={40}
          height={90}
          className="absolute top-[3%] right-[25%] w-[3vw]"
        />
        <Image
          src="/images/cloud_3.svg"
          alt="Cloud_3"
          width={40}
          height={90}
          className="absolute top-[6%] left-[10%] w-[9vw]"
        />
        <Image
          src="/images/react_icon.svg"
          alt="react_icon"
          width={40}
          height={90}
          className="absolute top-[20%] right-[3%] w-[2vw]"
        />
        <Image
          src="/images/react_icon.svg"
          alt="react_icon"
          width={40}
          height={90}
          className="absolute top-[12%] left-[3%] w-[2vw]"
        />
        <Image
          src="/images/react_icon.svg"
          alt="react_icon"
          width={40}
          height={90}
          className="absolute top-[15%] left-[27%] w-[2vw]"
        />
        <Image
          src="/images/programming.svg"
          alt="programming"
          width={40}
          height={90}
          className="absolute   bottom-[0%] right-[0%] w-[22vw]"
        />

        {/* Title Section with Centered Text */}
        <div className="text-[7vw] flex justify-center items-center leading-none mb-0 text-center mt-20 w-[69%] mx-auto">
          {titleLetters.map((item, index) => (
            <span
              key={index}
              className={`${item.color} ${
                boldLetters[index] ? "font-bold" : ""
              }`}
              style={{ letterSpacing: "0.05em" }}
            >
              {item.letter}
            </span>
          ))}
        </div>

        <div className="uppercase text-[4vw] font-GSD_Regular leading-none mb-10 text-center">
          Vishnu Institute of Technology
        </div>

        <div className="font-GSD-Regular text-[22px] w-[50vw] leading-none mb-10 text-center text-grey-700">
          By offering seminars, mentorship initiatives, and forums for
          exchanging insights, we strive to foster a community that embraces
          lifelong learning and the sharing of knowledge.
        </div>

        <div className="font-GSD-Regular text-[1vw] w-[85%] flex items-center justify-center mb-8 text-grey-700">
          <span className="px-4 text-grey-700">LEARN</span>
          <FaRegSquare />
          <span className="px-4 text-grey-700">GROW</span>
          <FaRegSquare />
          <span className="px-4 text-grey-700">BUILD</span>
        </div>

        <button className="h-[8vh] w-[10vw] bg-blue-500 text-white rounded-lg text-[2vw] transition-transform duration-300 ease-in-out hover:bg-blue-700 hover:scale-105">
          Join us
        </button>
      </div>
    </div>
  );
};

export default Hero;
