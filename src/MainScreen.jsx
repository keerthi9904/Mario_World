import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const MainScreen = () => {
  
  function handleClick() {
    console.log("Image Clicked!");
  }

  // Function to create staggered left-to-right effect
  const fadeInLeftToRight = (delay) => ({
    initial: { opacity: 0, x: -50 },  // Start slightly to the left
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: delay } }
  });

  return (
    <div className="w-screen bg-bluebg h-screen flex flex-col items-center justify-center text-white overflow-scroll relative pt-180">
      {/* Mario Image */}
      <img src="/main.png" alt="Mario" className="relative w-244" {...fadeInLeftToRight(0)} />

      <motion.img src="/hot_titles.png" alt="Hot Titles" className="relative bottom-151 left-34.5 w-22 hover:scale-125" {...fadeInLeftToRight(0.2)} onClick={handleClick} />

      <motion.img src="/newsletter.png" alt="Newsletter" className="relative bottom-35 right-20 w-70 hover:scale-125" {...fadeInLeftToRight(0.4)} />

      <motion.img src="/mario_history.png" alt="Mario History" className="relative bottom-177.5 left-56 w-25 hover:scale-125" {...fadeInLeftToRight(0.6)} />

      <motion.img src="/downloads.png" alt="Downloads" className="relative bottom-180.5 left-72 w-15 hover:scale-125" {...fadeInLeftToRight(0.8)} />

      <motion.img src="/forums.png" alt="Forums" className="relative bottom-181 left-77 w-8 hover:scale-125" {...fadeInLeftToRight(1)} />

      <motion.img src="/current_titles.png" alt="Current Titles" className="relative bottom-125 z-1 left-65 w-50 hover:scale-125" {...fadeInLeftToRight(1.2)} />

      <img src="/bluepatch.png" alt="Patch" className="relative bottom-140 left-95 w-50 hover:scale-125" {...fadeInLeftToRight(1.4)} />

      <motion.img src="/gamecube.gif" alt="GameCube" className="relative bottom-110 right-200 z-1 w-50" {...fadeInLeftToRight(1.6)} />

      <motion.img src="/ds.gif" alt="Nintendo DS" className="relative bottom-125 z-1 right-145 w-50" {...fadeInLeftToRight(1.8)} />

      <motion.img src="/advance.gif" alt="GameBoy Advance" className="relative bottom-138 z-1 right-90 w-50" {...fadeInLeftToRight(2)} />

      <motion.img src="/e.gif" alt="Everyone" className="relative bottom-170 z-1 right-20 w-20" {...fadeInLeftToRight(2)} />

      <motion.img src="/privacy.gif" alt="Everyone" className="relative bottom-190 z-1 left-20 w-50" {...fadeInLeftToRight(2)} />

      <p style={{ 
        position: "relative", 
        bottom: "700px", 
        textAlign: "left",   // Aligns text to the left
        color: "lightblue",      // Changes text color
        fontSize: "14px"
      }}>
        Game copyrights are property of their respective owners. TM, ®, the Nintendo GameCube logo and Game Boy Advance logo are trademarks of Nintendo. TM & © 2004 Nintendo.
      </p>


    </div>
  );
};

export default MainScreen;
