import { motion } from "framer-motion";
import { Box, Typography, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function Loader({ loaded }: { loaded: boolean }) {
    const textRef = useRef<HTMLDivElement | null>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {

    if (textRef.current) {
      setTextWidth(textRef.current.offsetLeft);
    }
    console.log(textRef)
  }, [textRef.current]);

  return (
    <>
      <Box sx={{ height: '100vh', overflowX: 'hidden', bgcolor:'red' }}>
        <Grid container alignItems="center" sx={{ height: '100%' }}>

          <Grid item sx={{ height: '100%', textAlign: "right", width: '30%' }} lg={6}>
            <motion.div 
              initial={{ y: "50vh", opacity: 0.7, x: 0 }}
              animate={loaded ? { y: "0vh", opacity: 1, x: "-70%" } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Typography fontSize={50} sx={{
                // writingMode: "vertical-rl",
                textOrientation: "upright",
                // width:"30%"
              }} >
                Olalekan 
              </Typography>
            </motion.div>
          </Grid>

          <Grid item sx={{ height: '100%', width: "30%" }} lg={6}>
            <motion.div 
              initial={{ y: "50vh", opacity: 0.8, x: 0 }}
              animate={loaded ? { y: "0vh", opacity: 1, x:`60%` } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Typography ref={textRef}  fontSize={50}>
                Abdulfatah
              </Typography>
            </motion.div>
          </Grid>

        </Grid>
      </Box>
    </>
  );
}
