import React from "react"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"

import styles from "./Layout.module.css"

export function Layout(props) {
  const { children } = props
  return (
    <div className={styles.root}>
      <AnimateSharedLayout>
        <AnimatePresence initial={false}>{children}</AnimatePresence>
      </AnimateSharedLayout>
    </div>
  )
}
