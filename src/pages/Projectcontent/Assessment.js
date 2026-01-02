import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const bgImage =
  process.env.PUBLIC_URL + "/assets/project/assessment/assessment.jpg";

const ImageBanner = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  width: "100%",
  height: "72vh",
  borderRadius: "0 0 30px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#fff",
  fontWeight: 800,
  fontSize: "3.5rem",
  letterSpacing: "1px",
  textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
  [theme.breakpoints.down("xl")]: { fontSize: "3.2rem", height: "95vh" },
  [theme.breakpoints.down("lg")]: { fontSize: "2.8rem", height: "90vh" },
  [theme.breakpoints.down("md")]: { fontSize: "2.3rem", height: "70vh" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.9rem", height: "60vh" },
  [theme.breakpoints.down("xs")]: { fontSize: "1.6rem", height: "55vh" },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#222",
  padding: "90px 10%",
  fontFamily: "Poppins, sans-serif",
  lineHeight: 2.1,
  [theme.breakpoints.down("md")]: { padding: "70px 7%" },
  [theme.breakpoints.down("sm")]: { padding: "50px 5%" },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontFamily: "'Noto Sans', sans-serif",
  color: "#111",
  fontSize: "2rem",
  marginTop: "40px",
  marginBottom: "25px",
  [theme.breakpoints.down("md")]: { fontSize: "1.75rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.5rem" },
}));

const Point = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontFamily: "'Noto Sans', sans-serif",
  gap: "14px",
  fontSize: "1.25rem",
  lineHeight: 1.8,
  color: "#2b2b2b",
  marginBottom: "16px",
  width: "100%",
  wordBreak: "break-word",

  "&::before": {
    content: '"•"',
    fontSize: "1.7rem",
    fontWeight: 900,
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    flexShrink: 0,
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: "1.15rem",
    "&::before": { fontSize: "1.5rem", width: "18px" },
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.05rem",
    gap: "10px",
    "&::before": { fontSize: "1.4rem", width: "16px" },
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
    gap: "8px",
    "&::before": { fontSize: "1.3rem", width: "14px" },
  },
}));

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function Assessment() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <ImageBanner>ASSESSMENT</ImageBanner>

      <ContentSection>
        <Container maxWidth="lg">
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle>Overview</SectionTitle>
            <Point>
              Netcom Assessment is the process of gathering and discussing
              information from multiple and diverse sources to understand what
              students know and can do.
            </Point>
            <Point>
              Assessment is the systematic method of defining, designing,
              analyzing, and interpreting information to improve student
              learning.
            </Point>

            <SectionTitle>Purpose of Assessment</SectionTitle>
            <Point>
              Two major approaches are <b>assessment for improvement</b> and{" "}
              <b>assessment for accountability</b>.
            </Point>
            <Point>
              Improvement focuses on enhancing teaching, learning, and programs.
            </Point>
            <Point>
              Accountability demonstrates institutional effectiveness to
              stakeholders.
            </Point>

            <SectionTitle>Using the Teacher Computer or Server</SectionTitle>
            <Point>
              After installation, the teacher can fully control all student
              computers.
            </Point>

            <SectionTitle>Using the Student’s Computer or Client</SectionTitle>
            <Point>
              The Language Lab runs silently on student computers controlled by
              the teacher.
            </Point>

            <SectionTitle>Methods of Assessment</SectionTitle>
            <Point>
              <b>Examine Method:</b> Reviewing assessment objects to gather
              evidence.
            </Point>
            <Point>
              <b>Interview Method:</b> Discussions to gather deeper insights.
            </Point>
            <Point>
              <b>Test Method:</b> Testing under conditions to compare
              performance.
            </Point>

            <SectionTitle>Continuous Improvement</SectionTitle>
            <Point>
              Assessment is an ongoing cycle of gathering, analyzing, and
              interpreting evidence.
            </Point>
            <Point>It includes three core purposes:</Point>
            <Point>
              <b>Assessment for Learning:</b> Teachers guide instruction.
            </Point>
            <Point>
              <b>Assessment as Learning:</b> Students reflect and set goals.
            </Point>
            <Point>
              <b>Assessment of Learning:</b> Teachers evaluate achievement.
            </Point>

            <SectionTitle>Features</SectionTitle>
            <Point>Teacher console displays list of connected students.</Point>
            <Point>Real-time screen and audio broadcast.</Point>
            <Point>View student screens and monitor progress.</Point>
            <Point>Record sessions for future playback.</Point>
            <Point>File sharing between teacher and students.</Point>
            <Point>Control student systems (mute, lock, screen control).</Point>
            <Point>Provide sample call lessons.</Point>
          </motion.div>
        </Container>
      </ContentSection>
    </Box>
  );
}
