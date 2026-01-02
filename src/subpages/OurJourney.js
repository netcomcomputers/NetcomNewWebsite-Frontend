import React from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Typography } from "@mui/material";
import DvrIcon from "@mui/icons-material/Dvr";
import GroupIcon from "@mui/icons-material/Group";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const Colors = {
  MAIN_COLOR: "#00FFA3",
  TEXT_COLOR: "#EAEAEA",
  BG_GRADIENT: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #111111 100%)",
};

const floatAnim = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const bgWave = keyframes`
  0% { background-position: 0% 50%; opacity: 0.8; }
  50% { background-position: 100% 50%; opacity: 1; }
  100% { background-position: 0% 50%; opacity: 0.8; }
`;

const bubbleAnim = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
    transform: translateY(-50vh) scale(1.1);
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
`;

const PageContainer = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  background: Colors.BG_GRADIENT,
  color: Colors.TEXT_COLOR,
  padding: "30px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  backgroundSize: "200% 200%",
  animation: `${bgWave} 14s ease-in-out infinite`,

  [theme.breakpoints.up("xl")]: {
    paddingTop: "300px",
    paddingBottom: "300px",
  },
}));

const Bubble = styled("div")(({ size, left, duration, delay }) => ({
  position: "absolute",
  bottom: "-150px",
  left: `${left}%`,
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.07)",
  boxShadow: "0 0 15px rgba(0,255,163,0.3)",
  animation: `${bubbleAnim} ${duration}s linear infinite`,
  animationDelay: `${delay}s`,
  zIndex: 0,
  backdropFilter: "blur(2px)",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  fontSize: "2rem",
  color: Colors.TEXT_COLOR,
  textAlign: "center",
  letterSpacing: "1px",
  position: "relative",
  marginBottom: "40px",
  zIndex: 2,
  "&::after": {
    content: '""',
    display: "block",
    width: "50px",
    height: "3px",
    backgroundColor: Colors.MAIN_COLOR,
    margin: "10px auto 0 auto",
    borderRadius: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const GridContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "40px 20px",
  width: "100%",
  maxWidth: "1100px",
  justifyItems: "center",
  alignItems: "center",
  zIndex: 2,

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "25px",
  },
}));

const DataCard = styled("div")(() => ({
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,0,0,0.2))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  textAlign: "center",
  padding: "35px 20px",
  width: "100%",
  maxWidth: "230px",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  backdropFilter: "blur(8px)",
  zIndex: 2,
  "&:hover": {
    transform: "translateY(-10px) scale(1.03)",
    boxShadow: "0 8px 30px rgba(255,255,255,0.15)",
  },
}));

const IconWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  animation: `${floatAnim} 3s ease-in-out infinite`,
  marginBottom: "15px",
}));

const CountText = styled("div")(() => ({
  fontSize: "2.4rem",
  fontWeight: 700,
  color: Colors.MAIN_COLOR,
  marginBottom: "10px",
}));

const LabelText = styled("div")(() => ({
  fontSize: "1rem",
  letterSpacing: "1px",
  color: "#ccc",
  fontWeight: 500,
}));

const NoOfDataList = [
  {
    count: "25+",
    text: "NO. OF PROJECTS",
    icon: (
      <DvrIcon style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }} />
    ),
  },
  {
    count: "30+",
    text: "NO. OF CLIENTS",
    icon: (
      <HowToRegIcon
        style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }}
      />
    ),
  },
  {
    count: "100+",
    text: "NO. OF EMPLOYEES",
    icon: (
      <GroupIcon style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }} />
    ),
  },
  {
    count: "20+",
    text: "YEARS OF EXPERIENCE",
    icon: (
      <AccessTimeFilledIcon
        style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }}
      />
    ),
  },
];

export default function OurJourney() {
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    size: Math.random() * 40 + 10,
    left: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <PageContainer>
      {bubbles.map((b, i) => (
        <Bubble
          key={i}
          size={b.size}
          left={b.left}
          duration={b.duration}
          delay={b.delay}
        />
      ))}

      <Title>OUR JOURNEY IN NUMBERS</Title>
      <GridContainer>
        {NoOfDataList.map((item, index) => (
          <DataCard key={index}>
            <IconWrapper>{item.icon}</IconWrapper>
            <CountText>{item.count}</CountText>
            <LabelText>{item.text}</LabelText>
          </DataCard>
        ))}
      </GridContainer>
    </PageContainer>
  );
}
