"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./components/Input";
import "./style.css";

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0)
  return <div> hello and welcome to Olalekan Abdulfatah Portfolio

<div>
        <motion.div
          className="box"
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
          initial={{
            x:x+100, y:y+200, rotate:rotate+100 
          }}
        />
      </div>
      <div className="inputs">
        <Input value={x} set={setX}>
          x
        </Input>
        <Input value={y} set={setY}>
          yfdf
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Input>
      </div>
  </div>
}
