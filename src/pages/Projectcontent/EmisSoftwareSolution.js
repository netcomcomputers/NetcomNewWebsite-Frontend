import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "72vh",
  width: "100%",
  backgroundImage:
    "url('/assets/project/emissoftwaresolution/emissoftwaresolutionbg-new.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.4)",
  },
}));

const HeroText = styled(motion.div)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  zIndex: 2,
  padding: "0 24px",
  width: "100%",
  boxSizing: "border-box",
}));

const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#222",
  padding: "90px 10%",
  fontFamily: "'Noto Sans', sans-serif",
  lineHeight: 2.1,
  [theme.breakpoints.down("md")]: { padding: "70px 7%" },
  [theme.breakpoints.down("sm")]: { padding: "50px 5%" },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#111",
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "2rem",
  marginTop: "50px",
  marginBottom: "25px",
  [theme.breakpoints.down("md")]: { fontSize: "1.7rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.4rem" },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  lineHeight: 2,
  color: "#2b2b2b",
  marginBottom: "18px",
  [theme.breakpoints.down("md")]: { fontSize: "1.15rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.05rem" },
  [theme.breakpoints.down("xs")]: { fontSize: "0.98rem" },
}));

const Point = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  fontFamily: "'Noto Sans', sans-serif",
  gap: "14px",
  fontSize: "1.25rem",
  lineHeight: 1.9,
  color: "#2b2b2b",
  marginBottom: "14px",

  "&::before": {
    content: '"•"',
    fontSize: "1.6rem",
    fontWeight: 900,
    lineHeight: 1,
    marginTop: "5px",
    flexShrink: 0,
    display: "block",
    width: "18px",
    textAlign: "center",
  },

  [theme.breakpoints.down("xl")]: { fontSize: "1.23rem" },
  [theme.breakpoints.down("lg")]: { fontSize: "1.20rem", gap: "12px" },
  [theme.breakpoints.down("md")]: { fontSize: "1.15rem", gap: "10px" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.05rem", gap: "8px" },
  [theme.breakpoints.down("xs")]: { fontSize: "0.95rem", gap: "6px" },
}));

const BoldPoint = styled(Point)(({ theme }) => ({
  "& span": { fontWeight: 600, color: "#111" },
}));

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function EmisSoftwareSolution() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <HeroSection>
        <HeroText
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "2.4rem",
                sm: "3rem",
                md: "3.6rem",
                lg: "4.3rem",
              },
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.2,
              textShadow: "0 3px 12px rgba(0,0,0,0.4)",
            }}
          >
            EMIS Software Solution
          </Typography>
        </HeroText>
      </HeroSection>

      <ContentSection>
        <Container maxWidth="lg">
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SubHeading>Overview</SubHeading>
            <Point>
              EMIS system is the perfect medium to integrate your academic
              calendar, through simple excel import option and work your plan.
              Connect your teachers and students, empower them to access the
              structured academic calendar and run the events as planned.
            </Point>

            <Point>
              EMIS learning management system for schools lets you pass on the
              right information to the right individual. Relevant information
              updates are shown on the screen once logged in to the concerned
              portals, for students, teachers, admin, parents, and school’s
              management.
            </Point>

            <SubHeading>IMPLEMENTATION & EASE-OF-USE</SubHeading>

            <BoldPoint>
              <span>Personalized portals & dashboards – </span>
              Admins create unique portals for students, staff, and parents.
            </BoldPoint>

            <BoldPoint>
              <span>360° student profile – </span>
              From academic reports, attendance, grading, and exam results –
              everything at a glance.
            </BoldPoint>

            <BoldPoint>
              <span>Alerts and notifications – </span>
              Enables timely alerts and push notifications to students, parents,
              and teachers.
            </BoldPoint>

            <BoldPoint>
              <span>Integrated academic calendar – </span>
              Import and manage your academic schedule easily with EMIS
              integration.
            </BoldPoint>

            <BoldPoint>
              <span>Inbuilt attendance with biometric/RFID – </span>
              Go paperless with digital attendance tracking.
            </BoldPoint>

            <BoldPoint>
              <span>Multi-language support – </span>
              Adapts to user’s language preferences and regional settings.
            </BoldPoint>

            <BoldPoint>
              <span>Question bank – </span>
              Curated NTA-based question sets with solutions.
            </BoldPoint>

            <BoldPoint>
              <span>Informative videos – </span>
              Enhance learning with video lectures and educational content.
            </BoldPoint>

            <BoldPoint>
              <span>Lecturer notes – </span>
              Students can access lecturer notes immediately after class
              completion.
            </BoldPoint>

            <SubHeading>Features of EMIS</SubHeading>

            <Point>
              Instructors can create customized, engaging courses by adding
              teaching materials using their preferred media. Principals can
              access teacher and student dashboards. Teachers can record weekly
              plans, timetables, and schedules, while students get real-time
              notifications.
            </Point>

            <Point>
              As an administrator, manage attendance, assessments, and staff
              data easily. EMIS supports daily school operations and is
              customizable for each institution’s needs.
            </Point>

            <Point>
              EMIS Classroom mobile app allows teachers to collect
              classroom-level data like attendance, assessments, and behaviors,
              which can be exported or shared in standard formats.
            </Point>

            <Point>
              Principals and education officials can search, view, and update
              staff details, including staff photos, via secure mobile access.
            </Point>

            <Point>
              EMIS provides digital content repositories accessible to teachers
              across Tamil Nadu with unique login identifiers. It helps track
              career excellence and provides syllabus updates, timings, notices,
              and modification details online.
            </Point>
          </motion.div>
        </Container>
      </ContentSection>
    </Box>
  );
}
