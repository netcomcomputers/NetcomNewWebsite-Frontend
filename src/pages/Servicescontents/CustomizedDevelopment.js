// ✅ src/pages/Servicescontents/CustomizedDevelopment.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ServiceForm from "../../components/ServiceForm";




// 🌆 FIXED HERO SECTION
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "72vh",
  width: "100%",
  backgroundImage:
    "url('/assets/services/customizeddevelopment/customizeddevbg1.jpg')",
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
  marginBottom: "70px",
}));

// ---------------------------------------------------------
// ✅ Reusable Typography components (no inline sx for subtitles/body)
// ---------------------------------------------------------
const SectionHeading = styled(Typography)(({ theme }) => ({
  // replaces variant="h4" blocks
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 800,
  color: "#111",
  marginBottom: "16px",
  // desktop default
  fontSize: "2.4rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.9rem",
    textAlign: "center",
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  // replaces variant="h5" blocks
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 700,
  color: "#111",
  marginBottom: "14px",
  fontSize: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    textAlign: "center",
  },
}));

const BodyParagraph = styled(Typography)(({ theme }) => ({
  // replaces variant="body1" blocks
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 400,
  color: "#000",
  textAlign: "justify",
  marginBottom: "18px",
  lineHeight: 1.9,
  fontSize: "1.35rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.15rem",
    // On very small screens keep left align for paragraphs with <strong> (looks better)
    textAlign: "left",
  },
}));

// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
export default function CustomizedDevelopment() {
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
                fontWeight: 700,
                fontSize: {
                  xs: "2.3rem",
                  sm: "3.2rem",
                  md: "4rem",
                  lg: "4.8rem",
                  xl: "5.3rem",
                },
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#ffffff",
                textShadow: "0 0 25px rgba(0,0,0,0.4)",
                lineHeight: 1.1,
              }}
            >
              Custom Software Development
            </Typography>
          </HeroText>
        </HeroSection>

        {/* ===== CONTENT SECTION ===== */}
        <ContentSection>
          {/* 🧩 Intro */}
          <SectionBlock>
            <SectionHeading>Tailored Software Development Solutions</SectionHeading>

            <BodyParagraph mb={4}>
              Custom software development is the process of designing, creating,
              deploying, and maintaining software for a specific set of users,
              functions, or organizations.
            </BodyParagraph>

            <BodyParagraph>
              Our skilled specialists know the game of business and deliver
              successful solutions that accord with all the specified
              requirements while invariably staying within time and budget
              limits. Along with full-cycle custom software development, we
              provide software maintenance and platform-based customization.
            </BodyParagraph>

            <BodyParagraph>
              In contrast to the conventional method of using Commercial
              Off-The-Shelf Software (COTS), Custom Software development aims at
              a narrowly defined set of requirements. Our team of excellent and
              proficient Software Developers will customize, create and test
              your software from start to finish.
            </BodyParagraph>
          </SectionBlock>

          {/* 🧩 Why Custom Software */}
          <SectionBlock>
            <SectionHeading>Why Custom Software and not COTS?</SectionHeading>

            <BodyParagraph>
              Custom Software is specifically designed for a company or
              business, according to its way of doing work. While off-the-shelf
              software is readily available and not customizable, it often falls
              short of meeting specific needs since it includes many unused
              features.
            </BodyParagraph>

            <BodyParagraph>
              That’s why Custom Software Development Services are essential —
              they deliver tailor-made solutions that meet exact business
              requirements. In short, custom software adapts to your business
              needs, while off-the-shelf software forces your business to adapt
              to its limitations.
            </BodyParagraph>
          </SectionBlock>

          {/* 🧩 Custom Software We Deliver */}
          <SectionBlock>
            <SectionHeading>Custom Software We Deliver</SectionHeading>

            <BodyParagraph>
              <strong style={{ color: "#222" }}>
                1. Corporate & Inter-Organizational Software Systems
              </strong>
              <br />
              <br />
              We build software that automates enterprise-wide processes and
              covers interdepartmental information flows. It may also include
              transactions with customers, vendors, and partners. For instance,
              in educational institutions, a generic software called EMIS
              (Educational Management Information System) is used to manage
              their operations efficiently.
            </BodyParagraph>

            <BodyParagraph>
              <strong style={{ color: "#222" }}>2. Departmental Software</strong>
              <br />
              <br />
              We build software with specialized features to cover the needs of
              a particular department within an organization. Our developers can
              build any customized solution to simplify daily operations and
              improve departmental efficiency.
            </BodyParagraph>
          </SectionBlock>
        </ContentSection>
      </Box>

      {/* ✅ Reusable Form */}
      <ServiceForm />
    </>
  );
}
