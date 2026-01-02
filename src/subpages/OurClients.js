import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const PageContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#fff5f8",
  minHeight: "auto",
  padding: "60px 10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  [theme.breakpoints.up("lg")]: {
    paddingBottom: "80px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  fontSize: "1.8rem",
  color: "#1b1b1b",
  textAlign: "center",
  letterSpacing: "1px",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: "40px",
    height: "3px",
    backgroundColor: "#0A8791",
    margin: "10px auto 0 auto",
    borderRadius: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem",
  },
}));

const GridContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(10, 1fr)",
  gap: "25px 15px",
  width: "100%",
  maxWidth: "1100px",
  marginTop: "50px",
  justifyItems: "center",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
    maxWidth: "900px",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px 10px",
    maxWidth: "100%",
  },
}));

const LogoBox = styled("div")(() => ({
  width: "110px",
  height: "110px",
  backgroundColor: "#f8f8f8",
  borderRadius: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#f1fdfb",
  },
  "& img": {
    width: "70%",
    height: "70%",
    objectFit: "contain",
    filter: "grayscale(30%)",
    transition: "all 0.3s ease",
  },
  "&:hover img": {
    filter: "grayscale(0%)",
    transform: "scale(1.05)",
  },
}));

const brandLogos = [
  "/assets/ourclients/client-adidravidar.svg",
  "/assets/ourclients/client-anna university.svg",
  "/assets/ourclients/client-chenni corporation.svg",
  "/assets/ourclients/client-Covai corporation.svg",
  "/assets/ourclients/client-Elcot.svg",
  "/assets/ourclients/client-keletron.svg",
  "/assets/ourclients/client-MHRD.svg",
  "/assets/ourclients/client-orissa.svg",
  "/assets/ourclients/client-RBI.svg",
  "/assets/ourclients/client-SDA School.svg",
  "/assets/ourclients/client-ShivanesBoutique.svg",
  "/assets/ourclients/client-SSA.svg",
  "/assets/ourclients/client-state council.svg",
  "/assets/ourclients/client-Thanjavoor.svg",
  "/assets/ourclients/client-Tirunelveli.svg",
  "/assets/ourclients/client-TMB.svg",
  "/assets/ourclients/covai.jpg",
  "/assets/ourclients/Tambaram.png",
  "/assets/ourclients/thoothukudi.png",
  "/assets/ourclients/Tiruppur.png",
];

export default function OurClients() {
  return (
    <PageContainer>
      <Title>BRANDS THAT TRUST US</Title>
      <GridContainer>
        {brandLogos.map((logo, index) => (
          <LogoBox key={index}>
            <img src={logo} alt={`Brand ${index + 1}`} />
          </LogoBox>
        ))}
      </GridContainer>
    </PageContainer>
  );
}
