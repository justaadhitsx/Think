"use client";
import { motion } from "motion/react";
import { memo } from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white gap-10 md:gap-14">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3.5">
        <div className="flex flex-col items-center justify-center gap-2 px-4 md:px-0">
          <h1 className="text-black font-wenkai text-3xl sm:text-4xl md:text-5xl font-medium text-center">
            Always think like a doer.
          </h1>
          <p className="text-black/50 text-[11px] sm:text-[15px] md:text-[17px] text-center max-w-sm sm:max-w-2xl md:max-w-3xl">
            The web app that helps you live like a monk — quiet the noise,
            defeat procrastination, focus deeply, and discover calm clarity in
            everything you do.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mt-2">
          <Link
            href={"/"}
            className="px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 bg-black text-[11px] sm:text-[15px] md:text-[17px] text-white hover:opacity-80 transition-opacity"
          >
            Coming Soon
          </Link>
          <Link
            href={"/"}
            className="px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 text-[11px] sm:text-[15px] md:text-[17px] text-black/50 underline underline-offset-4 hover:text-black/70 transition-colors"
          >
            Early Access
          </Link>
        </div>
      </div>

      {/* Video Section */}
      <motion.div
        className="flex items-center justify-center w-full sm:w-[700px] md:w-[900px] sm:h-[400px] md:h-[500px] px-5 sm:px-7 md:p-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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

      {/* Footer */}
      <p className="text-black/50 text-[10px] sm:text-[13px] md:text-[15px] text-center max-w-xs sm:max-w-2xl md:max-w-3xl px-4">
        © 2025 Think. All rights reserved.
      </p>
    </div>
  );
}

export default memo(Home);
