"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "./components/Input";
import Loader from "./components/Loader";
import { Box, Typography, Grid } from "@mui/material";
import "./style.css";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    return ()=>{
      setLoaded(false);
    }
  }, []);

  return (
    <>
      <Loader loaded={loaded} />
    </>
  );
}
