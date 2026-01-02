import "animate.css/animate.min.css";
import {
  IconButton,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { styled } from "@mui/material/styles";

import LocationIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { useNavigate } from "react-router-dom";
import { Fonts } from "../constants";

// ---------------- FOOTER CONTENTS ----------------
const footerContents = {
  mainText:
    "Netcom Computers Pvt Ltd is an Information Technology based company in Education and Training.",

  socialMedia: [
    { icon: <FacebookIcon />, link: "https://facebook.com", color: "#4267B2" },
    {
      icon: <InstagramIcon />,
      link: "https://instagram.com",
      color: `linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)`,
    },
    { icon: <LinkedInIcon />, link: "https://linkedin.com", color: "#0077b5" },
    { icon: <TwitterIcon />, link: "https://twitter.com", color: "#00acee" },
    { icon: <YouTubeIcon />, link: "https://youtube.com", color: "#FF0000" },
    {
      icon: <WhatsAppIcon />,
      link: "https://wa.me/+917538862862",
      color: "#25D366",
    },
  ],

  siteMap: [
    { text: "Services", link: "/services" },
    { text: "Product", link: "/product" },
    { text: "Project", link: "/project" },
    { text: "Portfolio", link: "/portfolio" },
    { text: "Contact", link: "/contact" },
    { text:"Privacy Policy", link: "/privacypolicy" }
  ],
};

// ---------------- FOOTER STYLES ----------------

const MainContainer = styled(Box)(() => ({
  width: "100%",
   background: "linear-gradient(135deg, #000000, #1C1C1C, #222222)",
  //background: "linear-gradient(135deg, #0a001a, #1e0033, #220531ff)",
  position: "relative",
  overflow: "hidden",
}));

const BGColor = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0,0.5)",
  padding: "40px 0", // Reduced height
}));

const SubContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  width: "90%",
  maxWidth: "1200px",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
}));

const SubContainerItem = styled(Box)(({ theme }) => ({
  flex: "1 1 300px",
  minWidth: "260px",
  margin: "10px",
  color: "white",
}));

const SocialMediaLogo = styled("div")(() => ({
  border: "1px solid #fff",
  borderRadius: "5px",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "4px",
  padding: "6px",
  width: "32px",
  height: "32px",
  transition: "0.4s",
  "&:hover": {
    transform: "scale(1.15)",
    boxShadow: "0 0 15px rgba(255,255,255,0.5)",
  },
}));

const SiteMap = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  marginTop: 4,
  cursor: "pointer",
  color: "white",
  transition: "0.3s",
  "&:hover": {
    color: "#9b59b6",
    transform: "translateX(5px)",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

// ---------------- COMPONENT ----------------

export default function Footer() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MainContainer>
      <BGColor>
        <SubContainer>

          {/* LEFT */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <SubContainerItem>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: Fonts.MAIN_FONT,
                  lineHeight: 1.6,
                  textAlign: isSmDown ? "center" : "left",
                }}
              >
                {footerContents.mainText}
              </Typography>

              {footerContents.socialMedia.map((item, index) => (
                <SocialMediaLogo
                  key={index}
                  sx={{ "&:hover": { background: item.color } }}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <IconButton sx={{ color: "white", padding: 0 }}>
                    {item.icon}
                  </IconButton>
                </SocialMediaLogo>
              ))}
            </SubContainerItem>
          </AnimationOnScroll>

          {/* CENTER – SITE MAP */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <SubContainerItem>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  textDecoration: "underline",
                  marginBottom: 1,
                }}
              >
                SITE MAP
              </Typography>

              {footerContents.siteMap.map((item, index) => (
                <SiteMap key={index} onClick={() => handleNavigate(item.link)}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: Fonts.MAIN_FONT }}
                  >
                    {item.text}
                  </Typography>
                </SiteMap>
              ))}
            </SubContainerItem>
          </AnimationOnScroll>

          {/* RIGHT – ADDRESS */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <SubContainerItem sx={{ textAlign: isSmDown ? "center" : "left" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  textDecoration: "underline",
                  marginBottom: 1,
                }}
              >
                HEAD OFFICE
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: isSmDown ? "center" : "flex-start",
                  marginTop: 1,
                }}
              >
                <LocationIcon sx={{ mr: 1 }} />
                <Typography variant="subtitle2">
                  No. 1/1, Nathan Street, Adikalapuram, Murugankurichi,
                  Palayamkottai, Tirunelveli - 627 002
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: isSmDown ? "center" : "flex-start",
                  marginTop: 1,
                }}
              >
                <MailIcon sx={{ mr: 1 }} />
                <Typography
                  variant="subtitle2"
                  sx={{ cursor: "pointer" }}
                  onClick={() => window.open("mailto:support@ncpli.com")}
                >
                  support@ncpli.com
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: isSmDown ? "center" : "flex-start",
                  marginTop: 1,
                }}
              >
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography
                  variant="subtitle2"
                  sx={{ cursor: "pointer" }}
                  onClick={() => window.open("tel:7305023014")}
                >
                  +91 7305023014, +91 9791509522
                </Typography>
              </Box>
            </SubContainerItem>
          </AnimationOnScroll>

        </SubContainer>
      </BGColor>

      {/* FOOTER BOTTOM */}
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "rgba(12, 12, 12, 0.9)",
          padding: "8px 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontFamily: Fonts.MAIN_FONT,
            fontSize: "0.8rem",
          }}
        >
          © {new Date().getFullYear()} | All rights reserved | Netcom Computers Pvt Ltd
        </Typography>
      </Box>
    </MainContainer>
  );
}
