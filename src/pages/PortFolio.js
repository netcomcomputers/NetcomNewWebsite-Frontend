import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PortfolioWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f3e8ff",
  minHeight: "100vh",
  padding: "80px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: "60px 0",
  },
}));

const PortfolioContent = styled(motion.div)(({ theme }) => ({
  textAlign: "center",
  padding: "25px 20px 35px 20px",
  position: "relative",
  width: "100%",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: "#000000",
  marginBottom: "14px",
  fontSize: "1.8rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#4a148c",
  fontSize: "1.1rem",
  lineHeight: 1.7,
  maxWidth: "500px",
  margin: "0 auto 25px auto",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const Underline = styled("div")({
  width: "60%",
  height: "3px",
  backgroundColor: "#6a1b9a",
  margin: "0 auto 10px auto",
  borderRadius: "2px",
});

const LearnMoreText = styled(Link)({
  color: "#4a148c",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "1.05rem",
  "&::after": {
    content: '"→"',
    marginLeft: "6px",
    transition: "margin 0.3s ease",
  },
  "&:hover::after": {
    marginLeft: "10px",
  },
  "&:hover": {
    textDecoration: "underline",
  },
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Portfolio = () => {
  const navigate = useNavigate();

  const portfolioItems = [
    {
      title: "Netcom Smart Class",
      description:
        "Interactive digital classrooms that enhance the learning experience with technology-driven content and immersive tools.",
      link: "/netcomsmartclass",
    },
    {
      title: "YouTube Channel",
      description:
        "Engaging educational videos and tutorials reaching thousands of learners across the globe through our digital platform.",
      link: "/youtube",
    },
    {
      title: "Kiosk Solutions",
      description:
        "Innovative self-service kiosks designed for educational institutions and corporate environments for efficient operations.",
      link: "/kiosk",
    },
    {
      title: "Netcom Digital Content",
      description:
        "High-quality digital content developed for schools, colleges, and training institutes with a focus on modern education.",
      link: "/netcomdigitalcontent",
    },
    {
      title: "Skill Development",
      description:
        "Empowering youth through specialized skill development programs, bridging the gap between education and employment.",
      link: "/skilldevelopment",
    },
  ];

  return (
    <PortfolioWrapper>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: "#000000",
          marginBottom: "50px",
          textAlign: "center",
          fontSize: { xs: "2rem", sm: "2.3rem", md: "2.5rem" },
        }}
      >
        OUR PORTFOLIO
      </Typography>

      <Grid
        container
        spacing={6}
        sx={{
          width: { xs: "90%", sm: "90%", md: "85%" },
          justifyContent: "center",
        }}
      >
        {portfolioItems.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={2.4}
            xl={2.4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PortfolioContent
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => navigate(item.link)}
              role="button"
            >
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Underline />

              <LearnMoreText
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(item.link);
                }}
              >
                Learn More
              </LearnMoreText>
            </PortfolioContent>
          </Grid>
        ))}
      </Grid>
    </PortfolioWrapper>
  );
};

export default Portfolio;
