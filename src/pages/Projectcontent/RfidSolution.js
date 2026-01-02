import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";

const bgImage =
  process.env.PUBLIC_URL + "/assets/project/rfidsolution/rfidsolution2.jpg";

const ImageBanner = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  width: "100%",
  height: "72vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#fff",
  fontWeight: 800,
  fontSize: "3.5rem",
  letterSpacing: "1px",
  textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
  [theme.breakpoints.down("xl")]: {
    fontSize: "3.2rem",
    height: "95vh",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.8rem",
    height: "90vh",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2.3rem",
    height: "70vh",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.9rem",
    height: "60vh",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.6rem",
    height: "55vh",
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  fontFamily: "'Noto Sans', sans-serif",
  color: "#222",
  padding: "90px 10%",
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
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const Point = styled(Typography)(({ theme }) => ({
  position: "relative",
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "1.25rem",
  lineHeight: 2,
  color: "#2b2b2b",
  marginBottom: "14px",
  paddingLeft: "28px",
  display: "flex",
  alignItems: "flex-start",
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

const SectionBlock = styled(Box)(({ theme }) => ({
  marginBottom: "50px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "30px",
  },
}));

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const RfidSolution = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <ImageBanner>RFID SOLUTION</ImageBanner>

      <ContentSection>
        <Container maxWidth="lg">
          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Overview</SectionTitle>
            <Point>
              Radio-frequency identification (**RFID**) uses electromagnetic
              fields to automatically identify and track tags attached to
              objects. These tags contain electronically stored information that
              can be read without direct contact.
            </Point>
            <Point>
              An RFID system consists of a tiny radio transponder, receiver, and
              transmitter — enabling fast and accurate tracking for libraries,
              animal research, and retail systems.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Library RFID Implementation</SectionTitle>
            <Point>
              Netcom has executed RFID-based E-Library Projects across Madurai,
              Trichy, and Coimbatore districts — covering tagging, delivery,
              installation, and integration.
            </Point>
            <Point>Completed tagging for over 4,50,000 books.</Point>
            <Point>
              Handheld Readers help check stock and locate missing books easily.
            </Point>
            <Point>
              Tagging Station applications update book data to RFID databases
              via KOHA Server for quick retrieval.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Circulation & Access Systems</SectionTitle>
            <Point>
              The Circulation Station enables issue, return, and renewal of
              books seamlessly.
            </Point>
            <Point>
              OPAC (Online Public Access Catalog) kiosks allow users to search
              and locate books quickly within the library.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>RFID Server Systems</SectionTitle>
            <Point>
              Track Library Server manages user data, tagging, stock details,
              and backup.
            </Point>
            <Point>
              Multi-socket servers connect all modules and databases for unified
              control.
            </Point>
            <Point>
              Anti-Theft Gates monitor entry/exit — preventing unauthorized book
              removals with audio and light alerts.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Animal Migration Tracking</SectionTitle>
            <Point>
              RFID technology is used to track birds and wildlife without
              recapture, enabling long-term behavioral studies.
            </Point>
            <Point>
              RFID ear tags aid in livestock identification and ensure food
              traceability and animal safety.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>RFID in Shopping Malls</SectionTitle>
            <Point>
              RFID tags automate billing and inventory tracking — reducing time
              at counters and improving customer satisfaction.
            </Point>
            <Point>
              Products are scanned wirelessly, eliminating the need for
              individual barcode scans.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Software Development</SectionTitle>
            <Point>
              Netcom develops software solutions for automation, data
              management, and process optimization across multiple platforms.
            </Point>
            <Point>
              We specialize in scalable web, desktop, and mobile applications
              tailored to client needs.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Project Methodologies</SectionTitle>
            <Point>
              We follow **agile workflows** with weekly sprints and transparent
              client communication to ensure on-time, quality delivery.
            </Point>
            <Point>
              Dedicated QA teams ensure that deliverables meet client
              expectations through independent testing and validation.
            </Point>
          </SectionBlock>
        </Container>
      </ContentSection>
    </Box>
  );
};

export default RfidSolution;
