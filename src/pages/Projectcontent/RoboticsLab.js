import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const bgImage =
  process.env.PUBLIC_URL + "/assets/project/roboticslab/roboticslab.jpg";

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
  fontFamily: "'Noto Sans', sans-serif",
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
  fontFamily: "'Noto Sans', sans-serif",
  color: "#111",
  fontSize: "2rem",
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
  lineHeight: 2,
  fontFamily: "'Noto Sans', sans-serif",
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

const RoboticsLab = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <ImageBanner>ROBOTICS LAB</ImageBanner>

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
                The Netcom Robotics Lab is a modern digital learning environment
                designed to introduce learners to robotics, automation, and
                problem-solving through hands-on experiences.
              </Point>
              <Point>
                Netcom’s Robotics Lab brings world-class STEM education into
                classrooms by integrating intelligent hardware, simulation
                tools, and structured learning modules.
              </Point>
              <Point>
                This initiative helps institutions build a future-ready learning
                ecosystem where students explore robotics concepts through
                guided, interactive, and practical activities.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>Curriculum-Focused Learning</SectionTitle>

              <Point>
                The Robotics Lab is aligned with modern educational frameworks,
                enabling structured curriculum development and skill-based
                learning.
              </Point>
              <Point>
                Netcom provides curriculum-ready content, activity modules, and
                assessment tools for seamless integration into academic
                programs.
              </Point>
              <Point>
                Each module builds progressive expertise—from basic robotic
                movement to advanced automation concepts.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>Technology & Hands-On Learning</SectionTitle>

              <Point>
                With Netcom’s Robotics Kits and Simulation Tools, learners can
                design, build, and program robots in a safe and interactive
                environment.
              </Point>
              <Point>
                Students gain real-time experience with sensors, motors,
                controllers, and coding platforms.
              </Point>
              <Point>
                The lab encourages creativity and logical thinking by allowing
                learners to test ideas, build prototypes, and solve real-world
                challenges.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>Benefits & Outcomes</SectionTitle>

              <Point>
                Promotes STEM learning and strengthens understanding of robotics
                and automation.
              </Point>
              <Point>
                Enhances analytical thinking, creativity, and teamwork through
                project-based activities.
              </Point>
              <Point>
                Helps learners acquire future-ready skills aligned with modern
                industry standards.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>Why Choose Netcom?</SectionTitle>

              <Point>
                Netcom offers end-to-end Robotics Lab setup — from hardware and
                content creation to training and technical support.
              </Point>
              <Point>
                All modules are designed by experienced robotics educators and
                industry experts.
              </Point>
              <Point>
                Continuous updates, hands-on workshops, and expert support
                ensure high-quality robotics education year-round.
              </Point>
              <Point>
                Scalable solutions suitable for schools, colleges, and skill
                development centers.
              </Point>
            </SectionBlock>
          </motion.div>
        </Container>
      </ContentSection>
    </Box>
  );
};

export default RoboticsLab;
