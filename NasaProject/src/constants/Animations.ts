export const astronomyAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const earthImageryAnimation = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

export const marsRoverAnimation = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
  exit: { opacity: 0, x: 100, transition: { duration: 0.7, ease: "easeIn" } },
};

export const neoAnimation = {
  initial: { opacity: 0, rotate: -10 },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: { ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7, ease: "easeIn" },
  },
};
