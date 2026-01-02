import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";

const bgImage = process.env.PUBLIC_URL + "/assets/project/ict/ict1.jpg";

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

  fontSize: "1.25rem",
  lineHeight: 2,
  color: "#2b2b2b",
  marginBottom: "14px",
  paddingLeft: "28px",
  fontFamily: "'Noto Sans', sans-serif",
  maxWidth: "100%",
  margin: "0 0 14px 0",
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

const Ict = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <ImageBanner>ICT / Hi-Tech Lab</ImageBanner>

      <ContentSection>
        <Container maxWidth="lg">
          <SectionBlock variants={fadeVariant}>
            <SectionTitle>ICT Projects</SectionTitle>
            <Point>
              Implementing & Delivering IT Infrastructure For Computer
              Education. Experience in Facility Management. Netcom has supplied
              and maintained around 1500 systems and peripherals in 300
              government schools spread across Tamil Nadu. Netcom maintains an
              uptime of 97% for the entire IT infrastructure supplied in these
              schools for computer education.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Hardware Maintenance Management</SectionTitle>
            <Point>
              Server should act as a Teacher console. This displays the list of
              students in the teacher console. From this, the teacher can select
              the student to start or stop the class.
            </Point>
            <Point>
              Real-time screen and audio broadcast from teacher console to
              student.
            </Point>
            <Point>
              Viewing and absorbing the screens of students from teacher
              console.
            </Point>
            <Point>
              Recording and storing broadcasts for future use; this option is
              used to record files and broadcast them to other students.
            </Point>
            <Point>
              Sharing files among systems; this module is used to share files to
              other systems or students.
            </Point>
            <Point>
              Controls like mute audio, lock the keyboard of particular student
              console; teachers can easily control student screens.
            </Point>
            <Point>
              Providing some sample call lessons for student’s screen.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Using the Teacher Computer or Server</SectionTitle>
            <Point>
              After installing the teacher or server setup in the computer, the
              server or teacher has many features to access. They can control
              the student’s or client machines effectively.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Using the Student’s Computer or Client</SectionTitle>
            <Point>
              Language Lab runs in the background on student computers. All of
              its functionality is controlled at the teacher computer, allowing
              full control over how it is used.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Examine, Interview & Test Methods</SectionTitle>
            <Point>
              The Examine method involves reviewing or analyzing assessment
              objects. The Interview method facilitates assessor understanding
              through discussions. The Test method exercises one or more
              assessment activities under specified conditions to compare actual
              and expected behavior.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Assessment Purpose</SectionTitle>
            <Point>
              Netcom Assessment gathers, analyses, and interprets evidence to
              improve student learning. Effective assessment practices include:
            </Point>
            <Point>
              Assessment for learning: Teachers use inferences about student
              progress to inform teaching.
            </Point>
            <Point>
              Assessment as learning: Students reflect on and monitor progress
              to inform learning goals.
            </Point>
            <Point>
              Assessment of learning: Teachers use evidence to judge student
              achievement.
            </Point>
          </SectionBlock>

          <SectionBlock variants={fadeVariant}>
            <SectionTitle>Features</SectionTitle>
            <Point>
              Teacher console lists students; teacher can start or stop classes.
            </Point>
            <Point>
              Real-time screen & audio broadcast from teacher to students.
            </Point>
            <Point>Recording and storing sessions for future use.</Point>
            <Point>Sharing files among systems or students.</Point>
            <Point>
              Controls to mute, lock keyboard, or screen of specific students.
            </Point>
            <Point>Sample call lessons displayed on student screens.</Point>
          </SectionBlock>
        </Container>
      </ContentSection>
    </Box>
  );
};

export default Ict;
