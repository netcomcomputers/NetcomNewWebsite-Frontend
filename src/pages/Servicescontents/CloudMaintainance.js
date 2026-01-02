// ✅ src/pages/Servicescontents/CloudMaintainance.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ServiceForm from "../../components/ServiceForm";

// ---------------------------------------------------------
// ⭐ REUSABLE COMPONENTS
// ---------------------------------------------------------

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 800,
  color: "#111",
  marginBottom: "20px",
  fontSize: "2.4rem",
  [theme.breakpoints.down("md")]: { fontSize: "2.1rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.9rem" },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 700,
  color: "#112",
  marginBottom: "15px",
  fontSize: "2rem",
  [theme.breakpoints.down("md")]: { fontSize: "1.8rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.5rem" },
}));

const BodyText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  textAlign: "justify",
  lineHeight: 1.9,
  marginBottom: "20px",
  fontSize: "1.35rem",
  [theme.breakpoints.down("md")]: { fontSize: "1.25rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.1rem" },
}));

// ---------------------------------------------------------
// ⭐ HERO SECTION
// ---------------------------------------------------------

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "72vh",
  width: "100%",
  backgroundImage:
    "url('/assets/services/cloudmaintain/cloudmaintainbg.jpg')",
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
  [theme.breakpoints.down("md")]: {
    height: "75vh",
    backgroundAttachment: "scroll",
  },
  [theme.breakpoints.down("sm")]: {
    height: "60vh",
  },
}));

const HeroText = styled(motion.div)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  padding: "0 20px",
}));

// ---------------------------------------------------------
// ⭐ CONTENT SECTION
// ---------------------------------------------------------

const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#000",
  padding: "90px 10%",
  lineHeight: 1.9,
  [theme.breakpoints.down("md")]: { padding: "70px 7%" },
  [theme.breakpoints.down("sm")]: { padding: "50px 5%" },
}));

const SectionBlock = styled(Box)(() => ({
  marginBottom: "70px",
}));

// ---------------------------------------------------------
// ⭐ MAIN COMPONENT
// ---------------------------------------------------------

export default function CloudMaintainance() {
  return (
    <>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {/* HERO */}
        <HeroSection>
          <HeroText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              style={{
                fontWeight: 900,
                fontSize: "clamp(2.3rem, 5vw, 5.3rem)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#ffffff",
                textShadow: "0 0 25px rgba(0,0,0,0.4)",
                lineHeight: 1.1,
              }}
            >
              Cloud Maintenance
            </Typography>
          </HeroText>
        </HeroSection>

        {/* CONTENT */}
        <ContentSection>

          {/* 1️⃣ Our Cloud Maintenance Services */}
          <SectionBlock>
            <SectionTitle>Our Cloud Maintenance Services</SectionTitle>

            <BodyText>
              Our Cloud Maintenance experts help you manage your cloud environment effectively
              by continuously monitoring uptime, usage, and costs. We ensure seamless scalability
              and handle security updates, patches, and backups automatically.
            </BodyText>
          </SectionBlock>

          {/* 2️⃣ Performance Monitoring */}
          <SectionBlock>
            <SubTitle>Performance Monitoring</SubTitle>

            <BodyText>
              We use intelligent monitoring tools to track the performance and availability of
              your cloud servers. This ensures early detection of potential issues and helps
              prevent downtime.
            </BodyText>
          </SectionBlock>

          {/* 3️⃣ Security & Compliance */}
          <SectionBlock>
            <SubTitle>Security & Compliance</SubTitle>

            <BodyText>
              Our maintenance services include applying the latest security patches, monitoring for
              threats, and ensuring compliance with data protection regulations like GDPR and
              ISO 27001.
            </BodyText>
          </SectionBlock>

          {/* 4️⃣ Backup & Disaster Recovery */}
          <SectionBlock>
            <SubTitle>Backup & Disaster Recovery</SubTitle>

            <BodyText>
              We implement automated backup strategies and disaster recovery solutions to protect
              your data against loss or corruption.
            </BodyText>
          </SectionBlock>

          {/* 5️⃣ Cost Optimization */}
          <SectionBlock>
            <SubTitle>Cost Optimization</SubTitle>

            <BodyText>
              Cloud costs can spiral quickly — our optimization experts analyze usage trends and
              help you choose the right pricing plans, saving up to 30% of your total cloud spend.
            </BodyText>
          </SectionBlock>

          {/* 6️⃣ Why Choose Netcom */}
          <SectionBlock>
            <SectionTitle>Why Choose Netcom for Cloud Maintenance?</SectionTitle>

            <BodyText>
              With years of expertise in managing cloud infrastructures, Netcom offers 24/7
              monitoring and a proactive approach that ensures your business operations never face
              downtime. We handle everything from resource scaling to real-time incident management.
            </BodyText>

            <BodyText>
              Our mission is simple — keep your cloud stable, fast, and secure, while you focus on
              growing your business.
            </BodyText>
          </SectionBlock>

        </ContentSection>
      </Box>

      {/* FORM */}
      <ServiceForm />
    </>
  );
}
