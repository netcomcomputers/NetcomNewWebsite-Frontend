// ✅ src/pages/Servicescontents/ShortFilm.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ServiceForm from "../../components/ServiceForm";

// 🌆 HERO SECTION



const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "72vh",
  width: "100%",
   backgroundImage: "url('/assets/services/shortfilm/shortfilmbg.jpg')",
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
    background: "rgba(0, 0, 0, 0.45)",
  },

  [theme.breakpoints.down("md")]: {
    height: "60vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
}));

const HeroText = styled(Box)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  zIndex: 2,
  padding: "0 24px",
  width: "100%",
}));



// 🌿 CONTENT SECTION
const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#222",
  padding: "90px 10%",
  fontFamily: "'Noto Sans', sans-serif",
  lineHeight: 1.9,
  [theme.breakpoints.down("md")]: {
    padding: "70px 7%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "50px 5%",
  },
}));

const SectionBlock = styled(Box)(({ theme }) => ({
  marginBottom: "60px",
}));


/* For regular section headings (h4 style) */
const SectionHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 800,
  color: "#111",
  marginBottom: "12px",
  fontSize: "2.4rem", // desktop
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    textAlign: "center",
  },
}));

/* For body paragraphs */
const BodyParagraph = styled(Typography)(({ theme }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 400,
  color: "#121212",
  textAlign: "justify",
  marginBottom: "18px",
  lineHeight: 1.9,
  fontSize: "1.35rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
    textAlign: "left",
  },
}));

/* Small heading variant for grid heading alignment (center on small, left on md+) */
const GridHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 800,
  color: "#111",
  marginBottom: "12px",
  fontSize: "2.4rem",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.9rem",
  },
}));

/* Body small variant used for smaller blocks in grids */
const BodySmall = styled(Typography)(({ theme }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 400,
  color: "#121212",
  marginBottom: "12px",
  lineHeight: 1.8,
  fontSize: "1.2rem",
  textAlign: "justify",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.05rem",
  },
}));

/* ---------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------- */
export default function ShortFilm() {
  return (
    <>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {/* ===== HERO SECTION ===== */}
        <HeroSection>
          <HeroText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: "2.8rem",
                  sm: "3.4rem",
                  md: "4rem",
                  lg: "4.6rem",
                  xl: "5rem",
                },
                letterSpacing: "2px",
                textTransform: "uppercase",
                background: "white",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.15,
              }}
            >
              Short Film
            </Typography>
          </HeroText>
        </HeroSection>

        {/* ===== CONTENT SECTION ===== */}
        <ContentSection>
          {/* Intro */}
          <SectionBlock>
            <SectionHeading>Our Journey</SectionHeading>

            <BodyParagraph>
              Netcom Media Works has been started by a group of young and dynamic
              entrepreneurial IT professionals in the year of 2004 with a vision
              to make a mark in Information Technology. We are working with Short
              films, 2D animation, Flash animation, 3D animation and Visual
              advertisements. We are doing animation for short films, episodic
              works for television and web.
            </BodyParagraph>
          </SectionBlock>

          {/* Pre Production */}
          <SectionBlock>
            <SectionHeading>Pre Production</SectionHeading>

            <BodyParagraph>
              Our talented creative directors work hard during the preproduction
              stages. We will fine tune every aspect of preproduction, from script
              to storyboard, to ensure the smoothest transition into production,
              resulting in a perfect film.
            </BodyParagraph>
          </SectionBlock>

          {/* Production */}
          <SectionBlock>
            <SectionHeading>Production</SectionHeading>
            <BodyParagraph>
              Our production team will guarantee the best quality using the latest
              state-of-the-art equipment and can cater to all budgets. We have
              higher-end cameras dependent on budget, and we’ll always make sure
              quality comes first. As you know, equipment doesn’t solely guarantee
              quality but experience also contributes to it — which we have in
              abundance.
            </BodyParagraph>
          </SectionBlock>

          {/* Post Production */}
          <SectionBlock>
            <SectionHeading>Post Production</SectionHeading>
            <BodyParagraph>
              Once all scenes have been filmed, we'll take it to our editing suite
              and begin our intense edit. From rough cut to colour grading we
              thoroughly pay attention to detail to provide a perfect final film.
              Our editors are also experienced with visual effects. From action
              effects to background replacements, we guarantee an audience won't
              know those skyscrapers in the distance aren't real.
            </BodyParagraph>
          </SectionBlock>

          {/* 🎬 Video & Project Section */}
          <SectionBlock>
            <Grid
              container
              spacing={5}
              alignItems="center"
              justifyContent="center"
              wrap="wrap"
            >
              {/* Right side - Text */}
              <Grid item xs={12} md={6}>
                <GridHeading>
                  BISHOP AZARIA Trailer Video
                </GridHeading>

                <BodySmall>
                  <strong>Our Projects:</strong> We have done a project for Indian
                  Missionary Society (IMS).
                </BodySmall>

                <BodyParagraph>
                  BISHOP AZARIA is an Indian Tamil language film. This is a
                  biography of Vedanayagam Samuel Azariah (1874–1945), Bishop of
                  the Anglican Church in India from 1912 until his death in 1945.
                  We have done this film in 2D Animation and distributed the
                  entire story through books.
                </BodyParagraph>
              </Grid>

              {/* (If you had other grid items originally, they remain unchanged.
                  Here user only had the right side text — left side omitted.) */}
            </Grid>
          </SectionBlock>
        </ContentSection>
      </Box>

      <ServiceForm />
    </>
  );
}
