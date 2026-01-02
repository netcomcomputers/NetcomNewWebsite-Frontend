import React from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { motion } from "framer-motion";
import ProductServiceForm from "../../components/ProductServiceForm";

const HeaderSection = styled(Box)(({ theme }) => ({
  minHeight: "60vh",
  background:
    "linear-gradient(135deg, #161638, #1B435E, #38667E, #563457, #3A2B50)",
  display: "flex",
  alignItems: "center",
  color: "black",
  padding: "60px 20px",
  [theme.breakpoints.up("md")]: {
    padding: "100px 60px",
  },
}));

const PageWrapper = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  width: "100%",
  overflow: "hidden",
}));

const OverviewSection = styled(Box)(({ theme }) => ({
  padding: "60px 20px",
  [theme.breakpoints.up("md")]: {
    padding: "80px 40px",
  },
}));

const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: "60px 20px",
  [theme.breakpoints.up("md")]: {
    padding: "80px 40px",
  },
}));

const HighlightsSection = styled(Box)(({ theme }) => ({
  padding: "60px 20px",
  [theme.breakpoints.up("md")]: {
    padding: "80px 40px",
  },
}));

const HardwareSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  padding: "50px 20px",
  [theme.breakpoints.up("md")]: {
    padding: "70px 40px",
  },
}));

const MildGradientSection = styled(Box)(({ theme }) => ({
  padding: "60px 20px",
  [theme.breakpoints.up("md")]: {
    padding: "80px 40px",
  },
}));

export default function SmartClassroom() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ fontFamily: "'Poppins', sans-serif" }}>
      <HeaderSection>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 4, md: 6 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ flex: 1 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "white",
                  fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
                }}
              >
                SMART CLASSROOM
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  maxWidth: "700px",
                  fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.35rem" },
                  opacity: 0.9,
                  color: "#f5f5f5",
                  lineHeight: 1.8,
                }}
              >
                Smart Classroom Application provides digital tools to simplify
                and enhance the teaching and learning process. It connects
                teachers and students through an efficient, interactive, and
                modern education environment.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/assets/product/smartclassroom/smartclassroomlogo.jpg"
                alt="Smart Classroom Logo"
                sx={{
                  width: { xs: "80%", sm: "70%", md: "85%", lg: "90%" },
                  maxWidth: "420px",
                  height: "auto",
                  borderRadius: "50%",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                  filter:
                    "brightness(1.2) contrast(1.3) drop-shadow(0px 8px 20px rgba(255,255,255,0.2))",
                }}
              />
            </motion.div>
          </Box>
        </Container>
      </HeaderSection>
      <PageWrapper>
        <OverviewSection>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontFamily: "'Noto Sans', sans-serif",
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "2.2rem", sm: "2.4rem", md: "2.6rem" },
                mb: 4,
                color: "#111",
              }}
            >
              OVERVIEW
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.35rem" },
                fontFamily: "'Noto Sans', sans-serif",
                color: "#121212",

                lineHeight: 1.9,
                textAlign: "justify",
              }}
            >
              Smart Classroom is a specially designed computer-enabled classroom
              that includes interactive learning software providing teachers
              with essential tools to manage classrooms, assess students, and
              encourage collaboration.
            </Typography>
          </Container>
        </OverviewSection>

        <ProjectsSection>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontFamily: "'Noto Sans', sans-serif",
                mb: 4,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "2.2rem", sm: "2.5rem", md: "2.7rem" },
                color: "#111",
              }}
            >
              Our Smart Classroom Projects
            </Typography>

            <Box
              component="ul"
              sx={{
                pl: { xs: 2, sm: 3 },
                fontFamily: "'Noto Sans', sans-serif",
                color: "#121212",
                lineHeight: 1.9,
                fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.3rem" },
                textAlign: "justify",
                m: 0,
                p: 0,
              }}
            >
              {[
                "Initial and ongoing trainings are given to the teachers by expert trainers.",
                "Guidance provided for digitizing curricular materials for Smart Classroom use.",
                "Periodic training sessions to help teachers adopt technology easily.",
                "Trainings empower students with IT and problem-solving skills.",
                "86 Smart Classrooms in Chennai Corporation Schools through ELCOT.",
                "171 Adi Dravidar & Tribal Welfare Department schools through ELCOT.",
                "25 Smart classrooms through Tirunelveli Corporations.",
                "15 Kallar schools in Madurai, Theni, and Dindugal districts through ELCOT.",
                "13 Thanjavur Corporation Schools through ELCOT.",
                "4 Smart classrooms through ELCOT by Coimbatore Corporations.",
                "38 Smart classrooms through Government aided Schools.",
                "1 Government Children Home for Boys, Ranipet through ELCOT.",
                "Netcom e-Smart Class Rooms have more than 300 Government and Corporation Schools through ELCOT in BOOT model.",
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "16px",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#111", fontSize: "1.6rem" }}>•</span>
                  {item}
                </li>
              ))}
            </Box>
          </Container>
        </ProjectsSection>

        <HighlightsSection>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontFamily: "'Noto Sans', sans-serif",
                mb: 4,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "2.2rem", sm: "2.5rem", md: "2.7rem" },
                color: "#111",
              }}
            >
              Highlights of Netcom Smart Class Room
            </Typography>

            <Box
              component="ul"
              sx={{
                pl: { xs: 2, sm: 3 },
                lineHeight: 1.9,
                fontFamily: "'Noto Sans', sans-serif",
                color: "121212",
                fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.3rem" },
                textAlign: "justify",
                m: 0,
                p: 0,
              }}
            >
              {[
                "Samacheer-based syllabus for Std. 6–12 with animations and diagrams.",
                "Content available in Tamil and English as per the medium of instruction.",
                "Enhanced learning through multimedia projectors and an engaging classroom environment.",
                "Touchscreen KIOSK for self-learning — a core feature of the E-Smart Classroom project.",
                "Content for State and CBSE syllabi in English, Tamil, and Hindi.",
                "Successfully implemented projects within the given government timelines for the benefit of the student community.",
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "16px",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#111", fontSize: "1.6rem" }}>•</span>
                  {item}
                </li>
              ))}
            </Box>
          </Container>
        </HighlightsSection>

        <HardwareSection>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: { xs: 3, sm: 4 },
              color: "#111",
              fontFamily: "'Noto Sans', sans-serif",
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.3rem", md: "2.6rem" },
            }}
          >
            Smart Classroom Hardwares
          </Typography>

          <Box
            component="img"
            src={
              isMobile
                ? "/assets/product/smartclassroom/smartClassHardwareMob.jpg"
                : "/assets/product/smartclassroom/smartclassHardware.png"
            }
            alt="Smart Classroom Hardwares"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              maxWidth: "1600px",
              borderRadius: 2,
              boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
            }}
          />
        </HardwareSection>

        <MildGradientSection>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: {
                  xs: "2rem",
                  sm: "2.3rem",
                  md: "2.8rem",
                  lg: "3rem",
                },
                textAlign: "center",
                color: "#111",
                mb: { xs: 3, md: 5 },
              }}
            >
              Passion for Learning
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem", md: "1.3rem" },
                lineHeight: 1.9,
                textAlign: "justify",
                mb: { xs: 4, md: 6 },
                color: "#121212",
                fontFamily: "'Noto Sans', sans-serif",
              }}
            >
              Smart Classroom is celebrating the influential people who inspire
              students' passion for learning. Initial and ongoing trainings are
              given to the teachers. Training to teachers is given by the
              trainers appointed by the management. We can provide guidance to
              the teachers in digitizing existing curricular materials for use
              with the Smart Classrooms.
            </Typography>

            <Box
              sx={{
                display: "grid",
                gap: { xs: 3, sm: 4, md: 5 },
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr",
                  md: "1fr",
                  lg: "repeat(2, 1fr)",
                  xl: "repeat(2, 1fr)",
                },
                mb: { xs: 4, md: 6 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "20px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                }}
              >
                <Box
                  component="img"
                  src="/assets/product/smartclassroom/smart_class_2.svg"
                  alt="School Kunnur"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      textAlign: "center",
                      fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                    }}
                  >
                    Govt Hr Sec School, Kunnur, Salem, TN
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              >
                <Box
                  component="img"
                  src="/assets/product/smartclassroom/smart_class_22.svg"
                  alt="School Melapalayam"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      textAlign: "center",
                      fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                    }}
                  >
                    Govt Hr Sec School, Melapalayam, Tirunelveli, TN
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem", md: "1.3rem" },
                lineHeight: 1.9,
                textAlign: "justify",
                color: "#121212",
                fontFamily: "'Noto Sans', sans-serif",
              }}
            >
              Smart Class Room is an integrated program for schools with
              interactive self-paced learning for students. Smart Class Room
              uses a rational approach in selecting innovative technology that
              gives good results. Improving the learning ability through
              self-evaluation. A Smart Class Room that has stationed a teacher
              equipped with computer and audio visual aids.
            </Typography>
          </Container>
        </MildGradientSection>
      </PageWrapper>
      <ProductServiceForm />
    </Box>
  );
}
