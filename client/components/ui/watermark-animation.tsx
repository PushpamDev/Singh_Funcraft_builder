import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (2).png",
    "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (3).png",
    "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (4).png", 
    "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (5).png",
    "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (6).png",
    "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (7).png",
    "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (8).png",
    "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image.png",
    "/Singh_FurnCraft_Portfolio/BANQUET HALL AND RECEPTION/Pasted image (2).png",
    "/Singh_FurnCraft_Portfolio/BANQUET HALL AND RECEPTION/Pasted image (3).png",
    "/Singh_FurnCraft_Portfolio/BANQUET HALL AND RECEPTION/Pasted image.png",
    "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (2).png",
    "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (3).png",
    "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (4).png",
    "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (5).png",
    "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image.png",
    "/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Pasted image (2).png",
    "/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Pasted image (3).png",
    // "/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Pasted image.png",
    "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (2).png",
    "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (3).png",
    "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (4).png",
    "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (5).png",
    "/Singh_FurnCraft_Portfolio/IMFA/Pasted image.png",
    "/Singh_FurnCraft_Portfolio/INNOVACER/Pasted image (2).png",
    "/Singh_FurnCraft_Portfolio/INNOVACER/Pasted image (3).png",
    "/Singh_FurnCraft_Portfolio/INNOVACER/Pasted image.png",
    "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image (2).png",
    "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image (3).png",
    "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image (4).png",
    "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image.png",
    "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (2).png",
    "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (3).png",
    "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (4).png",
    "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (5).png",
    "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (6).png",
    "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (7).png",
    "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (8).png",
    "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image.png",
    "/Singh_FurnCraft_Portfolio/NAU SENA BHAWAN 2/Pasted image (2).png",
    "/Singh_FurnCraft_Portfolio/NAU SENA BHAWAN 2/Pasted image (3).png",
    "/Singh_FurnCraft_Portfolio/NAU SENA BHAWAN 2/Pasted image.png",
    "/Singh_FurnCraft_Portfolio/POLYPLEX/Pasted image (2).png",
    "/Singh_FurnCraft_Portfolio/POLYPLEX/Pasted image (3).png",
    "/Singh_FurnCraft_Portfolio/POLYPLEX/Pasted image.png",
    "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (2).png",
    "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (3).png",
    "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (4).png",
    "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (5).png",
    "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image.png"
];

export const WatermarkAnimation = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      <AnimatePresence>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AnimatePresence>
    </div>
  );
};