import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ProductServiceForm from "../../components/ProductServiceForm";

const HeaderSection = styled(Box)(({ theme }) => ({
  minHeight: "50vh",
  background:
    "linear-gradient(135deg, #332521, #4B3830, #5F3920, #373F38, #292D3F)",
  display: "flex",
  alignItems: "center",
  color: "white",
  padding: "40px 20px",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    padding: "80px 60px",
  },
}));

const OverviewSection = styled(Box)(({ theme }) => ({
  background: "transparent",
  padding: "60px 20px",
  position: "relative",
  overflow: "hidden",
  backgroundSize: "20px 20px",
  [theme.breakpoints.up("md")]: {
    padding: "70px 60px",
  },
}));

const ImplementationSection = styled(Box)(({ theme }) => ({
  background: "transparent",
  padding: "40px 20px",
  [theme.breakpoints.up("md")]: {
    padding: "30px 60px",
  },
}));

const FeaturesSection = styled(Box)(({ theme }) => ({
  background: "transparent",
  padding: "100px 20px",
  [theme.breakpoints.up("md")]: {
    padding: "120px 80px",
  },
}));

export default function Emis() {
  const features = [
    "Instructors can create end-to-end customized and engaging courses by adding teaching materials using their favourite medium.",
    "Principals can access teachers' and students' dashboards.",
    "Teachers can record weekly plans, timetables, and schedules.",
    "Students get notified about updates in real time.",
    "School administrators can take attendance, record assessments, and organize staff data.",
    "EMIS facilitates the collection, processing, and management of information at the school level.",
    "It is a customizable application that supports day-to-day activities involved in managing an individual school.",
    "EMIS Classroom is an Android mobile app that facilitates the collection of data at the classroom level.",
    "Teachers can collect data on attendance, assessments, and student behaviors.",
    "EMIS Classroom data can be exported and shared in standard output formats.",
    "EMIS Classroom functions with an active internet connection.",
    "Principals and education officials can search, view, and update staff details (including photos) using a mobile device.",
    "EMIS Staffroom connects securely to access and update information.",
    "EMIS provides digital content as a central repository accessible to teachers across Tamil Nadu.",
    "Unique login identifiers for teachers are linked with the state curriculum.",
    "Track your personal career excellence via the portal.",
    "The portal provides syllabus details, school timings, notices, and modification details online.",
  ];

  return (
    <Box
      sx={{
        fontFamily: "'Poppins', sans-serif",
        background: "#E6E7E8",
      }}
    >
      <HeaderSection>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 4, md: 6 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ flex: 1 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
                }}
              >
                EDUCATIONAL MANAGEMENT INFORMATION SYSTEM (EMIS)
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  maxWidth: "650px",
                  fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                  opacity: 0.9,
                }}
              >
                A digital platform to manage, monitor, and analyze all school
                and student data efficiently. <br />
                EMIS simplifies record keeping, reporting, and decision-making
                for educational institutions.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/assets/product/emis/emislogo.png"
                alt="EMIS Logo"
                sx={{
                  width: { xs: "80%", sm: "70%", md: "85%", lg: "90%" },
                  maxWidth: "420px",
                  height: "auto",
                  objectFit: "contain",
                  background: "transparent",
                  mixBlendMode: "multiply",
                  filter:
                    "brightness(1.2) contrast(1.3) saturate(1.2) drop-shadow(0px 8px 20px rgba(255,255,255,0.2))",
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </motion.div>
          </Box>
        </Container>
      </HeaderSection>

      <OverviewSection>
        <Container maxWidth="lg">
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#111",
                fontFamily: "'Noto Sans', sans-serif",
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "2rem", sm: "2.3rem", md: "2.5rem" },
                mb: 3,
              }}
            >
              OVERVIEW
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                fontFamily: "'Noto Sans', sans-serif",
                color: "#121212",
                lineHeight: 1.8,
                textAlign: "justify",
                maxWidth: "900px",
                ml: { xs: 0, md: 0 },
              }}
            >
              EMIS learning management system for schools lets you pass on the
              right information to the right individual. Relevant updates appear
              once logged in — tailored for students, teachers, admin, parents,
              and the school’s management.
            </Typography>
          </Box>
        </Container>
      </OverviewSection>

      <ImplementationSection>
        <Container maxWidth="lg">
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#111",
                fontFamily: "'Noto Sans', sans-serif",
                textAlign: "center",
                mb: 6,
                fontSize: {
                  xs: "2rem",
                  sm: "2.4rem",
                  md: "2.6rem",
                  lg: "2.8rem",
                },
              }}
            >
              IMPLEMENTATION & EASE-OF-USE
            </Typography>

            <Grid container spacing={5}>
              {[
                {
                  title: "Personalized portals and dashboards",
                  desc: "The dashboard comes with flexible functionality, allowing administrators to create multiple personalized portals for students, faculty, and parents.",
                },
                {
                  title: "360° Student Profile",
                  desc: "From academic reports and attendance details to grading and results — everything is presented clearly in one place.",
                },
                {
                  title: "Alerts and Notifications",
                  desc: "Enables timely alerts and sends push notifications to students, parents, and teachers for updates and reminders.",
                },
                {
                  title: "Integrated Academic Calendar",
                  desc: "Easily integrate your academic calendar through a simple Excel import option and organize institutional plans effectively.",
                },
                {
                  title: "Inbuilt Attendance – Biometric / RFID Integration",
                  desc: "Eliminate paper-based attendance systems. EMIS simplifies attendance with automated digital and biometric support.",
                },
                {
                  title: "Multi-Language Support",
                  desc: "Adaptable multilingual system designed for diverse users based on their language preferences and regional needs.",
                },
                {
                  title: "Question Bank",
                  desc: "A vast, curated NTA-based question bank with detailed solutions crafted by educational experts.",
                },
                {
                  title: "Informative Videos",
                  desc: "Redefine learning experiences with access to video lectures and informative sessions to enhance understanding.",
                },
                {
                  title: "Lecturer Notes",
                  desc: "Students can easily access their lecturers’ notes after class — saving time and ensuring smooth learning continuity.",
                },
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Box sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#111",
                        fontFamily: "'Noto Sans', sans-serif",
                        mb: 1,
                        fontSize: {
                          xs: "1.25rem",
                          sm: "1.35rem",
                          md: "1.45rem",
                          lg: "1.55rem",
                          xl: "1.6rem",
                        },
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "1rem",
                          sm: "1.15rem",
                          md: "1.25rem",
                          lg: "1.3rem",
                          xl: "1.35rem",
                        },
                        lineHeight: 1.9,
                        color: "#121212",
                        fontFamily: "'Noto Sans', sans-serif",
                        textAlign: "justify",
                      }}
                    >
                      {feature.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </ImplementationSection>

      <FeaturesSection>
        <Container maxWidth="lg">
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#111",
                fontFamily: "'Noto Sans', sans-serif",
                mb: 5,
                fontSize: {
                  xs: "2rem",
                  sm: "2.4rem",
                  md: "2.7rem",
                  lg: "2.9rem",
                },
              }}
            >
              FEATURES OF EMIS
            </Typography>

            <Grid container spacing={{ xs: 2.5, sm: 3.5, md: 4 }}>
              {features.map((text, i) => (
                <Grid item xs={12} md={6} key={i}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    <span
                      style={{
                        color: "#111",
                        fontSize: "1.6rem",
                        lineHeight: 1,
                        marginTop: "4px",
                      }}
                    >
                      •
                    </span>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "1.05rem",
                          sm: "1.15rem",
                          md: "1.25rem",
                          lg: "1.35rem",
                        },
                        lineHeight: 1.9,
                        color: "#121212",
                        fontFamily: "'Noto Sans', sans-serif",
                        textAlign: "justify",
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </FeaturesSection>
      <ProductServiceForm />
    </Box>
  );
}
