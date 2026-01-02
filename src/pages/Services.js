import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "GRAPHIC DESIGN",
      img: "/assets/services/graphicdesign1.jpg",
      link: "/services/graphicdesign",
    },

    {
      title: "SHORT FILM",
      img: "/assets/services/shortfilm1.jpg",
      link: "/services/shortfilm",
    },
    {
      title: "E-CONTENT DEVELOPMENT",
      img: "/assets/services/edevelopment1.jpg",
      link: "/services/econtentdevelopment",
    },
    {
      title: "WEB APPLICATION DEVELOPMENT",
      img: "/assets/services/webappdevelopment1.jpg",
      link: "/services/webdevelopment",
    },
    {
      title: "HARDWARE SUPPORT & MAINTENANCE",
      img: "/assets/services/hardware1.jpg",
      link: "/services/hardwaresupport",
    },
    {
      title: "MOBILE APPLICATION DEVELOPMENT",
      img: "/assets/services/mobileappdevelopment1.jpg",
      link: "/services/mobiledevelopment",
    },
    {
      title: "WEB HOSTING SERVICES",
      img: "/assets/services/webhoisting1.jpg",
      link: "/services/webhoisting",
    },
    {
      title: "CUSTOMIZED SOFTWARE DEVELOPMENT",
      img: "/assets/services/customizedsoft1.jpg",
      link: "/services/customizeddevelopment",
    },
    {
      title: "CLOUD MAINTENANCE",
      img: "/assets/services/cloudmaintain1.jpg",
      link: "/services/cloudmaintainance",
    },
  ];

  return (
    <>
      <style>{`
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

      <section className="services-section">
        <h2 className="services-title">OUR SERVICES</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={service.img} alt={service.title} />
              <div className="service-overlay">
                <h3 className="service-title">{service.title}</h3>
                <button
                  className="learn-btn"
                  onClick={() =>
                    service.link
                      ? navigate(service.link)
                      : alert("Coming Soon!")
                  }
                >
                  <FontAwesomeIcon
                    icon={faReadme}
                    style={{ marginRight: "8px" }}
                  />
                  LEARN MORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
