import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const bgImage =
  process.env.PUBLIC_URL + "/assets/project/languagelab/languagelab1.jpg";

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
  fontFamily: "'Noto Sans', sans-serif",
  padding: "90px 10%",
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
  fontFamily: "'Noto Sans', sans-serif",
  alignItems: "flex-start",
  gap: "14px",
  fontSize: "1.25rem",
  lineHeight: 1.8,
  color: "#2b2b2b",
  marginBottom: "14px",

  "&::before": {
    content: '"•"',
    fontSize: "1.6rem",
    fontWeight: 900,
    lineHeight: 1,
    marginTop: "4px",
    flexShrink: 0,
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "1.35rem",
    gap: "16px",
  },

  [theme.breakpoints.between("lg", "xl")]: {
    fontSize: "1.28rem",
    gap: "14px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "1.18rem",
    gap: "12px",
  },

  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "1.08rem",
    gap: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.98rem",
    gap: "8px",
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

export default function LanguageLab() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <ImageBanner>LANGUAGE LAB SOFTWARE SOLUTION</ImageBanner>

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
              Language Lab is a software program designed to help teachers
              improve the learning environment in computer-based classrooms and
              enhance students’ English language skills.
            </Point>
            <Point>
              It helps teach pronunciation, letter writing, grammar,
              conversation, voice and word recognition, and parts of speech.
            </Point>

            <SectionTitle>How It Works</SectionTitle>
            <Point>
              The teacher controls all student computers within a classroom.
            </Point>
            <Point>
              One system acts as the teacher or server, and the remaining
              systems act as student or client computers.
            </Point>
            <Point>
              Teachers can monitor student activities, view attendance, and
              track engagement easily.
            </Point>

            <SectionTitle>Language Lab Software Includes</SectionTitle>
            <Point>Coverage of key grammar areas</Point>
            <Point>Integrated Vocabulary</Point>
            <Point>Dictionary</Point>
            <Point>Synonyms and Antonyms</Point>
            <Point>Sentence Making</Point>
            <Point>Spell Check</Point>

            <SectionTitle>Using the Teacher Computer or Server</SectionTitle>
            <Point>
              Teachers can control all student computers, broadcast audio/video,
              share files, record sessions, and manage class activities.
            </Point>

            <SectionTitle>Using the Student’s Computer or Client</SectionTitle>
            <Point>
              Students’ systems run the software in the background and are fully
              controlled by the teacher console.
            </Point>

            <SectionTitle>Key Features</SectionTitle>
            <Point>
              Server acts as a Teacher Console with student list view.
            </Point>
            <Point>Real-time Screen & Audio Broadcast.</Point>
            <Point>Monitor student screens from teacher console.</Point>
            <Point>Record and store lessons for future use.</Point>
            <Point>Share files between teacher and students.</Point>
            <Point>
              Control features like mute audio, lock keyboard, and screen.
            </Point>
            <Point>Provide sample call lessons for practice.</Point>

            <SectionTitle>Grammar Tools</SectionTitle>
            <Point>Articles</Point>
            <Point>Voice</Point>
            <Point>Tense</Point>
            <Point>Punctuation</Point>
            <Point>Parts of Speech</Point>
            <Point>Conversation</Point>
            <Point>Dictionary</Point>

            <SectionTitle>Language Lab System Levels</SectionTitle>
            <Point>
              <span className="text">
                <b>Level I – Grammar:</b> Grammar through activities with
                teacher guidance and performance monitoring.
              </span>
            </Point>

            <Point>
              <span className="text">
                <b>Level II – Skill Generation:</b> Programs focus on improving
                existing knowledge and career-oriented language skills.
              </span>
            </Point>

            <Point>
              <span className="text">
                <b>Level III – Art of Writing:</b> Develops strong writing
                skills, vocabulary, and sentence structuring for effective
                communication.
              </span>
            </Point>

            <SectionTitle>Art of Conversation</SectionTitle>
            <Point>
              Involves both listening and speaking skills to communicate
              effectively in various situations.
            </Point>
          </motion.div>
        </Container>
      </ContentSection>
    </Box>
  );
}
