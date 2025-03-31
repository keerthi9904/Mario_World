import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const MainScreen = () => {

    function handleClick(){
        console.log("Image Clicked!")
    }

  return (
    <div className="w-screen bg-bluebg h-full flex flex-col items-center justify-center text-white relative pt-20">
      {/* Mario Image */}

    <div>
        <img
        src="/main.png" 
        alt="Mario"
        className="relative w-244"
        />
    </div>

    <div>
      <img
        src="/hot_titles.png"
        alt="Newsletter"
        className="relative bottom-151 left-34.5 w-22 hover:scale-125"
        onClick={() => handleClick()}
      />
    </div>


    <div>
       <img
        src="/newsletter.png"
        alt="Newsletter"
        className="relative bottom-35 right-20 w-70 hover:scale-125"
      />
    </div>

    <div>
        <img
        src="/mario_history.png"
        alt="Newsletter"
        className="relative bottom-177.5 left-56 w-25 hover:scale-125"
        />
    </div>

    <div>
      <img
        src="/downloads.png"
        alt="Newsletter"
        className="relative bottom-180.5 left-72 w-15 hover:scale-125"
        />
    </div>

    <div>
      <img
        src="/forums.png"
        alt="Newsletter"
        className="relative bottom-181 left-77 w-8 hover:scale-125"
      />
    </div>

    <div>
      <img
        src="/current_titles.png"
        alt="Newsletter"
        className="relative bottom-125 z-1 left-65 w-50 hover:scale-125"
      />
    </div>

    <div>
        {/* Patch for watermark */}
      <img
        src="/bluepatch.png"
        alt="Newsletterssss"
        className="relative bottom-140 left-95 w-50 hover:scale-125"
      />
    </div>


    
    </div>
  );
};

export default MainScreen;