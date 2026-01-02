// ✅ File: EmisSoftwareSolution.js
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ServiceForm from "../../components/ServiceForm";

// 🌆 FIXED HERO SECTION
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "72vh",
  width: "100%",
  backgroundImage:
    "url('/assets/services/graphicdesign/graphicdesignbg.jpg')",
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
  [theme.breakpoints.down("sm")]: {
    padding: "0 32px",
  },
}));

// 🌿 CONTENT SECTION
const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#111",
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

const SubHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontFamily: "'Noto Sans', sans-serif",
  color: "#111",
  fontSize: "34px",
  marginBottom: "24px",
  textAlign: "left",

  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    textAlign: "center",
  },
}));


const Text = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  lineHeight: 2,
  fontFamily: "'Noto Sans', sans-serif",
  color: "#121212",
  marginBottom: "20px",
  textAlign: "justify",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

// 🟢 Bullet List (Fixed Alignment)
const BulletList = styled(Box)(({ theme }) => ({
  marginTop: "30px",
  display: "grid",
  gridTemplateColumns: "1fr",
  rowGap: "14px",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr", // 2 columns for medium & above
    columnGap: "20px",
  },
}));

const BulletItem = styled(Typography)(({ theme }) => ({
  position: "relative",
  fontSize: "1.2rem",
  color: "#2b2b2b",
  fontFamily: "'Noto Sans', sans-serif",
  paddingLeft: "28px",
  fontWeight: 500,
  lineHeight: 1.6,

  "&::before": {
    content: '"•"',
    position: "absolute",
    left: "0px",
    top: "2px",
    color: "#111",
    fontWeight: 900,
    fontSize: "1.6rem",
    lineHeight: 1,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));


export default function EmisSoftwareSolution() {
  return (
    <>
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* ===== FIXED IMAGE HERO SECTION ===== */}
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
                xs: "2.2rem",
                sm: "2.8rem",
                md: "3.6rem",
                lg: "4rem",
              },
              textTransform: "uppercase",
              color: "#fff",
              letterSpacing: "1px",
              lineHeight: 1.2,
            }}
          >
            GRAPHIC DESIGN
          </Typography>
        </HeroText>
      </HeroSection>

      {/* ===== CONTENT SECTION ===== */}
      <ContentSection>
        <Container>
          <SubHeading>Design Makes Greater</SubHeading>

          <Text>
            Netcom Computers is a professional 2D and 3D animation designing
            service based in Tirunelveli, India. A professionally designed
            animation or graphic can make an enormous difference to your
            business. We specialize in creative design solutions that elevate
            your brand identity and communication.
          </Text>

          <Text>
            Our expert team delivers high-quality visual content — from digital
            graphics to printed marketing materials — ensuring your message
            stands out with clarity and impact.
          </Text>

          <SubHeading>Our Graphic Design Services Include</SubHeading>

          <BulletList>
            <BulletItem>2D and 3D Animations</BulletItem>
            <BulletItem>Brochure Design</BulletItem>
            <BulletItem>Flyer Design</BulletItem>
            <BulletItem>Business Card Design</BulletItem>
            <BulletItem>Social Media Posters</BulletItem>
            <BulletItem>Promotional Posters</BulletItem>
            <BulletItem>Menu Card Designs</BulletItem>
          </BulletList>
        </Container>
      </ContentSection>
    </Box>
    <ServiceForm/>
    </>
  );
}
