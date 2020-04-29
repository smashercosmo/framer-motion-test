import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

export default () => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link to="/red">
        <motion.div
          layoutId="red"
          variants={thumbnailVariants}
          style={{ backgroundColor: "red", width: "100px", height: "100px" }}
        />
      </Link>
      <Link to="/blue">
        <motion.div
          layoutId="blue"
          variants={thumbnailVariants}
          style={{ backgroundColor: "blue", width: "100px", height: "100px" }}
        />
      </Link>
      <Link to="/pink">
        <motion.div
          layoutId="pink"
          variants={thumbnailVariants}
          style={{ backgroundColor: "pink", width: "100px", height: "100px" }}
        />
      </Link>
      <Link to="/green">
        <motion.div
          layoutId="green"
          variants={thumbnailVariants}
          style={{ backgroundColor: "green", width: "100px", height: "100px" }}
        />
      </Link>
    </motion.div>
  )
}
