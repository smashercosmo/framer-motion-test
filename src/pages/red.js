import React from "react"
import { motion } from "framer-motion"

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
}

export default () => (
  <div>
    <motion.div
      layoutId="red"
      style={{ backgroundColor: "red", width: "200px", height: "200px" }}
    />
  </div>
)
