import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center; /* ✅ ensures perfect vertical centering */
          background: linear-gradient(135deg, #000000, #1a1a1a, #2b2b2b);
          padding: 18px 60px;
          box-shadow: 0 6px 25px rgba(255, 255, 255, 0.15);
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(6px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          flex-wrap: nowrap; /* ✅ keeps items on one line in laptop view */
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 2rem;
          font-weight: 700;
          color: #e4e4e4;
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
          letter-spacing: 1px;
          flex-shrink: 0; /* ✅ prevents logo from shrinking */
        }

        .logo img {
          height: 60px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.25));
          vertical-align: middle;
        }

        .nav-links {
          display: flex;
          gap: 45px;
          list-style: none;
          align-items: center;
          margin: 0; /* ✅ removed margin that caused pushing down */
          padding: 0;
          flex-wrap: nowrap;
        }

        .nav-links a {
          color: #cfcfcf;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.2rem;
          position: relative;
          transition: 0.3s ease;
        }

        .nav-links a:hover {
          color: #ffffff;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #ffffff, #c0c0c0);
          left: 0;
          bottom: -5px;
          transition: 0.3s;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .menu-icon {
          display: none;
          font-size: 2.2rem;
          color: #e0e0e0;
          cursor: pointer;
          background: transparent;
          border: none;
        }

        /* Medium & Small devices */
        @media (max-width: 992px) {
          .navbar {
            padding: 15px 25px;
            flex-wrap: wrap; /* ✅ allow stacking only on mobile */
          }

          .logo img {
            height: 60px;
          }

          .nav-links {
            position: absolute;
            top: 80px;
            right: 0;
            width: 100%;
            flex-direction: column;
            background: rgba(10, 10, 10, 0.97);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
            padding: 25px 0;
            display: none;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links a {
            font-size: 1.25rem;
            padding: 10px 0;
          }

          .menu-icon {
            display: block;
          }
        }

        /* Extra small */
        @media (max-width: 576px) {
          .navbar {
            padding: 12px 20px;
          }

          .logo img {
            height: 50px;
          }

          .logo {
            font-size: 1.6rem;
          }

          .menu-icon {
            font-size: 2rem;
          }
        }

        @media (min-width: 1440px) {
  .navbar { padding: 18px 120px; }
  .logo { margin-left: 80px; }
  .nav-links { margin-right: 80px; }
}

      `}</style>

      <nav className="navbar">
        <div className="logo">
          <img src="/assets/netcomlog.png" alt="logo" />
        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ userSelect: "none" }}
        >
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={() => {
                setMenuOpen(false);
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => {
                setMenuOpen(false);
                if (window.location.pathname === "/about") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              onClick={() => {
                setMenuOpen(false);
                if (window.location.pathname === "/career") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={() => {
                setMenuOpen(false);
                if (window.location.pathname === "/portfolio") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              PortFolio
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => {
                setMenuOpen(false);
                if (window.location.pathname === "/contact") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
