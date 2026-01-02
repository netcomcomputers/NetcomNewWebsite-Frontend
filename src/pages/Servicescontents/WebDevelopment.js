import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ServiceForm from "../../components/ServiceForm";

// 🌆 HERO SECTION
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "72vh",
  width: "100%",
  backgroundImage:
    "url('/assets/services/webdevelopment/webdevelopmentbg1.jpg')",
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
   
  },
}));

const HeroText = styled(motion.div)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  padding: "0 20px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 16px",
  },
}));

// 🌿 CONTENT SECTION
const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  fontFamily: "'Noto Sans', sans-serif",
  color: "#000",
  padding: "90px 10%",
  lineHeight: 1.9,
  [theme.breakpoints.down("md")]: {
    padding: "70px 7%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "50px 5%",
  },
}));

const SectionBlock = styled(Box)(() => ({
  marginBottom: "60px",
}));

// 🌱 SERVICES SECTION
const ServicesWrapper = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #f1f8e9 0%, #e8f5e9 100%)",
  padding: "90px 5%",
  textAlign: "center",
  overflow: "hidden",
  position: "relative",
}));

const ServicesTrack = styled(motion.div)(({ theme }) => ({
  display: "flex",
  gap: "40px",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "nowrap",
  minWidth: "100%",
}));

const ServiceCard = styled(Box)(({ theme }) => ({
  minWidth: "220px",
  maxWidth: "260px",
  background: "#fff",
  borderRadius: "20px",
  padding: "25px 20px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "160px",
    padding: "20px 15px",
  },
}));

const ServiceImg = styled("img")(({ theme }) => ({
  width: "80px",
  height: "80px",
  objectFit: "contain",
  marginBottom: "15px",
  [theme.breakpoints.down("sm")]: {
    width: "60px",
    height: "60px",
  },
}));

const ServiceText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
   fontFamily: "'Noto Sans', sans-serif",
  color: "#2e7d32",
  fontSize: "1.1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
  },
}));

// ✅ Services data (direct links, no import)
const services = [
  {
    imageUrl:
      "/assets/services/webdevelopment/front-end-architecture.svg",
    text: "Front End Architecture & Design",
  },
  {
    imageUrl:
      "/assets/services/webdevelopment/testing-performance.svg",
    text: "Testing & Performance Tuning",
  },
  {
    imageUrl:
      "/assets/services/webdevelopment/responsive.svg",
    text: "Responsive Design",
  },
  {
    imageUrl:
      "/assets/services/webdevelopment/uiuxdesign.svg",
    text: "UI / UX Development",
  },
  {
    imageUrl:
      "/assets/services/webdevelopment/cms-ecommerce.svg",
    text: "CMS & eCommerce Theme Development",
  },
  {
    imageUrl:
      "/assets/services/webdevelopment/javascript-solutions.svg",
    text: "Custom JavaScript Solutions",
  },
];

export default function WebDevelopment() {
  return (
    <>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {/* ===== HERO SECTION ===== */}
        <HeroSection>
          <HeroText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{
  fontWeight: 900,
  fontSize: {
    xs: "1.9rem",   // slightly smaller for xs
    sm: "3rem",
    md: "3.8rem",
    lg: "4.6rem",
    xl: "5rem",
  },
  letterSpacing: { xs: "0.5px", sm: "1px" },
  textTransform: "uppercase",
  background: "white",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "none",
  lineHeight: { xs: 1.25, sm: 1.15 },
  wordBreak: "keep-all",     // ✅ don't break words
  whiteSpace: "normal",       // ✅ allow clean wrapping
  textAlign: { xs: "center", sm: "center" },   // ✅ force center on xs
}}

            >
              Web Application Development
            </Typography>
          </HeroText>
        </HeroSection>

        {/* ===== CONTENT SECTION ===== */}
        <ContentSection>
          <SectionBlock>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontFamily: "'Noto Sans', sans-serif",
                mb: 3,
                color: "#111",
                textAlign: "left",
                fontSize: { xs: "1.9rem", sm: "2.1rem", md: "2.4rem" },
              }}
            >
             Custom Web App Development Services
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontFamily: "'Noto Sans', sans-serif",
                textAlign: "justify",
                fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.35rem" },
                color: "#000",
              }}
            >
              Web Application Development is the creation of application program
              that reside on remote servers and are delivered to the user's
              device over the internet.
              <br />
              <br />
              Netcom development process will typically have a short development
              life-cycle led by a small and efficient development team.
              <br />
              <br />
              Our web development company has been developing web applications
              for the custom business requirements of all our esteemed clients.
              Our developer's skills & experience and cutting-edge technology
              will deliver you with Robust Web Applications.
              <br />
              <br />
              As a leading Web Development company, delivering quality
              applications is always our priority. Discover our wide range of
              services and work with us!
            </Typography>
          </SectionBlock>

          <SectionBlock>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontFamily: "'Noto Sans', sans-serif",
                mb: 3,
                color: "#111",
                textAlign: "left",
                fontSize: { xs: "1.9rem", sm: "2.1rem", md: "2.4rem" },
              }}
            >
              Web Application for your Business
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.35rem" },
              }}
            >
              Businesses from all corners of the world, offering a huge range of
              products, have begun migrating from the physical world of handing
              out leaflets, printing advertisements, and hanging billboards, to
              the digital realm.
              <br />
              <br />
              The business world is evolving every single day, thus increasing
              your competitors and hurdles making it hard to sustain like
              yesterday. So the only solution to stand out in the crowd is by
              attracting clients and new offers through showcasing your work
              style, products, and skills online.
            </Typography>
          </SectionBlock>

          <SectionBlock>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontFamily: "'Noto Sans', sans-serif",
                mb: 3,
               color: "#111",
                textAlign: "left",
                fontSize: { xs: "1.9rem", sm: "2.1rem", md: "2.4rem" },
              }}
            >
              Why to approach Netcom ?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.35rem" },
              }}
            >
              NETCOM will help you in developing your company web application
              that would help increase the pace and scale of your business
              expansion.
              <br />
              <br />
              We will create and customize your website highlighting all the
              services and features of your business firms in a cost-effective
              way.
              <br />
              <br />
              Our strength is our small and highly expert team of Web
              Development Pros, who are in turn complemented by our experience.
            </Typography>
          </SectionBlock>
        </ContentSection>

{/* ===== SERVICES SLIDER SECTION ===== */}
<ServicesWrapper
  sx={{
    background: "linear-gradient(135deg, #522377, #36195B, #080B38, #133155, #254D70)",
    position: "relative",
    overflow: "hidden",
    py: { xs: 6, sm: 8 },
  }}
>

  <Typography
    variant="h4"
    sx={{
      fontWeight: 800,
      fontFamily: "'Noto Sans', sans-serif",
      mb: 6,
      color: "#ffffff",
      textAlign: "center",
      fontSize: { xs: "1.9rem", sm: "2.1rem", md: "2.4rem" },
    }}
  >
    Our Web Development Services
  </Typography>

  {/* 🌿 Smooth continuous scroll */}
  <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
    <motion.div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "40px",
        width: "max-content",
      }}
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 50, // 🐢 slower smooth move
        ease: "linear",
      }}
    >
      {[...services, ...services].map((service, index) => (
        <Box
          key={index}
          sx={{
            flexShrink: 0,
            opacity: 1,
            transition: "opacity 0.5s ease-out",
          }}
        >
          <ServiceCard
            sx={{
              background: "#f5f5f5",
              borderRadius: "20px",
              minWidth: { xs: "200px", sm: "220px", md: "240px", lg: "260px" },
              height: { xs: "160px", sm: "180px", md: "200px", lg: "220px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <ServiceImg
              src={service.imageUrl}
              alt={service.text}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <ServiceText
              sx={{
                color: "#271b5eff",
                fontWeight: 600,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                textAlign: "center",
              }}
            >
              {service.text}
            </ServiceText>
          </ServiceCard>
        </Box>
      ))}
    </motion.div>
  </Box>
  
</ServicesWrapper>




      </Box>
    {/* ===== HOW WE WORK SECTION ===== */}
<Box
  sx={{
    background: "#E6E7E8",
    py: { xs: 6, sm: 8, md: 10 },
    px: { xs: "6%", sm: "8%", md: "10%" },
    textAlign: "center",
  }}
>
  <Typography
    variant="h4"
    sx={{
      fontWeight: 800,
      fontFamily: "'Noto Sans', sans-serif",
      mb: 6,
      color: "#0f0f0fff",
      fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.5rem", lg: "2.7rem" },
      textTransform: "uppercase",
      letterSpacing: "1px",
    }}
  >
    How We Work
  </Typography>

  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "1fr",
        md: "1fr 1fr 1fr", // ✅ 3 per row for md+
      },
      gap: { xs: 5, sm: 6, md: 7 },
      justifyItems: "center",
    }}
  >
    {[
      {
        imageUrl: "/assets/services/webdevelopment/front-end-architecture.svg",
        title: "Analysis",
        text: "We begin with understanding your exact project needs and objectives. This ensures both parties share a clear vision and scope, along with choosing the right technologies for development.",
      },
      {
        imageUrl:"/assets/services/webdevelopment/Desktop_app.svg" ,
        title: "Design",
        text: "We focus on creating user-friendly and visually appealing interfaces that reflect your brand identity. Every detail is planned to provide seamless user experiences.",
      },
      {
        imageUrl: "/assets/services/webdevelopment/responsive.svg",
        title: "Responsive Development",
        text: "Our expert developers bring designs to life through clean and optimized code, ensuring your web app performs smoothly across all devices and screen sizes.",
      },
      {
        imageUrl: "/assets/services/webdevelopment/testing-performance.svg",
        title: "Testing & Bug Fixes",
        text: "Comprehensive testing ensures a stable and error-free experience. We fine-tune performance, fix bugs, and make sure your website runs flawlessly.",
      },
      {
        imageUrl: "/assets/services/webdevelopment/Web Development.svg",
        title: "Deployment",
        text: "After thorough testing, we launch your web application for real-world use. Deployment includes server setup, configuration, and go-live monitoring.",
      },
      {
        imageUrl: "/assets/services/webdevelopment/web.svg",
        title: "Maintenance & Support",
        text: "We continue to support your website with updates, performance monitoring, and security checks, ensuring your platform evolves with your business needs.",
      },
    ].map((step, index) => (
      <Box
        key={index}
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: "95%", lg: "90%" },
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={step.imageUrl}
          alt={step.title}
          sx={{
            width: { xs: 80, sm: 90, md: 100, lg: 110 },
            height: { xs: 80, sm: 90, md: 100, lg: 110 },
            mb: 3,
            objectFit: "contain",
          }}
        />

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontFamily: "'Noto Sans', sans-serif",
            color: "#111",
            mb: 1.5,
            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem", lg: "1.5rem" },
          }}
        >
          {step.title}
        </Typography>

        {/* Underline */}
        <Box
          sx={{
            width: { xs: "60%", sm: "55%", md: "50%", lg: "45%" },
            height: "4px",
            backgroundColor: "#08470bff",
            mb: 3,
            borderRadius: "4px",
          }}
        />

        {/* Text */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem", lg: "1.15rem" },
            fontFamily: "'Noto Sans', sans-serif",
            color: "#2f2f2f",
            textAlign: "justify",
            lineHeight: 1.9,
            width: { xs: "95%", sm: "90%", md: "90%", lg: "85%" },
          }}
        >
          {step.text}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>

{/* 🌳 Timeline / Tree Layout */}
<Box
  sx={{
    position: "relative",
    background: "linear-gradient(135deg, #000000, #006400, #083d08ff)",
    py: { xs: 8, sm: 10, md: 12 },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      width: "4px",
      background: "#a8773fff",
      transform: "translateX(-50%)",
    },
  }}
>
  {[
    {
      title: "Languages",
      items: [
        { name: "HTML", icon: "/assets/services/webdevelopment/mernLogo/HTML.svg" },
        { name: "CSS", icon: "/assets/services/webdevelopment/mernLogo/Css.svg" },
        { name: "JavaScript", icon: "/assets/services/webdevelopment/mernLogo/js.svg" },
      ],
    },
    {
      title: "Front-End",
      items: [
        { name: "React JS", icon: "/assets/services/webdevelopment/mernLogo/reactLogo.svg" },
        { name: "MUI", icon: "/assets/services/webdevelopment/mernLogo/mui.svg" },
      ],
    },
    {
      title: "Back-End",
      items: [
        { name: "Node JS", icon: "/assets/services/webdevelopment/mernLogo/nodeLogo.svg" },
        { name: "Express JS", icon: "/assets/services/webdevelopment/mernLogo/expressLogo.svg" },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: "/assets/services/webdevelopment/mernLogo/mango db.svg" },
        { name: "AWS", icon: "/assets/services/webdevelopment/mernLogo/AWS.svg" },
      ],
    },
  ].map((section, index, array) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        flexDirection: index % 2 === 0 ? "row" : "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        mb: index === array.length - 1 ? 0 : { xs: 6, sm: 8, md: 10 },
        position: "relative",
        // 🟢 keep same structure even for small screens
        [theme => theme.breakpoints.down("sm")]: {
          flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
    >
      {/* Connector dot */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "18px",
          height: "18px",
          background: "#0d0e0dff",
          borderRadius: "50%",
          border: "4px solid #c8e6c9",
          zIndex: 1,
        }}
      />

      {/* Left/Right content */}
      <Box
        sx={{
          width: { xs: "44%", sm: "45%", md: "42%" },
          textAlign: index % 2 === 0 ? "right" : "left",
          display: "flex",
          flexDirection: "column",
          alignItems: index % 2 === 0 ? "flex-end" : "flex-start",
          [theme => theme.breakpoints.down("sm")]: {
            width: "44%", // keep equal distance from center
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontFamily: "'Noto Sans', sans-serif",
            color: "#eaeaeeff",
            mb: 2,
            fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
          }}
        >
          {section.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1.5, sm: 2.5, md: 3 },
            justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
          }}
        >
          {section.items.map((tech, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.8,
                minWidth: { xs: "80px", sm: "85px", md: "100px" },
                flex: "1 1 auto",
              }}
            >
              <Box
                component="img"
                src={tech.icon}
                alt={tech.name}
                sx={{
                  width: { xs: 50, sm: 60, md: 70, lg: 75 },
                  height: { xs: 50, sm: 60, md: 70, lg: 75 },
                  objectFit: "contain",
                  mx: "auto",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
                  color: "#f3eeeeff",
                  textAlign: "center",
                }}
              >
                {tech.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  ))}
</Box>






      {/* ✅ Reusable Service Form */}
      <ServiceForm />
    </>
  );
}
