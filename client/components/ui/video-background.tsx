import { motion } from "framer-motion";

// This is the correct web-accessible path, assuming your 'public' folder is the root.
const videoPath = "/Singh_FurnCraft_Portfolio/BACKGROUND VIDEO/Luxury_Interior_Visualization_Video_Generation.mp4";

export const VideoBackground = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
      zIndex: -1,
      backgroundColor: "#000", // A base color while video loads
    }}
  >
    <motion.video
      key="background-video"
      src={videoPath}
      autoPlay
      loop
      muted
      playsInline
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
);