import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeContent from "../subpages/HomeContent";
import OurClients from "../subpages/OurClients";
import OurJourney from "../subpages/OurJourney";
import ProductPage from "./ProductPage";
import ProjectPage from "./ProjectPage";
import Services from "./Services";

function Home() {
  const images = [
    "/assets/Homepage/homedark2.png",
    "/assets/Homepage/homedark3.png",
    "/assets/Homepage/homedark10.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <style>{`
        .home {
          margin: 0;
          padding: 0;
          background: #000;
          width: 100%;
          height: 88vh; /* Slightly smaller to fit navbar */
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .home img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: drop-shadow(0 0 20px rgba(127, 255, 178, 0.3));
          transition: transform 1s ease, filter 1s ease;
        }

        .home img:hover {
          transform: scale(1.02);
          filter: brightness(1.1);
        }

        /* Responsive height for all breakpoints */
        @media (max-width: 1200px) {
          .home { height: 80vh; }
        }
        @media (max-width: 992px) {
          .home { height: 70vh; }
        }
        @media (max-width: 768px) {
          .home { height: 60vh; }
        }
        @media (max-width: 576px) {
          .home { height: 50vh; }
        }
      `}</style>

      <div className="home">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt="dark themed slide"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <HomeContent />
      <Services />
      <OurJourney />
      <OurClients />
      <ProductPage />
      <ProjectPage />
    </>
  );
}

export default Home;
