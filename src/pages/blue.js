import React from "react"
import { motion } from "framer-motion"

export default () => (
  <div>
    <motion.div
      layoutId="blue"
      style={{ backgroundColor: "blue", width: "200px", height: "200px" }}
    />
  </div>
)
