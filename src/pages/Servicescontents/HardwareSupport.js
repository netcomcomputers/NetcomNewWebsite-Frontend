// ✅ src/pages/Servicescontents/HardwareSupport.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ServiceForm from "../../components/ServiceForm";

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "72vh",
  width: "100%",
  backgroundImage:
    "url('/assets/services/hardwaresupport/hardwaresupportbg.jpg')",
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
  marginBottom: "60px",
}));

/* ---------------------------------------------------
   ✅ Reusable styled typography components
   (replacing subtitle/body inline sx)
--------------------------------------------------- */
const SectionHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 800,
  color: "#111",
  textAlign: "left",
  marginBottom: "14px",
  fontSize: "2.4rem", // desktop default (matches original)
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
  marginTop: "10px",
}));

const Ul = styled("ul")(({ theme }) => ({
  margin: 0,
  fontFamily: "'Noto Sans', sans-serif",
  padding: 0,
  listStyle: "none",
}));

const Li = styled("li")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  marginBottom: "22px",
  alignItems: "center",
  lineHeight: 1.5,
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "1.25rem",
  color: "#000",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.05rem",
  },
}));

const BulletDot = styled("span")(({ theme }) => ({
  color: "#000",
  fontSize: "1.6rem",
  lineHeight: 1,
}));

// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
export default function HardwareSupport() {
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
    xs: "1.9rem",
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

  // ✅ XS PERFECT FIX (no overflow, no ugly split)
textAlign: { xs: "center", sm: "center" },
width: { xs: "100%", sm: "auto" },
maxWidth: { xs: "100%", sm: "100%" },
margin: { xs: "0 auto", sm: 0 },
px: { xs: 2, sm: 0 },

wordBreak: { xs: "keep-all", sm: "keep-all" },
overflowWrap: { xs: "normal", sm: "anywhere" },
whiteSpace: { xs: "pre-line", sm: "nowrap" },

}}


            >
              Hardware Support <br />
              & MAINTENANCE
            </Typography>
          </HeroText>
        </HeroSection>

        {/* ===== CONTENT SECTION ===== */}
        <ContentSection>
          {/* 1️⃣ Intro */}
          <SectionBlock>
            <SectionHeading>
              Comprehensive Hardware Support & Maintenance Services
            </SectionHeading>

            <BodyParagraph>
              Hardware Support & Maintenance are preventive and remedial
              services that physically repair or optimize hardware, including
              contract maintenance and per-incident repair. Hardware maintenance
              deals with repairing and replacing broken and failing computer
              hardware.
              <br />
              <br />
              Hardware support also includes online and technical
              troubleshooting and assistance for setup, and all fee-based
              hardware warranty upgrades.
              <br />
              <br />
              Sales of all parts are also included, exclusive of parts bundled
              with maintenance contracts. This segment includes only external
              customer spending on these services.
            </BodyParagraph>
          </SectionBlock>

          {/* 2️⃣ Features Section */}
          <SectionBlock>
            <SectionHeading>
              Features of Netcom Hardware Maintenance Services:
            </SectionHeading>

            <ListWrapper>
              <Ul>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Extend the life of Hardware.</span>
                </Li>

                <Li>
                  <BulletDot>•</BulletDot>
                  <span>
                    Breakdown calls to be resolved in 48 hours or as per
                    adherence to SLA signed.
                  </span>
                </Li>

                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Single Point Help Desk – Call Center Facility.</span>
                </Li>

                <Li>
                  <BulletDot>•</BulletDot>
                  <span>
                    Availability of Call Center Personnel & Technical Support
                    Service Engineer.
                  </span>
                </Li>

                <Li>
                  <BulletDot>•</BulletDot>
                  <span>
                    Availability of adequate spare parts in divisional level
                    offices.
                  </span>
                </Li>

                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Generation of Weekly & Monthly MIS Reports.</span>
                </Li>

                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Tracking of Service Calls.</span>
                </Li>

                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Fully automated maintenance experience.</span>
                </Li>

                <Li>
                  <BulletDot>•</BulletDot>
                  <span>
                    Repair/Replacement Services could be on site at client’s
                    place or at our centralized repair depot by our large pool
                    of qualified engineers.
                  </span>
                </Li>

                <Li>
                  <BulletDot>•</BulletDot>
                  <span>
                    Single-source, customizable hardware maintenance with full
                    accountability — talk to us for a solution tailored to your
                    business needs.
                  </span>
                </Li>
              </Ul>
            </ListWrapper>
          </SectionBlock>

          {/* 3️⃣ Services Section */}
          <SectionBlock>
            <SectionHeading>
              Our Hardware Maintenance Services include Maintenance for Hardware
              Solutions
            </SectionHeading>

            <BodyParagraph>
              We offer preventive or remedial services to physically repair
              your hardware, as well as troubleshooting support and assistance,
              either online or via phone, to ensure you always have access to
              help.
              <br />
              <br />
              Both are offered on either a contract or per-incident basis, so
              your system will always be up and running.
            </BodyParagraph>
          </SectionBlock>
        </ContentSection>
      </Box>

      {/* ✅ Reusable Service Form */}
      <ServiceForm />
    </>
  );
}
