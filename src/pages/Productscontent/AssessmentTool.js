import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ProductServiceForm from "../../components/ProductServiceForm";

const HeaderSection = styled(Box)(({ theme }) => ({
  minHeight: "50vh",
  background:
    "linear-gradient(135deg, #615545, #9B773D, #121112, #646263, #444243)",
  display: "flex",
  alignItems: "center",
  color: "white",
  padding: "40px 20px",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    padding: "80px 60px",
  },
}));

const PageBG = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#2b2b2b",
  padding: "80px 20px",
  [theme.breakpoints.up("md")]: {
    padding: "100px 60px",
  },
}));

const LightSection = styled(Box)(({ theme }) => ({
  padding: "60px 0px",
  overflow: "hidden",
}));
export default function AssessmentTool() {
  return (
    <Box sx={{ fontFamily: "'Poppins', sans-serif" }}>
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
                  color: "white",
                  fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
                }}
              >
                ASSESSMENT TOOL
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  maxWidth: "650px",
                  color: "white",
                  fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                  opacity: 0.9,
                }}
              >
                A digital platform that enables educators to create, conduct,
                and evaluate assessments seamlessly. It provides instant
                feedback, analytics, and performance tracking to improve
                learning outcomes.
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
                src="/assets/product/assessmenttool/assessmentlogo.jpg"
                alt="Smart Classroom Logo"
                sx={{
                  width: { xs: "80%", sm: "70%", md: "85%", lg: "90%" },
                  maxWidth: "420px",
                  height: "auto",
                  objectFit: "contain",
                  background: "transparent",
                  borderRadius: "50%",
                  mixBlendMode: "multiply",
                  filter:
                    "brightness(1.2) contrast(1.3) saturate(1.2) drop-shadow(0px 8px 20px rgba(255,255,255,0.2))",
                  maskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 85%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 85%, transparent 100%)",
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </motion.div>
          </Box>
        </Container>
      </HeaderSection>

      <PageBG>
        <LightSection>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
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
                  fontSize: {
                    xs: "1.05rem",
                    sm: "1.2rem",
                    md: "1.3rem",
                    lg: "1.35rem",
                  },
                  fontFamily: "'Noto Sans', sans-serif",
                  color: "#121212",
                  lineHeight: 1.9,
                  textAlign: "justify",
                  maxWidth: "950px",
                  ml: { xs: 0, md: 0 },
                }}
              >
                Netcom Assessment is the process of gathering and discussing
                information from multiple and diverse sources in order to
                develop a deep understanding of what students know, understand,
                and can do with their knowledge as a result of their educational
                experiences. Netcom process culminates when assessment results
                are used to improve subsequent learning.
              </Typography>
            </motion.div>
          </Container>
        </LightSection>

        <LightSection>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#111",
                fontFamily: "'Noto Sans', sans-serif",
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "2rem", sm: "2.4rem", md: "2.6rem" },
                mb: 5,
              }}
            >
              PURPOSE OF ASSESSMENT
            </Typography>

            <Grid container spacing={{ xs: 3, md: 4 }}>
              {[
                "Assessment for improvement focuses on enhancing teaching, learning, and decision-making within an institution.",
                "The goal is to motivate staff and faculty to improve the quality of programs, services, and student outcomes.",
                "Assessment for accountability ensures transparency by demonstrating institutional effectiveness to stakeholders, including parents.",
              ].map((text, i) => (
                <Grid item xs={12} key={i}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "1.05rem",
                        sm: "1.2rem",
                        md: "1.3rem",
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
                </Grid>
              ))}
            </Grid>
          </Container>
        </LightSection>

        <LightSection>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#111",
                fontFamily: "'Noto Sans', sans-serif",
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "2rem", sm: "2.4rem", md: "2.6rem" },
                mb: 5,
              }}
            >
              NETCOM ASSESSMENT METHODS DEFINE THE NATURE OF THE ASSESSOR
              ACTIONS AND INCLUDE:
            </Typography>

            <Box sx={{ maxWidth: "950px", ml: { xs: 0, md: 0 } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#121212",
                  fontFamily: "'Noto Sans', sans-serif",
                  mb: 1,
                  fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.5rem" },
                }}
              >
                Examine Method:
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.05rem",
                    sm: "1.2rem",
                    md: "1.3rem",
                    lg: "1.35rem",
                  },
                  lineHeight: 1.9,
                  fontFamily: "'Noto Sans', sans-serif",
                  color: "#121212",
                  textAlign: "justify",
                  mb: 4,
                }}
              >
                The process of reviewing, inspecting, observing, studying, or
                analyzing one or more assessment objects. The purpose of this
                method is to facilitate assessor understanding, achieve
                clarification, or obtain evidence.
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#111",
                  fontFamily: "'Noto Sans', sans-serif",
                  color: "#121212",
                  mb: 1,
                  fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.5rem" },
                }}
              >
                Test Method:
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.05rem",
                    sm: "1.2rem",
                    md: "1.3rem",
                    lg: "1.35rem",
                  },
                  lineHeight: 1.9,
                  textAlign: "justify",
                  fontFamily: "'Noto Sans', sans-serif",
                  color: "#121212",
                  mb: 4,
                }}
              >
                The process of exercising one or more assessment objects under
                specified conditions to compare actual with expected behavior.
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "1.05rem",
                    sm: "1.2rem",
                    md: "1.3rem",
                    lg: "1.35rem",
                  },
                  lineHeight: 1.9,
                  textAlign: "justify",
                  fontFamily: "'Noto Sans', sans-serif",
                  color: "#121212",
                  mb: 4,
                }}
              >
                Netcom Assessment is the ongoing process of gathering, analysing
                and interpreting evidence, reflecting on findings, making
                informed and consistent judgements to improve student learning.
                Assessment for improved student learning and deep understanding
                requires a range of assessment practices to be used with three
                overarching purposes.
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#111",
                  fontFamily: "'Noto Sans', sans-serif",
                  mb: 1,
                  fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.5rem" },
                }}
              >
                Interview Method:
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.05rem",
                    sm: "1.2rem",
                    md: "1.3rem",
                    lg: "1.35rem",
                  },
                  fontFamily: "'Noto Sans', sans-serif",
                  color: "#121212",
                  lineHeight: 1.9,
                  textAlign: "justify",
                }}
              >
                The process of holding discussions with individuals or groups
                within an organization to facilitate assessor understanding,
                achieve clarification, or obtain evidence.
              </Typography>
            </Box>
          </Container>
        </LightSection>
      </PageBG>
      <ProductServiceForm />
    </Box>
  );
}
