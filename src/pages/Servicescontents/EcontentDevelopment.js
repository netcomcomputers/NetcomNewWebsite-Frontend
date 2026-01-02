// ✅ src/pages/Servicescontents/EcontentDevelopment.js
import React, { useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ServiceForm from "../../components/ServiceForm";

/* ---------------------------------------------------
   🌆 HERO SECTION (Same style as GraphicDesign page)
--------------------------------------------------- */


const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "72vh",
  width: "100%",
   backgroundImage: "url('/assets/services/econtent/netcomecontentbg2.jpg')",
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

  [theme.breakpoints.down("md")]: {
    height: "60vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
}));

const HeroText = styled(Box)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  zIndex: 2,
  padding: "0 24px",
  width: "100%",
}));


/* ---------------------------------------------------
   🌿 CONTENT SECTION (Matched with GraphicDesign page)
--------------------------------------------------- */
const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#121212",
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

/* ---------------------------------------------------
   ✅ Reusable styled typography components
   (replace all inline subtitle/body sx)
--------------------------------------------------- */

const SubHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: "#111", // SAME as graphic design page
  fontSize: "2.2rem",
  fontFamily: "'Noto Sans', sans-serif",
  marginBottom: "24px",
  textAlign: "left",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
    textAlign: "center",
  },
}));

const SubHeadingSmall = styled(Typography)(({ theme }) => ({
  // used for the "Key Deliverables:" smaller subtitle
  fontWeight: 800,
  fontFamily: "'Noto Sans', sans-serif",
  color: "#111",
  marginBottom: "16px",
  textAlign: "left",
  fontSize: "1.6rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
    textAlign: "center",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  lineHeight: 2,
  fontFamily: "'Noto Sans', sans-serif",
  color: "#121212", // SAME text color
  marginBottom: "20px",
  textAlign: "justify",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

/* ---------------------------------------------------
   🟢 Bullet List Same Style
--------------------------------------------------- */
const BulletList = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  display: "grid",
  gridTemplateColumns: "1fr",
  rowGap: "14px",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr", // 2 columns from md to xl
    columnGap: "20px",
  },
}));

const BulletItem = styled(Typography)(({ theme }) => ({
  position: "relative",
  fontSize: "1.2rem",
  fontFamily: "'Noto Sans', sans-serif",
  color: "#2b2b2b",
  paddingLeft: "28px",
  fontWeight: 500,
  lineHeight: 1.7,

  "&::before": {
    content: '"•"',
    position: "absolute",
    left: "0px",
    top: "2px",
    color: "#111",
    fontWeight: 900,
    fontSize: "1.6rem",
    lineHeight: 1,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

/* InlineTitle style preserved for bold labels inside content */
const InlineTitle = {
  color: "#112",
  fontWeight: 700,
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "1.25rem",
};

/* small block spacing */
const SectionBlock = styled(Box)(() => ({
  marginBottom: "70px",
}));

/* Quote component (replaces final Typography with inline sx) */
const Quote = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "#111",
  fontWeight: 700,
  fontFamily: "'Noto Sans', sans-serif",
  marginTop: "48px",
  fontSize: "2rem",
  lineHeight: 1.7,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
  },
}));

/* ---------------------------------------------------
   ⭐ MAIN COMPONENT
--------------------------------------------------- */
export default function EcontentDevelopment() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", overflowX: "hidden" }}>
        {/* ---------------- HERO SECTION ---------------- */}
        <HeroSection>
          <HeroText
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: "1.9rem",
                  sm: "2.4rem",
                  md: "3.5rem",
                  lg: "4.2rem",
                  xl: "4.6rem",
                },
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              E-Content Development
            </Typography>
          </HeroText>
        </HeroSection>

        {/* ---------------- CONTENT SECTION ---------------- */}
        <ContentSection>
          {/* SECTION 1 */}
          <SectionBlock>
            <SubHeading>E-Content at a Glance</SubHeading>

            <Text>
              Netcom E-Content provides a comprehensive digital repository designed
              to make learning interactive, engaging and accessible. Covering all
              major subjects such as Mathematics, Science, Social Sciences,
              English and Commerce, our resources are suitable for students from
              Classes I–XII.
            </Text>

            <BulletList>
              <BulletItem>Complete syllabus coverage for Classes I–XII</BulletItem>
              <BulletItem>Available in English & Tamil medium</BulletItem>
              <BulletItem>Supports Matriculation syllabus</BulletItem>
              <BulletItem>Experimental animations for all subjects</BulletItem>
              <BulletItem>Interactive question banks and activities</BulletItem>
            </BulletList>
          </SectionBlock>

          <Divider sx={{ my: { xs: 4, md: 6 } }} />

          {/* SECTION 2 */}
          <SectionBlock>
            <SubHeading>Technologies & Standards</SubHeading>

            <Text>
              Every e-learning module is designed according to international standards, ensuring compatibility, accessibility, and reusability. Each asset — including visuals, narrations, and animations — follows rigorous quality control and accessibility guidelines.
            </Text>

            <SubHeadingSmall>Key Deliverables:</SubHeadingSmall>

            <BulletList>
              <BulletItem>
                Multimedia-enriched eText with voice-over narration
              </BulletItem>
              <BulletItem>
                Interactive storyboards and animated content
              </BulletItem>
              <BulletItem>Virtual labs and simulation modules</BulletItem>
              <BulletItem>
                Supplementary notes, references & glossary
              </BulletItem>
            </BulletList>
          </SectionBlock>

          <Divider sx={{ my: { xs: 4, md: 6 } }} />

          {/* SECTION 3 */}
          <SectionBlock>
            <SubHeading>Development Workflow</SubHeading>

            <Text>
              <BulletList>
                <BulletItem>Curriculum mapping & learning objective identification</BulletItem>
                <BulletItem>Content scripting & storyboard preparation by SMEs</BulletItem>
                <BulletItem>Animation, production & narration synchronization</BulletItem>
                <BulletItem>Quality assurance & accessibility validation</BulletItem>
                <BulletItem>Final integration & publishing on LMS/portals</BulletItem>
              </BulletList>
              <br />
              <SubHeading>Roles and Responsibilities of Content Writer/Subject Matter Expert:</SubHeading>
            </Text>

            <Text>
              Subject Matter Experts prepare high-quality learning content ensuring
              accuracy, alignment with curriculum goals, and clarity in
              presentation.
            </Text>

            <Text>
              <b style={InlineTitle}>E-Text:</b> Detailed topic-wise write-ups with multimedia
              enrichments such as images, animations, and voice-overs.
              <br /><br />

              <b style={InlineTitle}>Web Resources / Supplementary Materials:</b> Additional readings,
              research papers, journals, and useful web links.
              <br /><br />

              <b style={InlineTitle}>Curriculum & Pedagogical Standards:</b> Each module aligns with
              learning outcomes and promotes problem-solving and self-learning.
              <br /><br />

              <b style={InlineTitle}>Self-Learning (Audio/Video):</b> Includes multimedia tutorials,
              animations, simulations, and documentaries.
              <br /><br />

              <b style={InlineTitle}>Self-Assessment:</b> Each module provides 10–15 self-assessment
              questions including MCQs.
              <br /><br />

              <b style={InlineTitle}>Presentation:</b> Each lesson includes a supporting PowerPoint
              presentation.
              <br /><br />

              <b style={InlineTitle}>Audio Standards:</b> Voice-over matches tone and character
              requirement and syncs perfectly with visuals.
              <br /><br />

              <b style={InlineTitle}>Storyboard:</b> Includes scripts, visuals, narration cues for
              animation and editing.
            </Text>
          </SectionBlock>

          <Quote>
            “Delivering next-generation learning through engaging digital experiences.”
          </Quote>
        </ContentSection>
      </Box>

      <ServiceForm />
    </>
  );
}
