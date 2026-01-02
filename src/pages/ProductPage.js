import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, IconButton, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const products = [
  {
    title: "Smart Tailor Shop",
    desc: "Automated measurements, order & inventory management.",
    link: "/smarttailorshop",
  },
  {
    title: "Online Cab Booking System",
    desc: "Reliable bookings, driver tracking and fare management.",
    link: "/onlinecabbooking",
  },
  {
    title: "Smart Class Room",
    desc: "Interactive digital classroom for live & recorded lessons.",
    link: "/smartclassroom",
  },
  {
    title: "Educational Mobile App (Gillgall)",
    desc: "Student-centric learning, quizzes & progress tracking.",
    link: "/educationalmobileapp",
  },
  {
    title: "EMIS",
    desc: "Education Management Information System for institutions.",
    link: "/emis",
  },
  {
    title: "Assessment Tool",
    desc: "Secure, adaptive evaluations and analytics.",
    link: "/assessmenttool",
  },
];

const PageWrap = styled("div")(({ theme }) => ({
  background: "#ffffff",
  color: "#111",
  padding: "60px 5%",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 6%",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  fontSize: 38,
  marginBottom: 16,
  color: "#0b1a12",
  letterSpacing: "0.5px",
  [theme.breakpoints.down("sm")]: {
    fontSize: 30,
    textAlign: "center",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: 26,
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontStyle: "italic",
  fontWeight: 500,
  fontSize: 40,
  color: "#0a9c7d",
  letterSpacing: 1,
  lineHeight: 1.8,
  marginBottom: 70,
  textShadow: "0px 2px 6px rgba(0,0,0,0.15)",
  [theme.breakpoints.down("sm")]: {
    fontSize: 22,
    lineHeight: 1.6,
    marginBottom: 40,
    textAlign: "center",
  },
}));

const ProductsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gap: 70,
  justifyContent: "center",
  gridTemplateColumns: "1fr",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gap: 50,
  },
}));

const ContentItem = styled("div")(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "90%",
  margin: "0 auto",
  cursor: "pointer",
  position: "relative",
  paddingBottom: 16,
  borderBottom: "2px solid #0A8791",
  transition: "color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    color: "#0A8791",
    transform: "translateX(5px)",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    width: "100%",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: 50,
  color: "#0b1a12",
  lineHeight: 1.3,
  letterSpacing: "1.5px",
  textShadow: "0px 3px 6px rgba(0,0,0,0.2)",
  transition: "color 0.3s ease, text-shadow 0.3s ease",
  "&:hover": {
    color: "#0A8791",
    textShadow: "0 0 10px rgba(10,135,145,0.4)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: 24,
  },
}));

const Desc = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 520,
  fontSize: 35,
  color: "#2f3e39",
  marginTop: 10,
  lineHeight: 1.7,
  letterSpacing: "0.5px",
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    lineHeight: 1.6,
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: 15,
  },
}));

const RightArrow = styled(IconButton)(({ theme }) => ({
  color: "#0A8791",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateX(6px)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: 4,
  },
}));

export default function ProductPage() {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    window.scrollTo(0, 0);
    navigate(link);
  };

  return (
    <PageWrap id="products-section">
      <Heading>OUR PRODUCTS</Heading>
      <SubHeading>
        Connecting the future with smart network solutions.
      </SubHeading>

      <ProductsGrid>
        {products.map((p) => (
          <ContentItem key={p.title} onClick={() => handleNavigate(p.link)}>
            <Box>
              <Title>{p.title}</Title>
              <Desc>{p.desc}</Desc>
            </Box>
            <RightArrow aria-label="open">
              <ArrowForwardIcon />
            </RightArrow>
          </ContentItem>
        ))}
      </ProductsGrid>
    </PageWrap>
  );
}
