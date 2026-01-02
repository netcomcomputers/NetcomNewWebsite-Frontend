import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

  const float1 = keyframes`
    0% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-25px) scale(1.05); }
    100% { transform: translateY(0px) scale(1); }
  `;

  const PageWrapper = styled("div")(() => ({
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "10px",
    backgroundImage: `
      linear-gradient(
        rgba(0, 0, 0, 0.45),
        rgba(0, 0, 0, 0.45)
      ),
      url("/assets/about/aboutback.jpg")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    animation: `${gradientAnimation} 15s ease infinite`,
    fontFamily: "'Lato', sans-serif",
  }));

  const Container = styled("div")(({ theme }) => ({
    display: "flex",
    width: "75%",
    height: "75vh",
    borderRadius: "20px",
    overflow: "hidden",
    background: "transparent",
    transition: "all 0.4s ease",
    [theme.breakpoints.down("lg")]: {
      width: "85%",
      height: "80vh",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "90%",
      height: "auto",
    },
  }));

  const ImageSection = styled("div")(({ theme }) => ({
    flex: "1",
    position: "sticky",
    top: 0,
    height: "75vh",
    backgroundImage: "url('/assets/netcomlog.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "70%",
    transition: "all 0.8s ease",
    "&:hover": {
      filter: "brightness(0.8)",
      backgroundSize: "75%",
    },
    [theme.breakpoints.down("md")]: {
      position: "relative",
      height: "260px",
      backgroundSize: "60%",
    },
  }));

  const ContentSection = styled("div")(({ theme }) => ({
    flex: "1",
    padding: "50px 50px",
    height: "75vh",
    overflowY: "auto",
    scrollBehavior: "smooth",
    background: "rgba(0, 0, 0, 0.45)",
    borderRadius: "20px",
    color: "#fff",
    [theme.breakpoints.down("lg")]: {
      padding: "40px 35px",
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
      padding: "30px 25px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "25px 20px",
    },
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "4px",
    },
  }));

  const GreenSection = styled("div")(({ theme }) => ({
    width: "100%",
    minHeight: "85vh",
    background: "linear-gradient(135deg, #a8e6cf, #dcedc1, #a8e6cf)",
    backgroundSize: "200% 200%",
    animation: `${gradientAnimation} 10s ease infinite`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    padding: "80px 20px",
  }));

  const Blob = styled("div")(({ color1, color2, size, top, left }) => ({
    position: "absolute",
    top,
    left,
    width: size,
    height: size,
    borderRadius: "50%",
    background: `radial-gradient(circle at 30% 30%, ${color1}, ${color2})`,
    filter: "blur(90px)",
    opacity: 0.6,
    animation: `${float1} 8s ease-in-out infinite`,
    zIndex: 1,
  }));

  const VisionMissionRow = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "80px",
    width: "85%",
    margin: "auto",
    justifyItems: "center",
    alignItems: "center",
    zIndex: 3,
    [theme.breakpoints.down("lg")]: {
      gap: "60px",
      width: "90%",
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      gap: "50px",
      width: "95%",
    },
  }));

  const CircleBox = styled("div")(({ theme }) => ({
    position: "relative",
    width: "480px",
    height: "480px",
    minHeight: "480px",
    background:
      "linear-gradient(145deg, rgba(15,15,15,0.9), rgba(35,35,35,0.95))",
    color: "#fff",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "30px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.6s ease",
    transformStyle: "preserve-3d",
    zIndex: 3,

    "&::before": {
      content: "''",
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background:
        "conic-gradient(from 90deg, rgba(0,255,200,0.05), transparent 60%)",
      animation: "rotateShimmer 6s linear infinite",
      zIndex: 1,
    },

    "&:hover": {
      transform: "scale(1.03) rotateY(8deg)",
      height: "auto",
      overflow: "visible",
      background:
        "linear-gradient(145deg, rgba(0,0,0,0.95), rgba(15,15,15,0.9))",
      boxShadow: "0 15px 40px rgba(0,255,200,0.3)",
    },

    "& h3": {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#00ffc8",
      marginBottom: "25px",
      zIndex: 2,
    },

    "& .content": {
      opacity: 0,
      transform: "translateY(40px)",
      transition: "all 0.8s ease",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
      maxWidth: "85%",
    },

    "&:hover .content": {
      opacity: 1,
      transform: "translateY(0)",
    },

    "& .content p": {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#e0f7fa",
      lineHeight: 1.9,
    },

    [theme.breakpoints.down("xl")]: {
      width: "440px",
      minHeight: "440px",
    },
    [theme.breakpoints.down("lg")]: {
      width: "400px",
      minHeight: "400px",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
      height: "auto",
      minHeight: "unset",
      padding: "40px 20px",
      overflow: "visible",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "30px 15px",
      "& .content p": {
        fontSize: "1.1rem",
      },
    },

    "@keyframes rotateShimmer": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
  }));

  return (
    <>
      <PageWrapper>
        <Container>
          <ImageSection />
          <ContentSection>
            <Typography
              variant="h4"
              sx={(theme) => ({
                color: "#fff",
                fontWeight: "900",
                marginBottom: 3,
                textAlign: "center",
                fontFamily: "'Lato', sans-serif",
                [theme.breakpoints.down("sm")]: { fontSize: "1.8rem" },
                [theme.breakpoints.up("sm")]: { fontSize: "2.2rem" },
                [theme.breakpoints.up("md")]: { fontSize: "2.4rem" },
                [theme.breakpoints.up("lg")]: { fontSize: "2.6rem" },
              })}
            >
              Welcome to Netcom Computers
            </Typography>

            <Typography
              variant="body1"
              sx={(theme) => ({
                textAlign: "justify",
                color: "#ffffff",
                fontWeight: 600,
                fontFamily: "''Lato', sans-serif'",
                lineHeight: 2,
                marginBottom: 3,
                [theme.breakpoints.down("sm")]: { fontSize: "1.1rem" },
                [theme.breakpoints.up("sm")]: { fontSize: "1.25rem" },
                [theme.breakpoints.up("md")]: { fontSize: "1.35rem" },
                [theme.breakpoints.up("lg")]: { fontSize: "1.3rem" },
              })}
            >
              <strong>Netcom Computers Pvt Ltd</strong> has been a trusted name
              in IT education and solutions since 2004. With innovation and
              excellence at our core, we’ve empowered thousands of students and
              professionals to advance in the fast-evolving world of technology.
            </Typography>

            <Typography
              variant="body1"
              sx={(theme) => ({
                textAlign: "justify",
                color: "#ffffff",
                fontWeight: 700,
                fontFamily: "''Lato', sans-serif'",
                lineHeight: 2,
                marginBottom: 3,
                [theme.breakpoints.down("sm")]: { fontSize: "1.1rem" },
                [theme.breakpoints.up("sm")]: { fontSize: "1.25rem" },
                [theme.breakpoints.up("md")]: { fontSize: "1.35rem" },
                [theme.breakpoints.up("lg")]: { fontSize: "1.3rem" },
              })}
            >
              Our expertise spans software development, corporate training, and
              enterprise IT services. We believe in combining learning with
              real-world application to create professionals ready for the
              challenges of tomorrow.
            </Typography>

            <Typography
              variant="body1"
              sx={(theme) => ({
                textAlign: "justify",
                color: "#ffffff",
                fontWeight: 700,
                fontFamily: "''Lato', sans-serif'",
                lineHeight: 2,
                marginBottom: 3,
                [theme.breakpoints.down("sm")]: { fontSize: "1.1rem" },
                [theme.breakpoints.up("sm")]: { fontSize: "1.25rem" },
                [theme.breakpoints.up("md")]: { fontSize: "1.35rem" },
                [theme.breakpoints.up("lg")]: { fontSize: "1.3rem" },
              })}
            >
              Over these years, the company has earned a reputation that has a
              unique combination of value, trust, and reliability. We have a
              formidable track record and are illustrious for the expertise of
              our team.
            </Typography>

            <Typography
              variant="body1"
              sx={(theme) => ({
                textAlign: "justify",
                color: "#ffffff",
                fontWeight: 700,
                fontFamily: "''Lato', sans-serif'",
                lineHeight: 2,
                marginBottom: 3,
                [theme.breakpoints.down("sm")]: { fontSize: "1.1rem" },
                [theme.breakpoints.up("sm")]: { fontSize: "1.25rem" },
                [theme.breakpoints.up("md")]: { fontSize: "1.35rem" },
                [theme.breakpoints.up("lg")]: { fontSize: "1.3rem" },
              })}
            >
              We deliver reliable outsourcing and product engineering services
              tailored to diverse business needs. With strong domestic and
              international presence, Netcom ensures adaptive, scalable
              solutions. Our offshore team maintains continuous collaboration to
              keep every project on track and customer-focused.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: "800",
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              What we do?
            </Typography>

            <Typography
              variant="body1"
              sx={(theme) => ({
                textAlign: "justify",
                color: "#ffffff",
                fontWeight: 700,
                fontFamily: "''Lato', sans-serif'",
                lineHeight: 2,
                marginBottom: 3,
                [theme.breakpoints.down("sm")]: { fontSize: "1.1rem" },
                [theme.breakpoints.up("sm")]: { fontSize: "1.25rem" },
                [theme.breakpoints.up("md")]: { fontSize: "1.35rem" },
                [theme.breakpoints.up("lg")]: { fontSize: "1.3rem" },
              })}
            >
              Netcom Computers has a team working in many fields of IT industry.
              We have strong foothold in computer education, aided learning,
              software and web solutions, 3D/2D animations, and much more —
              helping shape the next generation of digital transformation.
            </Typography>
          </ContentSection>
        </Container>
      </PageWrapper>

      <GreenSection>
        <Blob
          color1="#00ffcc"
          color2="#006666"
          size="300px"
          top="10%"
          left="10%"
        />
        <Blob
          color1="#99ff99"
          color2="#006600"
          size="350px"
          top="60%"
          left="70%"
        />

        <VisionMissionRow>
          <CircleBox>
            <Typography
              variant="h4"
              sx={{ color: "#a8e6cf", fontWeight: "bold" }}
            >
              Vision
            </Typography>
            <div className="content">
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, color: "#fff" }}
              >
                Netcom is to provide ubiquitous, secure and seamless access to
                information resources in all forms through reliable and robust
                infrastructure.To build better solution for education industry
                through AI and machine learning capabilities in many areas of
                space operations to enable people to empower the knowledge of
                the application of education.
              </Typography>
            </div>
          </CircleBox>

          <CircleBox>
            <Typography
              variant="h4"
              sx={{ color: "#a8e6cf", fontWeight: "bold" }}
            >
              Mission
            </Typography>
            <div className="content">
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, color: "#fff" }}
              >
                To provide best of breed software products to enable
                organization to run their businesss and operations better.To
                deliver effective IT solution and quality services.To enchance
                the competitive advantages of our clients.To maintain a
                sustainable social environment and be a socially responsible
                corporate citizen.
              </Typography>
            </div>
          </CircleBox>
        </VisionMissionRow>
      </GreenSection>
    </>
  );
}
