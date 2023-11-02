"use client";

import Image from "next/image";
import Photo from "./_components/photo";
import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { Button } from "@/components/ui/button";
import { FiMusic, FiPause } from "react-icons/fi";

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const playAudio = () => {
    if (!audio) {
      const newAudio = new Audio("/assets/audio/happy-birthday.mp3");
      newAudio.addEventListener("ended", () => {
        setIsAudioPlaying(false);
      });
      setAudio(newAudio);
    }

    if (audio) {
      if (isAudioPlaying) {
        audio.pause();
      } else {
        audio.currentTime = 0;
        audio.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  return (
    <section className="h-screen w-full mt-4">
      <header className="container my-4 w-full flex flex-col items-center justify-center">
        <ReactConfetti
          className="pointer-events-none z-[10]"
          numberOfPieces={500}
          width={windowSize.width}
          height={windowSize.height}
        />
        <h1 className="text-[4rem] text-white">Happy Birthday</h1>

        <span className="text-white text-[2rem] font-bold mb-2">22</span>

        <Image
          src="/shape1.svg"
          fill
          className="w-screen h-screen absolute -z-50"
          alt="cake"
        />
        <Image src="/cake.svg" width={220} height={220} alt="cake" />
        <span className="text-blackS mt-6 text-5xl">
          Maria Novia Delviyanti
        </span>
      </header>
      <section className="overflow-y-auto bg-white py-2 mt-12">
        <Photo />
      </section>
      <div className="w-full flex items-center justify-center mt-5">
        {isAudioPlaying ? (
          <Button onClick={playAudio} className="w-32">
            <FiPause size={12} />
          </Button>
        ) : (
          <Button onClick={playAudio} className="w-32">
            <FiMusic size={12} />
          </Button>
        )}
      </div>
    </section>
  );
}
