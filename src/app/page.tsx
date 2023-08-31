"use client"
import { motion } from "framer-motion";


export default function Home() {
  return <div style={{
    backgroundColor:'red'
  }}> hello and welcome to Olalekan Abdulfatah Portfolio

<motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
   <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />

  </div>
}
