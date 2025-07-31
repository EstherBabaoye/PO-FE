import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedTitle() {
  const ref = useRef(null);
  const controls = useAnimationControls();
  const glowControls = useAnimationControls();
  const inView = useInView(ref, { threshold: 0.6 });

  useEffect(() => {
    if (inView) {
      // Reset both animations
      controls.set("hidden");
      glowControls.set({ scale: 1, textShadow: "0px 0px 0px rgba(0,0,0,0)" });

      // Start typing animation
      controls.start("visible");

      // Trigger glow after typing completes
      const glowDelay = 950;
      const timeout = setTimeout(() => {
        glowControls.start({
          scale: [1, 1.15, 1],
          textShadow: [
            "0px 0px 0px rgba(0,0,0,0)",
            "0px 0px 12px rgba(88, 64, 186, 0.7)",
            "0px 0px 0px rgba(0,0,0,0)",
          ],
          transition: { duration: 0.6, ease: "easeInOut" },
        });
      }, glowDelay);

      return () => clearTimeout(timeout);
    }
  }, [inView, controls, glowControls]);

  return (
    <motion.div
      ref={ref}
      className="inline-block text-black font-semibold"
      animate={glowControls}
    >
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.4,
            },
          },
        }}
      >
        {"Creative Writer".split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
}
