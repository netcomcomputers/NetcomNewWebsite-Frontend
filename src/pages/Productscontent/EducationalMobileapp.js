import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ProductServiceForm from "../../components/ProductServiceForm";

const HeaderSection = styled(Box)(({ theme }) => ({
  minHeight: "55vh",
  background:
    "linear-gradient(135deg, #D684B6 0%, #E1A2BE 35%, #F6CFC8 70%, #E5AAAE 100%)",
  display: "flex",
  alignItems: "center",
  color: "white",
  padding: "40px 20px",
  [theme.breakpoints.up("sm")]: {
    padding: "50px 40px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "70px 60px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "80px 80px",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "90px 100px",
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#2b2b2b",
  padding: "80px 20px",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    padding: "100px 60px",
  },
}));

export default function EducationalMobileapp() {
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
                  fontSize: {
                    xs: "1.6rem",
                    sm: "2rem",
                    md: "2.4rem",
                    lg: "2.6rem",
                    xl: "2.8rem",
                  },
                }}
              >
                EDUCATIONAL MOBILE APP
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
                GillGall is a complete educational mobile app designed to
                connect teachers, students, and parents in a single digital
                platform.
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
                src="/assets/product/educationalmobileapp/educationalmobileapplogo.jpg"
                alt="Educational App Logo"
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
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </motion.div>
          </Box>
        </Container>
      </HeaderSection>

      <ContentSection>
        <Container maxWidth="lg">
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
            sx={{
              fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
              lineHeight: 1.8,
              fontFamily: "'Noto Sans', sans-serif",
              color: "#121212",
              textAlign: "justify",
              maxWidth: "950px",
              ml: { xs: 0, md: 0 },
            }}
          >
            Gilgal represents the delivery of educational material and learning
            through digital resources. The initial skepticism surrounding it was
            bound to falter when results showed that studying online can be just
            as effective as classroom learning. Although the entire learning
            process is based on formal education principles, it is provided via
            an internet connection through computers, tablets, and smartphones.
            This makes it easy for students to access online classes anywhere
            and anytime.
          </Typography>

          <Box sx={{ mt: { xs: 8, sm: 10 } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                textAlign: "center",
                color: "#111",
                fontFamily: "'Noto Sans', sans-serif",
                mb: 5,
                fontSize: { xs: "2rem", sm: "2.3rem", md: "2.6rem" },
              }}
            >
              FEATURES
            </Typography>

            <Grid container spacing={5}>
              {[
                {
                  title: "Learn with Video Classes",
                  desc: `You can watch each topic and understand concepts together with videos.
                         Our Video lectures cover all topics & chapters from CBSE and State Board syllabus.
                        ach video comes with animations that help students understand concepts attractively.`,
                },
                {
                  title: "Question and Answers",
                  desc: `Learn 2 marks Questions with Answers for every subject.
                         Every important concept is covered clearly with concise answers.`,
                },
                {
                  title: "Model Question Papers",
                  desc: `Get revised model question papers for every subject — designed for exam preparation and syllabus coverage.`,
                },
                {
                  title: "Choice Based Questions",
                  desc: `Test your knowledge with interactive 1-mark choice-based questions with solutions — improve accuracy & speed.`,
                },
                {
                  title: "Clear Doubts Anytime",
                  desc: `Connect with tutors in real-time and clear your doubts.
                        Comes with 24×7 chat support and dedicated “Ask the Expert” section.`,
                },
                {
                  title: "Language Support",
                  desc: `Learn in both Tamil and English language — accessible to all regional students.`,
                },
                {
                  title: "Learn from Anywhere",
                  desc: `Study comfortably from your home or anywhere with full app access on all devices.`,
                },
                {
                  title: "Device Support",
                  desc: `Gilgal App is available on mobiles, tablets, and desktops — flexible and accessible learning.`,
                },
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Box
                    sx={{
                      maxWidth: "100%",
                      pr: { md: 4 },
                      pl: { xs: 1, sm: 2 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#111",
                        fontFamily: "'Noto Sans', sans-serif",
                        mb: 1,
                        fontSize: {
                          xs: "1.3rem",
                          sm: "1.45rem",
                          md: "1.55rem",
                          lg: "1.7rem",
                          xl: "1.85rem",
                        },
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "1.05rem",
                          sm: "1.15rem",
                          md: "1.25rem",
                          lg: "1.35rem",
                          xl: "1.45rem",
                        },
                        lineHeight: 1.9,
                        textAlign: "justify",
                        color: "#121212",
                        fontFamily: "'Noto Sans', sans-serif",
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
      </ContentSection>
      <ProductServiceForm />
    </Box>
  );
}
