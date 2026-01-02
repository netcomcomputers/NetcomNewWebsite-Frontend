import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const bgImage = process.env.PUBLIC_URL + "/assets/project/kiosk/kiosk.jpg";

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
  fontWeight: 900,
  fontSize: "3.9rem",
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

const SectionBlock = styled(motion.div)(({ theme }) => ({
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

const KioskProject = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <ImageBanner>KIOSK</ImageBanner>

      <ContentSection>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.15 }}
          >
            <SectionBlock variants={fadeVariant}>
              <SectionTitle>Overview</SectionTitle>
              <Point>
                A kiosk is an interactive system designed for public use that
                delivers information or enables transactions. Enterprises deploy
                kiosks to increase customer loyalty, strengthen their brand, and
                reduce operational costs.
              </Point>
              <Point>
                A kiosk includes a computer and a display screen that allows
                customer input via a touch screen or keyboard, running specific
                purpose-built applications.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>Purpose of Kiosk</SectionTitle>
              <Point>
                A kiosk is a small, stand-alone booth typically placed in
                high-traffic areas for business purposes. It provides
                information and applications on education, commerce,
                entertainment, and more.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>Kiosk Project</SectionTitle>
              <Point>
                The software developed for TMB was created using FLASH and
                allows easy upload/download of online contents. NETCOM executed
                and installed 82 kiosks for Tamil Nadu Mercantile Bank across
                multiple states in India.
              </Point>
              <Point>
                These kiosks feature touch screens that provide banking details,
                transactions, and product updates to customers.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>KIOSK in Health Care</SectionTitle>
              <Point>
                Netcom Health Care Kiosk helps with check-ins, registration,
                insurance confirmation, payment of bills, and patient queuing.
                Public Health Centres use kiosks for wayfinding and patient
                services.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>KIOSK in Travel Desk</SectionTitle>
              <Point>
                Netcom Travel Desk Kiosks are used for ticketing, viewing
                timetables, printing tickets, scanning passes, and giving travel
                updates. They simplify passenger interactions and improve
                service accessibility.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>KIOSK at Airports</SectionTitle>
              <Point>
                Netcom kiosks assist with flight check-ins, luggage tagging,
                wayfinding, and communication of gate changes — enabling faster
                passenger service and reduced queues.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>KIOSK in Tourism Department</SectionTitle>
              <Point>
                Netcom tourism kiosks offer visitors details about hotels,
                restaurants, attractions, and maps, enhancing their travel
                experience.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>KIOSK in Agriculture</SectionTitle>
              <Point>
                Netcom agri-kiosks empower farmers by providing soil testing,
                seed selection, pesticide info, and renting agricultural
                equipment. They help modernize rural agriculture.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>
                Reasons to Consider a Kiosk for Your Bank
              </SectionTitle>
              <Point>
                Migrate customers from teller-based transactions to online
                banking.
              </Point>
              <Point>
                Enhance customer satisfaction through web-based branch services.
              </Point>
              <Point>
                Increase revenue with cross-sell and up-sell opportunities.
              </Point>
              <Point>
                Educate and onboard new customers about products and services.
              </Point>
              <Point>Provide 24/7 self-service in centralized locations.</Point>
              <Point>
                Collect vital data to understand customer preferences.
              </Point>
              <Point>
                Bridge language barriers and offer multi-language support.
              </Point>
            </SectionBlock>

            <SectionBlock variants={fadeVariant}>
              <SectionTitle>Common Reasons for Using Kiosks</SectionTitle>
              <Point>
                Self-service kiosks engage customers on their own terms and
                reduce staff workload.
              </Point>
              <Point>
                They lower operational costs while increasing accessibility.
              </Point>
              <Point>
                Kiosks provide detailed information and allow quick transactions
                in public spaces.
              </Point>
            </SectionBlock>
          </motion.div>
        </Container>
      </ContentSection>
    </Box>
  );
};

export default KioskProject;
