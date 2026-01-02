import React, { useState } from "react";
import { Box, Typography, Container, Paper, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ProductServiceForm from "../../components/ProductServiceForm";
import { useTheme, useMediaQuery } from "@mui/material";

const HeaderSection = styled(Box)(({ theme }) => ({
  minHeight: "55vh",
  background:
    "linear-gradient(135deg, #090804, #071402, #0C2703, #074300, #125607)",
  display: "flex",
  alignItems: "center",
  color: "white",
  padding: "40px 20px",
  [theme.breakpoints.up("sm")]: {
    padding: "50px 40px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "70px 60px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "80px 80px",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "90px 100px",
  },
}));

const OverviewSection = styled(Box)(({ theme }) => ({
  color: "#121212",
  padding: "70px 20px 40px",
  [theme.breakpoints.up("md")]: { padding: "90px 60px 50px" },
}));

const MildGreenSection = styled(Box)(({ theme }) => ({
  padding: "50px 20px",
  [theme.breakpoints.up("sm")]: { padding: "60px 40px" },
  [theme.breakpoints.up("md")]: { padding: "70px 60px" },
}));

const FeatureBox = styled(Paper)(({ theme }) => ({
  borderRadius: "24px",
  padding: "50px 40px",
  textAlign: "left",
  minHeight: 440,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
}));

const TechBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  borderRadius: "20px",
  padding: "30px 20px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
  },
}));

const allFeatures = [
  {
    title: "Customer Booking Portal",
    desc: `Easily book rides online or via mobile with real-time cab availability.
    Customers can select pickup and drop locations conveniently.`,
  },
  {
    title: "Driver Management",
    desc: `Track, assign, and manage drivers efficiently. View active drivers,
    completed trips, and maintain driving performance records.`,
  },
  {
    title: "Fare Calculation & Reports",
    desc: `Automatic fare calculation based on distance and time. 
    Admin can view revenue and trip reports in just one click.`,
  },
  {
    title: "Live Cab Tracking",
    desc: `Customers can track their cab in real-time with integrated GPS view
    for accurate and reliable updates.`,
  },
  {
    title: "Secure Payments",
    desc: `Integrated digital payments using cards, wallets, or UPI
    for smooth and secure transactions.`,
  },
  {
    title: "Admin Dashboard",
    desc: `Monitor bookings, revenue, and driver performance with
    an intuitive admin panel that updates in real time.`,
  },
];

const websiteTechnology = [
  {
    text: "React JS",
    image: "/assets/product/onlinecabbooking/mernLogo/reactLogo.svg",
  },
  {
    text: "Node JS",
    image: "/assets/product/onlinecabbooking/mernLogo/nodeLogo.svg",
  },
  {
    text: "Express JS",
    image: "/assets/product/onlinecabbooking/mernLogo/expressLogo.svg",
  },
  {
    text: "MongoDB",
    image: "/assets/product/onlinecabbooking/mernLogo/mango db.svg",
  },
];

export default function OnlineCabBooking() {
  const [index, setIndex] = useState(0);

  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.up("md"));

  const visibleCount = isXs ? 1 : isMd ? 2 : 3;

  const nextBox = () => setIndex((prev) => (prev + 1) % allFeatures.length);
  const prevBox = () =>
    setIndex((prev) => (prev === 0 ? allFeatures.length - 1 : prev - 1));

  const visibleBoxes = Array.from({ length: visibleCount }, (_, i) => {
    return allFeatures[(index + i) % allFeatures.length];
  });

  return (
    <Box
      sx={{
        fontFamily: "'Poppins', sans-serif",
        background: "#E6E7E8",
        width: "100%",
        minHeight: "100vh",
      }}
    >
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
                  fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
                }}
              >
                ONLINE CAB BOOKING
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  maxWidth: "650px",
                  fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                  opacity: 0.9,
                }}
              >
                Manage your cab services effortlessly with digital booking,
                driver tracking, and real-time fare updates.
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
                src="/assets/product/onlinecabbooking/onlinecabbookinglogo.jpg"
                alt="Online Cab Booking Logo"
                sx={{
                  width: { xs: "80%", sm: "70%", md: "85%", lg: "90%" },
                  maxWidth: "420px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "50%",
                  mixBlendMode: "multiply",
                  filter:
                    "brightness(1.2) contrast(1.3) saturate(1.2) drop-shadow(0px 8px 20px rgba(255,255,255,0.2))",
                }}
              />
            </motion.div>
          </Box>
        </Container>
      </HeaderSection>
      <OverviewSection>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontFamily: "'Noto Sans', sans-serif",
              mb: 3,
              color: "#111",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            OVERVIEW
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
              lineHeight: 1.8,
              fontFamily: "'Noto Sans', sans-serif",
              textAlign: "justify",
              maxWidth: "900px",
            }}
          >
            Online Cab Booking Application deals with an online system designed
            for booking cabs as per the requirements of the customers at their
            convenience. It automates booking, driver management, and payment
            tracking for both admin and users.
          </Typography>
        </Container>
      </OverviewSection>
      <MildGreenSection>
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              fontFamily: "'Noto Sans', sans-serif",
              mb: 6,
              fontSize: { xs: "2rem", sm: "2.3rem", md: "2.6rem" },
              color: "#111",
            }}
          >
            FEATURES
          </Typography>
          <IconButton
            onClick={prevBox}
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              backgroundColor: "#2b2b2b",
              color: "white",
              "&:hover": { backgroundColor: "#111" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={nextBox}
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              backgroundColor: "#2b2b2b",
              color: "white",
              "&:hover": { backgroundColor: "#111" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: "grid",
                  gap: { xs: 3, sm: 4, md: 5 },
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                }}
              >
                {visibleBoxes.map((feature, i) => (
                  <FeatureBox key={i} elevation={4}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        fontFamily: "'Noto Sans', sans-serif",
                        mb: 2,
                        fontSize: {
                          xs: "1.5rem",
                          sm: "1.7rem",
                          md: "1.9rem",
                        },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: {
                          xs: "1.05rem",
                          sm: "1.15rem",
                          md: "1.25rem",
                        },
                        lineHeight: 1.9,
                        textAlign: "justify",
                        fontFamily: "'Noto Sans', sans-serif",
                      }}
                    >
                      {feature.desc}
                    </Typography>
                  </FeatureBox>
                ))}
              </Box>
            </motion.div>
          </AnimatePresence>
        </Container>
      </MildGreenSection>
      <MildGreenSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontFamily: "'Noto Sans', sans-serif",
                mb: 6,
                fontSize: { xs: "2rem", md: "2.5rem" },
                textAlign: "center",
                color: "#111",
              }}
            >
              TECHNOLOGY USED
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gap: { xs: 3, sm: 4, md: 5 },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              alignItems: "stretch",
            }}
          >
            {websiteTechnology.map((tech, index) => (
              <TechBox key={index}>
                <Box
                  component="img"
                  src={tech.image}
                  alt={tech.text}
                  sx={{
                    width: { xs: "60px", sm: "80px", md: "100px" },
                    height: "auto",
                    mb: 2,
                    objectFit: "contain",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: {
                      xs: "1.1rem",
                      sm: "1.2rem",
                      md: "1.3rem",
                    },
                    color: "#111",
                    fontFamily: "'Noto Sans', sans-serif",
                  }}
                >
                  {tech.text}
                </Typography>
              </TechBox>
            ))}
          </Box>
        </Container>
      </MildGreenSection>
      <ProductServiceForm />{" "}
    </Box>
  );
}
