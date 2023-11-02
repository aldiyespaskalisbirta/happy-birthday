"use client";
import Image from "next/image";
import Photo from "./_components/photo";
import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <section className="h-screen w-full mt-4">
      <audio
        src="/assets/audio/happy-birthday.mp3"
        controls={false}
        autoPlay
        loop
      ></audio>
      <header className="container my-4 w-full flex flex-col items-center justify-center">
        <ReactConfetti
          className="pointer-events-none z-[10]"
          numberOfPieces={1000}
          width={windowSize.width}
          height={windowSize.height}
        />
        <h1 className="text-[4rem] text-white">Happy Birthday</h1>
        <span className="text-white text-[2rem] font-bold mb-2">22</span>
        <Image src="/cake.svg" width={220} height={220} alt="cake" />
        <span className="text-white mt-12 text-5xl">
          Maria Novia Delviyanti
        </span>
      </header>
      <section className="overflow-y-auto">
        <Photo />
      </section>
    </section>
  );
}
