import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const bgImage =
  process.env.PUBLIC_URL +
  "/assets/project/skilldevelopment/skilldevelopment1.jpg";

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
  position: "relative",
  fontSize: "1.25rem",
  fontFamily: "'Noto Sans', sans-serif",
  lineHeight: 2,
  color: "#2b2b2b",
  marginBottom: "16px",

  paddingLeft: "32px",

  display: "flex",
  alignItems: "flex-start",

  "&::before": {
    content: '"•"',
    position: "absolute",
    left: "0px",
    top: "8px",
    lineHeight: 1,
    color: "#0d0d0e",
    fontWeight: 900,
    fontSize: "1.4rem",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "1.15rem",
    paddingLeft: "28px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.05rem",
    paddingLeft: "25px",
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

export default function SkillDevelopmentProject() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <ImageBanner>SKILL DEVELOPMENT & TRAINING</ImageBanner>

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
              Soft skills are those personal values and interpersonal skills
              that determine a person’s ability to work in a collaborative
              environment. Soft skill development must be carried out as they
              are vital to one’s professional life as they help individuals to
              excel in the workplace.
            </Point>

            <Point>
              Netcom goal is to help you understand these important dynamics of
              group communication and learn how to put them into practice to
              improve your overall teamwork.
            </Point>

            <Point>
              The importance of soft skill are distinct from hard skills or
              domain knowledge. It is increasingly being recognized as a
              prerequisite in several sectors of the job market.
            </Point>

            <Point>
              Research in many fields such as sales and marketing, software
              development, engineering and law has shown that to be successful
              in the workplace, knowledge alone is not enough — instead soft
              skills are needed to deal with the external world and to work in a
              collaborative manner.
            </Point>

            <SectionTitle>Interpersonal and Team Skills</SectionTitle>

            <Point>
              Interpersonal and team skills are the behaviors and tactics that a
              person uses to interact with stakeholders in a project
              effectively. The ability to establish a relationship with others
              and maintain that relationship is key to the success of your
              project.
            </Point>

            <SectionTitle>
              Presentation and Business Communication Skill
            </SectionTitle>

            <Point>
              To communicate effectively in the workplace, you need to be able
              to present your information clearly. Presentation skills don't
              just mean knowing how to put together good slides — it means
              engaging and connecting with an audience to get your message
              across.
            </Point>

            <SectionTitle>Personal Effectiveness Skills</SectionTitle>

            <Point>
              Personal Effectiveness Skills vary from individual to individual,
              from discipline to discipline and from situation to situation.
            </Point>

            <SectionTitle>Communication Skills</SectionTitle>

            <Point>
              Netcom considers this as a crucial one — written and verbal
              communication is essential to build stronger professional as well
              as personal relationships. Effective communication skills comprise
              of good cognitive, auditory and visual processing abilities. While
              working on soft skill development, beginning with improving your
              communication is an essential step as it can help bring the rest
              of the abilities in place.
            </Point>

            <SectionTitle>Our Projects</SectionTitle>

            <Point>
              Netcom has ventured in various fields with different institutions.
            </Point>

            <Point>
              Anna University Coimbatore: We have provided training for the
              students of ANNA UNIVERSITY, COIMBATORE during 2008–2009 and were
              instrumental in preparing training packages with animation as
              Computer Aided Learning for Soft Skill Programme. We have
              supported the students with INTERVIEW SKILLS & GROUP DISCUSSION
              DVDs for 5000 students.
            </Point>
          </motion.div>
        </Container>
      </ContentSection>
    </Box>
  );
}
