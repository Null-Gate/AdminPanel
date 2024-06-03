/* eslint-disable @typescript-eslint/no-explicit-any */
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const ChangeBody = () => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const containerRef = useRef<HTMLDivElement | null>();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "1 1"],
  });

  const scaleProgess = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [2, 20, 50, 400, 1500, 7000]
  );

  const translateYProgress = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 1],
    [0, 500, 1000, 1000, -1000]
  );

  return (
    <div>
      <div
        ref={containerRef}
        className="h-[500vh] bg-secondary relative overflow-hidden"
      >
        <motion.h1
          style={{
            scale: scaleProgess,
            translateY: translateYProgress,
          }}
          className="text-primary font-bold absolute cursor-none top-[10%] left-[35%] lg:left-[50%] -translate-x-[50%]"
        >
          HELLO WORLD
        </motion.h1>
      </div>
    </div>
  );
};

export default ChangeBody;
