import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const bgImage =
  process.env.PUBLIC_URL + "/assets/project/callsoft/callsoft.jpg";

const ImageBanner = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  width: "100%",
  height: "72vh",
  borderRadius: "0 0 30px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#fff",
  fontWeight: 800,
  fontSize: "3.5rem",
  letterSpacing: "1px",
  textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
  [theme.breakpoints.down("xl")]: { fontSize: "3.2rem", height: "95vh" },
  [theme.breakpoints.down("lg")]: { fontSize: "2.8rem", height: "90vh" },
  [theme.breakpoints.down("md")]: { fontSize: "2.3rem", height: "70vh" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.9rem", height: "60vh" },
  [theme.breakpoints.down("xs")]: { fontSize: "1.6rem", height: "55vh" },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#222",
  padding: "90px 10%",
  fontFamily: "'Noto Sans', sans-serif",
  lineHeight: 2.1,
  [theme.breakpoints.down("md")]: { padding: "70px 7%" },
  [theme.breakpoints.down("sm")]: { padding: "50px 5%" },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontFamily: "'Noto Sans', sans-serif",
  color: "#111",
  fontSize: "2rem",
  marginTop: "40px",
  marginBottom: "25px",
  [theme.breakpoints.down("md")]: { fontSize: "1.75rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.5rem" },
}));

const Point = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  width: "100%",
  fontFamily: "'Noto Sans', sans-serif",
  gap: "16px",
  fontSize: "1.28rem",
  lineHeight: 1.9,
  color: "#222",
  marginBottom: "18px",
  wordBreak: "break-word",

  "&::before": {
    content: '"•"',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.9rem",
    lineHeight: 1,
    height: "100%",
    marginTop: "0px",
    paddingTop: "4px",
    flexShrink: 0,
    color: "#000",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "1.32rem",
    gap: "18px",
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "1.26rem",
    gap: "16px",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1.18rem",
    gap: "14px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "1.05rem",
    gap: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
    gap: "10px",
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

export default function CallSoft() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <ImageBanner>CALLSOFT - Computer Aided Language Learning</ImageBanner>

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
              Computer Based Tutorial is a new medium of imparting education and
              not just an interactive CD ROM equivalent to a book with a
              difference to view on a computer screen. The CBT course material
              should be designed keeping in mind one concept – the package
              should be useful to the end user.
            </Point>
            <Point>
              The success of a CBT depends on the content of the CBT and how the
              subject is conveyed. We have also developed CBT's for school
              students for all subjects.
            </Point>
            <Point>
              CALLSOFT is an English Language Learning Software specially
              designed for the development of English Language Skills in
              students which has provision for interaction between students and
              teachers.
            </Point>

            <SectionTitle>Features</SectionTitle>
            <Point>
              We have strong foothold in a variety of fields like computer
              education, computer-aided education, software solutions, web
              solutions, cartoon animations, etc.
            </Point>
            <Point>
              We are also doing data entry and conversion works and provide
              sales and servicing of computers and computer peripherals.
            </Point>
            <Point>
              The teacher can control the nodal computers of the students
              through his/her computer and correct them then and there during
              the session.
            </Point>
            <Point>
              The most logical way to set up CALLSOFT is for each classroom or
              room to have its own teacher channel, as well as just one teacher
              and a computer.
            </Point>
            <Point>
              This setup enables all the computers in the same classroom to
              interact with one another and one teacher to control the entire
              room.
            </Point>
            <Point>
              The teacher can monitor students as they join or leave the class.
            </Point>
            <Point>
              This makes it easy to see who is absent or who has newly joined
              the class.
            </Point>

            <SectionTitle>Call Lab Projects</SectionTitle>
            <Point>
              CALL LAB PROJECT - ELCOT 350 SCHOOLS IN TAMILNADU: We have
              implemented CALL LAB Project with ELCOT for 350 Schools in
              Tamilnadu. CALLSOFT works by enabling a teacher to control all
              student computers within a computer-based classroom.
            </Point>
            <Point>
              The coordination of ELCOT in 1000 Schools in Thoothukudi,
              Tirunelveli, Kanyakumari, Madurai, Virudhunagar, Sivagangai,
              Ramanathapuram, Dindugal, Theni, Thirupur, Namakkal, Karur,
              Coimbatore, Erode, Salem, Dharmpuri, Krishnagiri, Thiruvannamalai,
              Vellore, Cudalore and Villupuram Districts in Tamil Nadu.
            </Point>
          </motion.div>
        </Container>
      </ContentSection>
    </Box>
  );
}
