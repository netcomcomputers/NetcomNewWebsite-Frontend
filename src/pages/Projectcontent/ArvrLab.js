import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const bgImage = process.env.PUBLIC_URL + "/assets/project/arvrlab/arvrlab1.jpg";

const ImageBanner = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  width: "100%",
  height: "72vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#fff",
  fontWeight: 800,
  fontSize: "3.5rem",
  letterSpacing: "1px",
  textShadow: "2px 2px 10px rgba(0,0,0,0.7)",

  [theme.breakpoints.down("xl")]: {
    fontSize: "3.2rem",
    height: "95vh",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.8rem",
    height: "90vh",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2.3rem",
    height: "70vh",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.9rem",
    height: "60vh",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.6rem",
    height: "55vh",
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#222",
  padding: "90px 10%",
  fontFamily: "Poppins, sans-serif",
  lineHeight: 2.1,

  [theme.breakpoints.down("md")]: {
    padding: "70px 7%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "50px 5%",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#111",
  fontSize: "2rem",
  fontFamily: "'Noto Sans', sans-serif",
  marginTop: "40px",
  marginBottom: "25px",
  textAlign: "left",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const Point = styled(Typography)(({ theme }) => ({
  position: "relative",
  fontSize: "1.25rem",
  fontFamily: "'Noto Sans', sans-serif",
  lineHeight: 2,
  color: "#2b2b2b",
  marginBottom: "14px",
  paddingLeft: "28px",
  display: "flex",
  alignItems: "flex-start",

  "&::before": {
    content: '"•"',
    position: "absolute",
    left: "0px",
    top: "4px",
    color: "#0d0d0e",
    fontWeight: 900,
    fontSize: "1.4rem",
    lineHeight: "1.2",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "1.15rem",
    paddingLeft: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.05rem",
    paddingLeft: "22px",
  },
}));

const SectionBlock = styled(motion.div)(({ theme }) => ({
  marginBottom: "50px",

  [theme.breakpoints.down("md")]: {
    marginBottom: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "30px",
  },
}));

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const ArvrLab = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <ImageBanner>AR & VR EXPERIENCE LAB</ImageBanner>

      <ContentSection>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <SectionBlock variants={fadeVariant}>
              <SectionTitle>Overview</SectionTitle>
              <Point>
                The Netcom AR & VR Experience Lab is a next-generation digital
                learning environment designed to bring immersive, interactive
                and experiential education into smart classrooms.
              </Point>
              <Point>
                It empowers teachers and students to explore concepts beyond
                traditional boundaries—enhancing engagement, understanding, and
                real-world skill development.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>
                Transforming Learning Through Immersive Technology
              </SectionTitle>

              <Point>
                Netcom’s AR (Augmented Reality) and VR (Virtual Reality)
                solutions convert complex lessons into lifelike 3D models,
                simulations, and virtual environments.
              </Point>
              <Point>
                Students can visualize abstract concepts, perform virtual
                experiments, and explore subjects without physical limitations.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>
                Empowering Teachers With Curriculum-Aligned Content
              </SectionTitle>

              <Point>
                Interactive 3D models for Science, Maths, Geography & Social
                Sciences.
              </Point>
              <Point>
                VR simulations for labs, historical journeys, and skill-based
                learning.
              </Point>
              <Point>
                Ready-to-use modules with teacher resources and guidance.
              </Point>
              <Point>
                Continuous training to help teachers integrate immersive
                learning effectively.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>Benefits for Students</SectionTitle>

              <Point>
                Builds conceptual clarity with interactive visual content.
              </Point>
              <Point>
                Boosts creativity, problem-solving, and critical thinking.
              </Point>
              <Point>
                Enables safe virtual experiments without physical risk.
              </Point>
              <Point>Improves memory retention and deep understanding.</Point>
              <Point>
                Encourages self-learning through immersive experiences.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>A Future-Ready Digital Classroom</SectionTitle>

              <Point>
                Netcom’s AR & VR Experience Lab is a complete digital ecosystem
                preparing students for future technologies.
              </Point>
              <Point>
                Institutions can shift from traditional learning to smart,
                experiential, and skill-oriented education.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>Why Choose Netcom?</SectionTitle>

              <Point>
                Over a decade of expertise in digital education solutions.
              </Point>
              <Point>
                High-quality AR/VR content created by subject matter experts.
              </Point>
              <Point>
                Continuous updates, training, and technical support.
              </Point>
              <Point>Scalable for institutions of all sizes.</Point>
              <Point>Proven success across multiple educational sectors.</Point>
            </SectionBlock>
          </motion.div>
        </Container>
      </ContentSection>
    </Box>
  );
};

export default ArvrLab;
