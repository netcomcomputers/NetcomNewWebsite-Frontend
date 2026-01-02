import React, { useState } from "react";
import { Box, Typography, Container, Paper, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousRoundedIcon from "@mui/icons-material/DangerousRounded";
import AdjustIcon from "@mui/icons-material/Adjust";
import { Colors, Fonts } from "../../constants";
import ProductServiceForm from "../../components/ProductServiceForm";
import { useTheme, useMediaQuery } from "@mui/material";

const HeaderSection = styled(Box)(({ theme }) => ({
  minHeight: "55vh",
  background:
    "linear-gradient(135deg, #522377 0%, #36195B 25%, #080B38 50%, #133155 75%, #254D70 100%)",
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

const FeatureBox = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffffff",
  borderRadius: "24px",
  padding: "50px 40px",
  textAlign: "left",
  minHeight: 480,
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

const PageBackground = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  width: "100%",
  paddingBottom: "80px",
  paddingTop: "60px",
}));

const websiteTechnology = [
  {
    text: "React JS",
    image: "/assets/product/smarttailorshop/mernLogo/reactLogo.svg",
  },
  {
    text: "Node JS",
    image: "/assets/product/smarttailorshop/mernLogo/nodeLogo.svg",
  },
  {
    text: "Express JS",
    image: "/assets/product/smarttailorshop/mernLogo/expressLogo.svg",
  },
  {
    text: "MongoDB",
    image: "/assets/product/smarttailorshop/mernLogo/mango db.svg",
  },
];

const allFeatures = [
  {
    title: "Know Your Customer",
    desc: `Maintain complete customer records including contact details, address, and measurements. Access their data instantly to ensure personalized service and improved customer satisfaction.`,
  },
  {
    title: "Manage Your Orders",
    desc: `Digitally store and track every order. View live status updates, download reports, and simplify your workflow without manual paperwork.`,
  },
  {
    title: "Placing Orders",
    desc: `Quickly place new orders using existing measurements. Attach design images and print details for efficient production tracking.`,
  },
  {
    title: "Rates Updater",
    desc: `Easily modify the Cost of Stitching Charges. Update Costs at any time with simple access.`,
  },
  {
    title: "Full Reports of Sales or Orders",
    desc: `Get a comprehensive report on total sales and orders received over months or years. Filter by day, week, or month easily.`,
  },
  {
    title: "Smart Billing",
    desc: `Bills are generated automatically for each order with GST and discount options included for professional invoicing.`,
  },
];

function PricingSection() {
  const smartTailor = [
    { title: "Smart Tailor Shop", rate: "₹ 4999 /month", color: "#96546F" },
    { title: "Smart Tailor Shop Pro", rate: "₹ 6999 /month", color: "#7E8BB8" },
    {
      title: "Smart Tailor Shop Ultimate",
      rate: "₹ 7999 /month",
      color: "#C8892A",
    },
  ];

  const smartTailorProDetails = [
    "Customer Management",
    "Interactive Charts",
    "Report Generation",
    "Rates Updater",
    "Smart Billing",
    "Live Support",
    "Free Installation",
    "Fit in all Devices",
    "Stitching Team Login Panel",
    "Stitched Dress Image Updater",
    "Export Customer Details & Order Details as Excel File",
    "Separate App for Customers",
  ];

  const smartTailorOrders = [
    "500 Orders Placement",
    "1000 Orders Placement",
    "Unlimited Orders Placement",
  ];

  const smartTailorBenefits = [
    "First Time Fee - ₹ 14999 for Domain and Hosting Charges (includes 1 Month Ultimate Plan)",
    "7 Days FREE Trial",
    "GST @18% Applicable on All Purchases",
  ];

  const Wrapper = styled("div")(({ theme }) => ({
    background: "#E6E7E8",
    width: "100%",
    padding: "60px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const CardContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    width: "67%",
    [theme.breakpoints.down("xl")]: { width: "75%" },
    [theme.breakpoints.down("lg")]: { width: "85%" },
    [theme.breakpoints.down("md")]: { width: "90%" },
    [theme.breakpoints.down("sm")]: { width: "95%" },
  }));

  const BenefitContainer = styled("div")(({ theme }) => ({
    width: "67%",
    marginTop: 40,
    [theme.breakpoints.down("lg")]: { width: "85%" },
    [theme.breakpoints.down("md")]: { width: "90%" },
    [theme.breakpoints.down("sm")]: { width: "95%" },
  }));

  return (
    <Wrapper>
      <Typography
        variant="h4"
        sx={{
          justifyContent: "center",
          color: "#111",
          fontWeight: "bold",
          fontFamily: "'Noto Sans', sans-serif",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Pricing Plans
      </Typography>

      <CardContainer>
        {smartTailor.map((obj, index) => (
          <Card
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "320px",
                md: "350px",
                lg: "340px",
                xl: "400px",
              },
              minHeight: {
                xs: "auto",
                sm: "560px",
                md: "600px",
                lg: "650px",
                xl: "700px",
              },
              border: `2px solid ${obj.color}`,
              borderRadius: 3,
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
              },
            }}
          >
            <CardContent sx={{ padding: 0 }}>
              <div
                style={{
                  backgroundColor: obj.color,
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontFamily: Fonts.MAIN_FONT }}
                >
                  {obj.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "white", fontFamily: Fonts.MAIN_FONT }}
                >
                  {obj.rate}
                </Typography>
              </div>

              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 10,
                  }}
                >
                  <CheckCircleIcon style={{ color: "green" }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: Fonts.MAIN_FONT,
                      paddingLeft: 1,
                      fontSize: "1.05rem",
                      fontWeight: "300",
                    }}
                  >
                    {smartTailorOrders[index]}
                  </Typography>
                </div>

                {smartTailorProDetails.map((text, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    {obj.title === "Smart Tailor Shop" && idx > 7 ? (
                      <DangerousRoundedIcon style={{ color: "grey" }} />
                    ) : obj.title === "Smart Tailor Shop Pro" && idx > 9 ? (
                      <DangerousRoundedIcon style={{ color: "grey" }} />
                    ) : (
                      <CheckCircleIcon style={{ color: "green" }} />
                    )}

                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: Fonts.MAIN_FONT,
                        paddingLeft: 1,
                        fontSize: "1.05rem",
                        fontWeight: "300",
                        color:
                          obj.title === "Smart Tailor Shop" && idx > 7
                            ? "grey"
                            : obj.title === "Smart Tailor Shop Pro" && idx > 9
                            ? "grey"
                            : "black",
                      }}
                    >
                      {text}
                    </Typography>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContainer>

      <BenefitContainer>
        {smartTailorBenefits.map((text, idx) => (
          <div
            key={idx}
            style={{ display: "flex", flexDirection: "row", marginTop: 15 }}
          >
            <AdjustIcon style={{ color: "green" }} />
            <Typography
              variant="body1"
              sx={{ fontFamily: "'Noto Sans', sans-serif", paddingLeft: 1 }}
            >
              {text}
            </Typography>
          </div>
        ))}
      </BenefitContainer>
    </Wrapper>
  );
}

export default function SmartTailorShop() {
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

                  fontSize: {
                    xs: "1.6rem",
                    sm: "2rem",
                    md: "2.4rem",
                    lg: "2.6rem",
                    xl: "2.8rem",
                  },
                }}
              >
                SMART TAILOR SHOP
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  maxWidth: "700px",
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                  opacity: 0.9,
                }}
              >
                A Complete Digital Solution for Modern Tailor Shop Management.
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
                src="/assets/product/smarttailorshop/smarttailorlogo1.jpg"
                alt="Tailor Shop Illustration"
                sx={{
                  width: {
                    xs: "85%",
                    sm: "75%",
                    md: "90%",
                    lg: "95%",
                    xl: "90%",
                  },
                  maxWidth: "480px",
                  height: "auto",
                  borderRadius: "50%",
                  objectFit: "cover",
                  mixBlendMode: "multiply",
                  filter:
                    "brightness(1.1) contrast(1.2) drop-shadow(0px 10px 25px rgba(255,255,255,0.3))",
                }}
              />
            </motion.div>
          </Box>
        </Container>
      </HeaderSection>

      <PageBackground>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: { xs: "2rem", md: "2.5rem" },
              textAlign: { xs: "center", md: "left" },
              mb: 4,
              color: "#111",
            }}
          >
            Overview
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: "1.15rem",
                sm: "1.25rem",
                md: "1.35rem",
                lg: "1.45rem",
              },
              lineHeight: 1.9,
              fontFamily: "'Noto Sans', sans-serif",
              textAlign: "justify",
            }}
          >
            Smart Tailor Application is a responsive and easy-to-use tailor shop
            management system that helps manage customers, their measurements,
            orders, and payments seamlessly. It simplifies every process,
            enhances customer experience, and improves workflow efficiency for
            modern tailoring businesses.
          </Typography>
        </Container>

        <Container maxWidth="lg" sx={{ position: "relative", mt: 8 }}>
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
                  alignItems: "stretch",
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
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontSize: {
                          xs: "1.05rem",
                          sm: "1.15rem",
                          md: "1.25rem",
                        },
                        lineHeight: 1.9,
                        textAlign: "justify",
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

        <Container maxWidth="lg" sx={{ mt: 8 }}>
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
                color: "#111",
                textAlign: "center",
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
                    fontFamily: "'Noto Sans', sans-serif",
                    fontSize: {
                      xs: "1.1rem",
                      sm: "1.2rem",
                      md: "1.3rem",
                    },
                    color: "#333",
                  }}
                >
                  {tech.text}
                </Typography>
              </TechBox>
            ))}
          </Box>
        </Container>

        <Box sx={{ mt: 10 }}>
          <PricingSection />
        </Box>
      </PageBackground>
      <ProductServiceForm />
    </Box>
  );
}
