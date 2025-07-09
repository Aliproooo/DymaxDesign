import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const CurtainImage = ({ Img, height }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    threshold: 0.1,
    margin: "0px 0px -10% 0px",
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("open");
    } else {
      controls.start("initial"); // Reset animation when out of view
    }
  }, [isInView, controls]);

  const curtainVariant = {
    initial: { width: "50%" },
    open: {
      width: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      style={{ height }}
      className="relative inline-block align-middle overflow-hidden"
    >
      <img
        src={Img}
        alt="image"
        style={{ height }}
        className="w-auto object-contain block"
      />

      {/* Curtain Left */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-white z-10"
        initial="initial"
        animate={controls}
        variants={curtainVariant}
      />

      {/* Curtain Right */}
      <motion.div
        className="absolute top-0 right-0 h-full bg-white z-10"
        initial="initial"
        animate={controls}
        variants={curtainVariant}
      />
    </div>
  );
};

export default CurtainImage;