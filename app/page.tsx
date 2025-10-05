"use client";
import { motion } from "motion/react";
import { memo } from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white gap-14">
      <div className="flex flex-col items-center justify-center gap-3.5">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-black font-wenkai text-3xl sm:text-5xl font-medium">
            Always think like a doer.
          </h1>
          <p className="text-black/50 text-[11px] sm:text-[17px] text-center sm:max-w-3xl">
            The web app that helps you live like a monk — quiet the noise,
            defeat procrastination, focus deeply, and discover calm clarity in
            everything you do.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-5">
          <Link
            href={"/"}
            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black text-[11px] sm:text-[17px] text-white hover:opacity-80"
          >
            Coming Soon
          </Link>
          <Link
            href={"/"}
            className="px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-[17px] text-black/50 underline underline-offset-4 hover:text-black/70"
          >
            Early Access
          </Link>
        </div>
      </div>
      <motion.div
        className="flex items-center justify-center sm:w-[900px] sm:h-[500px] px-7 sm:p-0 overflow-hidden"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.3,
          delay: 0.7,
          ease: "easeInOut",
        }}
      >
        <video
          src={"/hero.mp4"}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <p className="text-black/50  text-[10px] sm:text-[15px] text-center sm:max-w-3xl">
        © 2025 Think. All rights reserved.
      </p>
    </div>
  );
}

export default memo(Home);
