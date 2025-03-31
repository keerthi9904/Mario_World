import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const MainScreen = () => {
  return (
    <div className="bg-blue-600 h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Mario Image */}
      <img
        src="/mario.png" 
        alt="Mario"
        className="absolute left-10 bottom-10 w-72"
      />

      {/* Circular Menu */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        <motion.div 
          className="absolute w-64 h-64 bg-red-600 rounded-full flex items-center justify-center border-4 border-white"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="text-6xl font-bold text-white">M</div>
        </motion.div>
      </div>

      {/* Text Elements */}
      <h1 className="absolute top-10 text-yellow-400 text-3xl font-bold text-center">
        IT'S MARIO'S WORLD, PLAY ALL YOU WANT.
      </h1>
      <p className="absolute bottom-20 text-sm">
        Sign up for <span className="text-red-500 font-bold">THE MARIO NEWSLETTER</span>
      </p>
    </div>
  );
};

export default MainScreen;