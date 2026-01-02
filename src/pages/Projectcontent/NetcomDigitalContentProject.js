import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const bgImage =
  process.env.PUBLIC_URL +
  "/assets/project/netcomdigitalcontent/netcomdigitalcontent1.jpg";

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "72vh",
  width: "100%",
  backgroundImage: `url(${bgImage})`,
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
}));

const HeroText = styled(motion.div)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  zIndex: 2,
  padding: "0 24px",
  width: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    padding: "0 32px",
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
  fontFamily: "'Noto Sans', sans-serif",
  color: "#111",
  fontSize: "2rem",
  marginTop: "40px",
  marginBottom: "25px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const SectionTitle1 = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontFamily: "'Noto Sans', sans-serif",
  color: "#111",
  fontSize: "1.6rem",
  marginTop: "40px",
  marginBottom: "25px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
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

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function NetcomDigitalContentProject() {
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
            NETCOM DIGITAL CONTENT
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
            <SectionTitle>Overview</SectionTitle>
            <Point>
              Netcom Digital Content was established in 2004 by a group of young
              and innovative IT professionals with a clear vision to leave a
              lasting impact on the digital world. We specialize in 2D and 3D
              animation, Flash animation, and visually engaging digital
              advertisements, delivering high-quality content that connects with
              audiences worldwide.
            </Point>
            <Point>
              We are doing animation for short films, episodic works for
              television and web.
            </Point>
            <Point>
              Our Development Division consists of established writers,
              illustrators, and designers who generate ideas and concepts for
              commercially successful and market-driven products.
            </Point>
            <Point>
              Netcom offers end-to-end animation services for production
              including storyboard, layout, background, animation in-betweening,
              clean-up, and compositing.
            </Point>

            <SectionTitle>3-D Production</SectionTitle>
            <Point>
              The 3-D Animation Production is the set of processes that convert
              an idea into a finished product, moving through each stage in a
              pre-determined order for smooth collaboration.
            </Point>

            <SectionTitle>Pre-Production</SectionTitle>
            <Point>
              The pre-production process includes concept creation, storyboards,
              rough script reel, and character creation before moving into
              production.
            </Point>

            <SectionTitle1>Story :</SectionTitle1>
            <Point>
              Story heads turn the writer’s words and director’s vision into a
              visual narrative through a series of panels planning action,
              staging, and continuity.
            </Point>

            <SectionTitle1>Animatic :</SectionTitle1>
            <Point>
              An animatic is an animated storyboard that stitches images and
              sound to visualize how the final animation or film will look and
              feel.
            </Point>

            <SectionTitle1>Storyboard :</SectionTitle1>
            <Point>
              A storyboard is a sequence of drawings that outline the story,
              explaining processes and showing time progression.
            </Point>

            <SectionTitle1>Design :</SectionTitle1>
            <Point>
              Animation design involves creating special effects and visuals for
              games, films, and media using specialized software and coding.
            </Point>

            <SectionTitle>Production</SectionTitle>
            <Point>
              Production involves layout design, modeling, texturing, rigging,
              animation, VFX, lighting, and rendering.
            </Point>

            <SectionTitle>Post-Production</SectionTitle>
            <Point>
              Post-production covers compositing, 2D VFX/Motion Graphics, color
              correction, editing, and final polish.
            </Point>

            <SectionTitle>Animation Experience</SectionTitle>
            <Point>
              <b>2D Animation Experience:</b> ‘Money Tree’ is a 2D short film
              for RBI on Financial Inclusion, implemented across 16 states and
              3000+ schools, benefiting 1.5 lakh students (2011–2013).
            </Point>
            <Point>
              <b>3D Animation Experience:</b> Created 3D episodes based on Bible
              stories and feature films like “Azariah Enum Vidha,” depicting
              great Christian leaders and their life missions.
            </Point>
          </motion.div>
        </Container>
      </ContentSection>
    </Box>
  );
}
