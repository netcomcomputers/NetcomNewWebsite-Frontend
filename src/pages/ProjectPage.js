import React from "react";
import { styled, keyframes } from "@mui/system";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const float = keyframes`
  0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.4; }
  50% { transform: translateY(-40px) translateX(30px) rotate(20deg); opacity: 0.9; }
  100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.4; }
`;

const PageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  padding: "100px 5%",
  background: "radial-gradient(circle at 20% 20%, #000 0%, #001a12 80%)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    padding: "70px 5%",
  },
}));

const AnimatedBackground = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: 0,

  "&::before, &::after": {
    content: '""',
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(120px)",
    opacity: 0.6,
    animation: `${float} 12s ease-in-out infinite alternate`,
  },

  "&::before": {
    width: "600px",
    height: "600px",
    top: "-150px",
    left: "-200px",
    background:
      "radial-gradient(circle, rgba(0, 255, 150, 0.25) 0%, rgba(0, 100, 70, 0.15) 60%, transparent 100%)",
    animationDuration: "16s",
  },

  "&::after": {
    width: "500px",
    height: "500px",
    bottom: "-120px",
    right: "-120px",
    background:
      "radial-gradient(circle, rgba(0, 180, 100, 0.25), rgba(0, 60, 30, 0.1) 70%, transparent 100%)",
    animationDuration: "20s",
  },
});

const FloatingShape = styled("div")(({ delay, top, left, size, color }) => ({
  position: "absolute",
  top,
  left,
  width: size,
  height: size,
  borderRadius: "12%",
  background: color,
  opacity: 0.15,
  filter: "blur(3px)",
  animation: `${float} 10s ease-in-out ${delay}s infinite alternate`,
  zIndex: 0,
}));

const ProjectBox = styled(motion(Box))(({ theme, reverse }) => ({
  position: "relative",
  zIndex: 2,
  background: "rgba(10, 20, 15, 0.9)",
  border: "1px solid rgba(0, 255, 150, 0.15)",
  borderRadius: "22px",
  padding: "80px 100px",
  width: "80%",
  display: "flex",
  flexDirection: reverse ? "row-reverse" : "row",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
  transition: "all 0.4s ease",
  textAlign: reverse ? "right" : "left",
  marginLeft: reverse ? "auto" : 0,
  marginRight: reverse ? 0 : "auto",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 12px 30px rgba(0, 255, 150, 0.15)",
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
    flexDirection: "column",
    textAlign: "center",
    padding: "50px 40px",
    gap: "18px",
    margin: "0 auto",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 25px",
  },
}));

export default function ProjectPage() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Netcom Digital Contents",
      subtitle: "Innovative educational digital content solutions",
      link: "/netcomdigitalcontentproject",
    },
    {
      title: "EMIS Software Solutions",
      subtitle: "Smart education management software",
      link: "/emissofwaresolution",
    },
    {
      title: "Language Lab",
      subtitle: "Enhancing communication with smart learning tools",
      link: "/languagelab",
    },
    {
      title: "Call Soft",
      subtitle: "Empowering customer engagement through automation",
      link: "/callsoft",
    },
    {
      title: "Assessment",
      subtitle: "AI-powered testing & analytics solutions",
      link: "/assessment",
    },
    {
      title: "Skill Development & Training",
      subtitle: "Upskilling learners for a future-ready workforce",
      link: "/skilldevelopmentproject",
    },
    {
      title: "ICT / Hi-Tech Lab",
      subtitle: "Modern infrastructure for digital learning excellence",
      link: "/ict",
    },
    {
      title: "Kiosk Projects",
      subtitle: "Interactive, smart kiosk solutions for businesses",
      link: "/kioskproject",
    },
    {
      title: "RFID Solutions",
      subtitle: "Smart tracking & automation technology systems",
      link: "/rfidsolution",
    },
    {
      title: "AR & VR Experience Lab",
      subtitle: "A Digital Initiative for Expert Curriculum Development",
      link: "/arvrlab",
    },
    {
      title: "Robotics Lab",
      subtitle: "A Digital Initiative for Expert Curriculum Development",
      link: "/roboticslab",
    },
  ];

  return (
    <PageContainer>
      <AnimatedBackground />
      <FloatingShape
        delay={0}
        top="20%"
        left="10%"
        size="120px"
        color="rgba(0,255,150,0.25)"
      />
      <FloatingShape
        delay={3}
        top="60%"
        left="80%"
        size="90px"
        color="rgba(0,200,120,0.2)"
      />
      <FloatingShape
        delay={1.5}
        top="80%"
        left="40%"
        size="140px"
        color="rgba(0,255,180,0.2)"
      />

      <Box
        sx={{ textAlign: "center", mb: 10, zIndex: 2, position: "relative" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            color: "#eef3f0ff",
            mb: 2,
            letterSpacing: "0.5px",
            fontSize: { xs: "34px", sm: "46px", md: "56px", lg: "60px" },
          }}
        >
          Our Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Lexend', sans-serif",
            fontSize: { xs: "32px", sm: "20px", md: "22px", lg: "30px" },
            color: "#cceede",
            maxWidth: "720px",
            margin: "0 auto",
            opacity: 0.85,
            fontWeight: 600,
          }}
        >
          Explore our pioneering digital initiatives and technology-driven
          innovations.
        </Typography>
      </Box>

      {projects.map((proj, index) => {
        const isEven = (index + 1) % 2 === 0;
        return (
          <ProjectBox
            key={index}
            variants={isEven ? fadeInRight : fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            reverse={isEven}
            onClick={() => navigate(proj.link)}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  color: "#e0ffe8",
                  mb: 2,
                  fontSize: { xs: "30px", sm: "28px", md: "32px", lg: "45px" },
                  transition: "color 0.3s ease, text-shadow 0.3s ease",
                  "&:hover": {
                    color: "#00ff9a",
                    textShadow: "0 0 12px rgba(0,255,150,0.5)",
                  },
                }}
              >
                {proj.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "30px" },
                  color: "#b2d8c2",
                  opacity: 0.9,
                }}
              >
                {proj.subtitle}
              </Typography>
            </Box>

            {isEven ? (
              <ArrowBackIosNewIcon
                sx={{
                  color: "#89d8b5",
                  fontSize: { xs: 34, sm: 40, md: 46 },
                }}
              />
            ) : (
              <ArrowForwardIosIcon
                sx={{
                  color: "#89d8b5",
                  fontSize: { xs: 34, sm: 40, md: 46 },
                }}
              />
            )}
          </ProjectBox>
        );
      })}
    </PageContainer>
  );
}
