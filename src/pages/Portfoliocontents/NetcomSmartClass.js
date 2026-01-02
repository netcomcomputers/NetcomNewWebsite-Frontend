import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const SmartClassWrapper = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #e1fcd2ff 0%, #e8f5e9 100%)",
  minHeight: "100vh",
  padding: "100px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: "70px 0",
  },
}));

const Title = styled(motion(Typography))(({ theme }) => ({
  fontWeight: 800,
  color: "#6c721eff",
  textAlign: "center",
  marginBottom: "20px",
  fontSize: "2.8rem",
  letterSpacing: "1px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const Description = styled(motion(Typography))(({ theme }) => ({
  color: "#81a73bff",
  textAlign: "center",
  maxWidth: "850px",
  lineHeight: 1.7,
  fontSize: "1.15rem",
  marginBottom: "80px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    marginBottom: "50px",
    padding: "0 15px",
  },
}));

const ImageCard = styled(motion.div)(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 8px 22px rgba(0,0,0,0.18)",
  cursor: "pointer",
  height: "320px",
  width: "100%",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.6s ease",
  },
  "&:hover img": {
    transform: "scale(1.1)",
  },
  "&:hover div": {
    opacity: 1,
  },
  [theme.breakpoints.down("md")]: {
    height: "280px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "240px",
  },
}));

const Overlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(62, 0, 0, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.4s ease",
  color: "#fff",
  fontSize: "1.4rem",
  fontWeight: 700,
  letterSpacing: "0.5px",
  textAlign: "center",
  padding: "0 10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
}));

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const NetcomSmartClass = () => {
  const schools = [
    {
      name: "Oxford Matric School",
      img: "/assets/portfoliopageimages/nsc/nsc01.jpg",
    },
    {
      name: "Green Valley Public School",
      img: "/assets/portfoliopageimages/nsc/nsc04.webp",
    },
    {
      name: "St. Mary’s High School",
      img: "/assets/portfoliopageimages/nsc/nsc07.webp",
    },
    {
      name: "Sunshine International",
      img: "/assets/portfoliopageimages/nsc/nsc10.webp",
    },
    {
      name: "Global Academy",
      img: "/assets/portfoliopageimages/nsc/nsc13.webp",
    },
    {
      name: "Vivekananda Vidyalaya",
      img: "/assets/portfoliopageimages/nsc/nsc15.webp",
    },
    {
      name: "Little Angels School",
      img: "/assets/portfoliopageimages/nsc/nsc19.webp",
    },
    {
      name: "Mount Zion Matric",
      img: "/assets/portfoliopageimages/nsc/nsc22.webp",
    },
    {
      name: "Bright Future School",
      img: "/assets/portfoliopageimages/nsc/nsc26.webp",
    },
    {
      name: "Elite Public School",
      img: "/assets/portfoliopageimages/nsc/nsc28.webp",
    },
    {
      name: "Royal International",
      img: "/assets/portfoliopageimages/nsc/nsc30.webp",
    },
    {
      name: "Silver Star Academy",
      img: "/assets/portfoliopageimages/nsc/nsc35.webp",
    },
  ];

  return (
    <SmartClassWrapper>
      <Title
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Netcom Smart Class
      </Title>

      <Description
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Transforming education with cutting-edge smart classroom technology. Our
        smart class solutions empower students and teachers with interactive
        learning tools, multimedia content, and seamless digital experiences.
      </Description>

      <Grid
        container
        spacing={4}
        sx={{
          width: { xs: "90%", sm: "90%", md: "85%", lg: "80%" },
          justifyContent: "center",
        }}
      >
        {schools.map((school, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ImageCard
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={school.img}
                alt={school.name}
                loading="lazy"
                decoding="async"
              />

              <Overlay>{school.name}</Overlay>
            </ImageCard>
          </Grid>
        ))}
      </Grid>
    </SmartClassWrapper>
  );
};

export default NetcomSmartClass;
