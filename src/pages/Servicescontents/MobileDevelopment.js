// ✅ src/pages/Servicescontents/MobileDevelopment.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ServiceForm from "../../components/ServiceForm";

// 🌆 HERO SECTION
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "72vh",
  width: "100%",
  backgroundImage:
    "url('/assets/services/mobiledevelopment/mobiledevelopmentbg.jpg')",
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
    background: "rgba(0, 0, 0, 0.35)",
  },
  [theme.breakpoints.down("md")]: {
    backgroundAttachment: "scroll",
    height: "75vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    padding: "80px 0 100px",
  },
}));

const HeroText = styled(motion.div)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  padding: "0 20px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 16px",
  },
}));

// 🌿 CONTENT SECTION
const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#000",
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

const SectionBlock = styled(Box)(() => ({
  marginBottom: "60px",
}));

/* ---------------------------------------------------
   ✅ Reusable styled typography components
   (replace subtitle/body inline sx)
--------------------------------------------------- */
const SectionHeading = styled(Typography)(({ theme }) => ({
   fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 800,
  color: "#111",
  textAlign: "left",
  marginBottom: "14px",
  fontSize: "2.4rem", // desktop default
  [theme.breakpoints.down("md")]: {
    fontSize: "2.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.9rem",
    textAlign: "center",
  },
}));

const BodyParagraph = styled(Typography)(({ theme }) => ({
   fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 400,
  color: "#000",
  textAlign: "justify",
  marginBottom: "22px",
  lineHeight: 1.9,
  fontSize: "1.35rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.15rem",
    textAlign: "left",
  },
}));

/* ---------------------------------------------------
   Bullet list components (replace inline list styles)
--------------------------------------------------- */
const ListWrapper = styled(Box)(({ theme }) => ({
  textAlign: "justify",
  marginTop: "25px",
   fontFamily: "'Noto Sans', sans-serif",
}));

const Ul = styled("ul")(({ theme }) => ({
  margin: 0,
  padding: 0,
  listStyle: "none",
}));

const Li = styled("li")(({ theme }) => ({
  display: "flex",
 
  gap: "10px",
  marginBottom: "22px",
  alignItems: "center",
  lineHeight: 1.5,
  fontSize: "1.25rem",
  fontFamily: "'Noto Sans', sans-serif",
  color: "#000",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.05rem",
  },
}));

const BulletDot = styled("span")(({ theme }) => ({
  color: "#111",
  fontSize: "1.6rem",
  lineHeight: 1,
}));

/* ---------------------------------------------------
   Achievements styled components (replace inline sx)
--------------------------------------------------- */
const AchievementsSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #0b0b0b, #1c1c1c, #111)",
  color: "#fff",
  textAlign: "center",
  padding: "90px 5%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: "70px 5%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "50px 4%",
  },
}));

const AchieveTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontFamily: "'Noto Sans', sans-serif",
  textTransform: "uppercase",
  marginBottom: "24px",
  letterSpacing: "1px",
  fontSize: "3.3rem",
  color: "#00FF88",
  textShadow: "0 0 25px rgba(0,255,136,0.4)",
  [theme.breakpoints.down("xl")]: {
    fontSize: "3.3rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.0rem",
  },
}));

const AchieveText = styled(Typography)(({ theme }) => ({
  fontSize: "1.35rem",
   fontFamily: "'Noto Sans', sans-serif",
  color: "#e0e0e0",
  lineHeight: 1.8,
  maxWidth: "100%",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.3rem",
    maxWidth: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.05rem",
  },
}));

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */
export default function MobileDevelopment() {
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
                  xs: "2.2rem",
                  sm: "3rem",
                  md: "3.8rem",
                  lg: "4.6rem",
                  xl: "5rem",
                },
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#ffffff",
                textShadow: "0 0 25px rgba(0,0,0,0.4)",
                lineHeight: 1.15,
              }}
            >
              Mobile Application Development
            </Typography>
          </HeroText>
        </HeroSection>

        {/* ===== CONTENT SECTION ===== */}
        <ContentSection>
          {/* 1️⃣ Intro */}
          <SectionBlock>
            <SectionHeading>Custom Mobile App Development Services</SectionHeading>

            <BodyParagraph>
              Mobile App Development is the process of developing and helping to
              implement apps that run on Android and iOS powered mobile devices,
              and a typical mobile application utilizes a network connection to
              work with remote computing resources.
              <br />
              <br />
              Many of you will think that — “Our business style doesn't need an
              app to sell products to our clients!” And maybe that would have
              been the case in the past. But if you want to prepare for the
              future and start seeing the massive benefits right out the gate,
              you'll definitely need a mobile app for your business development.
            </BodyParagraph>
          </SectionBlock>

          {/* 2️⃣ What does a Mobile App actually do? */}
          <SectionBlock>
            <SectionHeading>What does a Mobile App actually do?</SectionHeading>

            <BodyParagraph>
              Mobile Applications permit users to have functional access to any
              products, information, process, or services that they demand in
              real-time. It enables businesses to send notifications about
              changes in products and services or something new.
            </BodyParagraph>
          </SectionBlock>

          {/* 3️⃣ What you can achieve */}
          <SectionBlock>
            <SectionHeading>What you can achieve by that?</SectionHeading>

            <BodyParagraph>
              Through regular contact with your target clients, you're fostering
              their trust. The more your clients trust you, the more likely
              they'll be to listen to later sales pitches and commit to your
              products and services.
              <br />
              <br />
              Netcom will create for you a highly customized, client-friendly
              mobile application to make all your business operations and
              promotions easier.
            </BodyParagraph>
          </SectionBlock>

          {/* 4️⃣ Developing Strategies */}
          <SectionBlock>
            <SectionHeading>Our Developing Strategies for Brand & Online Presence</SectionHeading>

            <ListWrapper>
              <Ul>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Android Mobile & Tablet Application Development</span>
                </Li>

                <Li>
                  <BulletDot>•</BulletDot>
                  <span>iOS Application Development</span>
                </Li>

                <Li>
                  <BulletDot>•</BulletDot>
                  <span>E-commerce Development</span>
                </Li>
              </Ul>
            </ListWrapper>
          </SectionBlock>
        </ContentSection>

        {/* ===== 🏆 ACHIEVEMENTS SECTION ===== */}
        <AchievementsSection>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "column", lg: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 4, sm: 5, md: 6, lg: 10 },
              width: "100%",
              maxWidth: "1300px",
              mx: "auto",
            }}
          >
            {/* 🏅 Text Block */}
            <Box
              sx={{
                flex: { xs: "1 1 100%", lg: "1 1 45%" },
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <AchieveTitle>Achievements</AchieveTitle>

              <AchieveText>
                Our expertise in mobile application development has empowered numerous
                brands with robust, efficient, and visually stunning apps. Each
                milestone we’ve achieved reflects our dedication to innovation, design,
                and quality.
              </AchieveText>
            </Box>

            {/* 🌄 Image Block */}
            <Box
              sx={{
                flex: { xs: "1 1 100%", lg: "1 1 50%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Desktop Image */}
              <Box
                component="img"
                src="/assets/services/mobiledevelopment/service.svg"
                alt="Achievements Desktop"
                sx={{
                  width: { xs: "100%", sm: "100%", md: "90%", lg: "100%", xl: "110%" },
                  maxWidth: "900px",
                  borderRadius: "16px",
                  display: { xs: "none", md: "none", lg: "block" },
                  boxShadow: "0 0 50px rgba(0, 255, 100, 0.3)",
                }}
              />

              {/* Mobile Image */}
              <Box
                component="img"
                src="/assets/services/mobiledevelopment/serviceMob.jpg"
                alt="Achievements Mobile"
                sx={{
                  width: "100%",
                  maxWidth: "650px",
                  borderRadius: "12px",
                  display: { xs: "block", md: "block", lg: "none" },
                  boxShadow: "0 0 30px rgba(0, 255, 100, 0.25)",
                }}
              />
            </Box>
          </Box>
        </AchievementsSection>
      </Box>

      {/* ✅ Reusable Service Form */}
      <ServiceForm />
    </>
  );
}
