"use client";

import { useConfettiStore } from "@/hooks/use-confetti-store";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

function HappyBirthday() {
  const confetti = useConfettiStore();

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

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
        confetti.onOpen();
        audio.currentTime = 0;
        audio.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };
  return (
    <section className="flex flex-col items-center justify-center">
      <header className="mt-2 flex flex-col items-center justify-center">
        <h1 className="text-white text-center text-[5rem] drop-shadow-xl">
          Happy Birthday
        </h1>
        <div
          onClick={() => playAudio()}
          className="w-full flex flex-col items-center justify-center"
        >
          <Image
            src="/shape2.svg"
            fill
            className={cn(
              "w-screen h-screen absolute top-0 bottom-0 -z-50",
              isAudioPlaying && "animate-spin-slow"
            )}
            alt="shape"
          />
          <div className="relative">
            <div className={cn("candle absolute left-3 -top-3")}>
              <div className="flame animate-candle"></div>
              <div className="wick"></div>
            </div>
            <div
              className={cn(
                "candle hidden absolute right-3 -top-3",
                isAudioPlaying && "inline-block"
              )}
            >
              <div className="flame animate-candle"></div>
              <div className="wick"></div>
            </div>
            <p className="text-pink-400 font-bold w-full text-center text-[5rem] drop-shadow-xl">
              22
            </p>
          </div>
          <Image src="/cake.svg" width={220} height={220} alt="cake" />
        </div>
      </header>
      <p className="w-full text-center text-[3rem] mt-20 text-white drop-shadow-xl">
        Maria Novia Delviyanti
      </p>
    </section>
  );
}

export default HappyBirthday;
