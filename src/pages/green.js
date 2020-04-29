import React from "react"
import { motion } from "framer-motion"

export default () => (
  <div>
    <motion.div
      layoutId="green"
      style={{ backgroundColor: "green", width: "200px", height: "200px" }}
    />
  </div>
)
