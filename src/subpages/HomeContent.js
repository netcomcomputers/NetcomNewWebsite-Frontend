import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

function HomeContent() {
  const navigate = useNavigate();

  const services = [
    { title: "GRAPHIC DESIGN", img: "/assets/services/graphicdesign.jpg", link:"/services/graphicdesign" },
    { title: "SHORT FILM", img: "/assets/services/shortfilm/shortfilmbg.jpg", link:"/services/shortfilm" },
    { title: "E-CONTENT DEVELOPMENT", img: "/assets/services/edevelopment.jpg", link:"/services/econtentdevelopment" },
    {
      title: "WEB APPLICATION DEVELOPMENT",
      img: "/assets/services/webappdevelopment.jpg",
      link: "/services/webdevelopment",
    },
    {
      title: "HARDWARE SUPPORT & MAINTAINANCE",
      img: "/assets/services/hardware.jpg",
      link:"/services/hardwaresupport"
    },
    {
      title: "MOBILE APPLICATION DEVELOPMENT",
      img: "/assets/services/mobileappdevelopment.jpg",
      link:"/services/mobiledevelopment"
    },
    {
      title: "WEB HOISTING SERVICES",
      img: "/assets/services/webhoisting.jpg",
      link:"/services/webhoisting"
    },
    {
      title: "CUSTOMIZED SOFTWARE DEVELOPMENT",
      img: "/assets/services/customizedsoft.jpg",
      link:"/services/customizeddevelopment"
    },
    { title: "CLOUD MAINTAINANCE", img: "/assets/services/cloudmaintain.jpg", link:"/services/cloudmaintainance" },
  ];

  return (
    <>
      <style>{`
  /* ===== HOME CONTENT ===== */
.home-content {
  position: relative;
  min-height: 90vh;
  width: 100%;
  background: radial-gradient(circle at top, #0a0a0a 0%, #000000 100%);
  color: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 14px;
  height: 14px;
  background: linear-gradient(45deg, #7fffb2, #44ffcc, #0088ff);
  border-radius: 50%;
  opacity: 0.8;
  animation: float 12s linear infinite;
}

@keyframes float {
  0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.9; }
  50% { transform: translateY(-100px) translateX(40px) scale(1.2); opacity: 1; }
  100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.8; }
}

.particle:nth-child(1) { top: 8%; left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { top: 25%; left: 75%; animation-delay: 2s; }
.particle:nth-child(3) { top: 45%; left: 35%; animation-delay: 4s; }
.particle:nth-child(4) { top: 65%; left: 85%; animation-delay: 6s; }
.particle:nth-child(5) { top: 80%; left: 55%; animation-delay: 8s; }

.home-title {
  font-size: 3.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #7fffb2, #00ffff, #66ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 25px rgba(127, 255, 178, 0.5);
  margin-bottom: 20px;
}
/* ===== FIX HOME TITLE RESPONSIVENESS (XS → XL) ===== */

/* Extra large screens (already ok - minor adjust) */
@media (max-width: 1400px) {
  .home-title {
    font-size: 3.2rem;
  }
}

/* Large screens */
@media (max-width: 1200px) {
  .home-title {
    font-size: 2.8rem;
    padding: 0 10px;
  }
}

/* Medium devices (tablets) */
@media (max-width: 992px) {
  .home-title {
    font-size: 2.4rem;
    padding: 0 15px;
  }
}

/* Small devices (mobile landscape) */
@media (max-width: 768px) {
  .home-title {
    font-size: 2rem;
    line-height: 1.3;
    padding: 0 15px;
  }
}

/* Extra small devices (mobile portrait) */
@media (max-width: 576px) {
  .home-title {
    font-size: 1.7rem;
    line-height: 1.25;
    padding: 0 10px;
    max-width: 100%;
    text-align: center;
    word-break: break-word;
  }
}

.home-subtitle {
  font-size: 1.5rem;
  color: #d1d1d1;
  max-width: 750px;
  line-height: 1.6;
}

/* ===== OUR SERVICES SECTION ===== */
.services-section {
  background: #ffffff;
  color: #000;
  padding: 100px 40px;
  text-align: left;
  font-family: "Poppins", sans-serif;
}

.services-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 60px;
  background: linear-gradient(90deg, #538851ff, #30b109ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 8%;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-items: center;
}

.service-card {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.4s ease;
  width: 90%;
  max-width: 650px;
  height: 690px;
}

.service-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1.1);
  transition: all 0.5s ease;
}

.service-card:hover img {
  transform: scale(1.08);
  filter: brightness(0.6);
}

.service-card:active img {
  filter: brightness(0.4);
}

.service-overlay {
  position: absolute;
  bottom: 45px;
  left: 35px;
  text-align: left;
  transition: all 0.4s ease;
}

.service-title {
  font-size: 1.7rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 10px;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.7);
}

.learn-btn {
  font-size: 1.3rem;
  color: #fff;
  font-weight: 700;
  background: none;
  border: none;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;
}

.learn-btn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0%;
  height: 3px;
  background: #00d4ff;
  transition: width 0.3s ease;
}

.service-card:hover .learn-btn::after {
  width: 100%;
}

/* ===== RESPONSIVE BREAKPOINTS ===== */
@media (max-width: 1400px) {
  .services-grid { gap: 35px; }
  .service-card { height: 630px; width: 90%; }
}

@media (max-width: 1200px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); gap: 35px; }
  .service-card { height: 600px; width: 88%; }
  .service-title { font-size: 2rem; }
  .learn-btn { font-size: 1.2rem; }
}

@media (max-width: 992px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; }
  .service-card { height: 520px; width: 90%; }
  .service-title { font-size: 1.9rem; }
}

@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; gap: 25px; }
  .service-card { width: 92%; height: 480px; }
  .service-overlay { bottom: 25px; left: 25px; }
  .service-title { font-size: 1.7rem; }
  .learn-btn { font-size: 1.1rem; }
}

@media (max-width: 576px) {
  .services-section { padding: 70px 15px; }
  .service-card { width: 95%; height: 420px; }
  .service-overlay { bottom: 20px; left: 20px; }
  .service-title { font-size: 1.5rem; }
  .learn-btn { font-size: 1.05rem; }
}
`}</style>

      {/* ===== HOME SECTION ===== */}
      <div className="home-content">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>

        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          Netcom — Empowering the Digital Future
        </motion.h1>

        <motion.p
          className="home-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          Smart, Secure, and Seamlessly Connected — Delivering the next
          generation of network innovation.
        </motion.p>
      </div>

     
    </>
  );
}

export default HomeContent;
