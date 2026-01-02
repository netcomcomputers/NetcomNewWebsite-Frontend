import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import CareerDataList from "../data/CareerDataList";
import { useNavigate } from "react-router-dom";

const CareerSection = styled(Box)(({ theme }) => ({
  background: `
    repeating-linear-gradient(
      135deg,
      #f7f9fb,
      #f7f9fb 40px,
      #e6eef2 40px,
      #e6eef2 80px
    )
  `,
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 0",
  marginTop: 0,
  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
    padding: "20px 0",
  },
}));

const CareerRow = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  justifyContent: "center",
  width: "85%",
  gap: "40px",
  marginBottom: "60px",
  [theme.breakpoints.down("lg")]: {
    width: "90%",
    gap: "35px",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    textAlign: "center",
    gap: "30px",
    marginBottom: "40px",
  },
}));

const CareerText = styled("div")(({ theme }) => ({
  color: "#1e2a35",
  "& h2": {
    fontSize: "2.4rem",
    fontWeight: 800,
    color: "#0a0a0aff",
    marginBottom: "12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.9rem",
    },
  },
  "& p": {
    fontSize: "1.3rem",
    lineHeight: 1.6,
    color: "#344955",
    fontWeight: 500,
    maxWidth: "580px",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
    },
  },
}));

const CareerImageBox = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "400px",
  clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
  overflow: "hidden",
  borderRadius: "15px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.02)",
  },
  [theme.breakpoints.down("lg")]: {
    height: "400px",
  },
  [theme.breakpoints.down("md")]: {
    height: "320px",
    clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
  },
  [theme.breakpoints.down("sm")]: {
    height: "260px",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%)",
  },
}));

const LearnMoreButton = styled(Button)({
  backgroundColor: "#2e7d32",
  color: "#fff",
  fontWeight: 600,
  marginTop: "20px",
  padding: "10px 28px",
  borderRadius: "25px",
  fontSize: "1rem",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#000",
  },
});

const JobRoleSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#e8f5e9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "60px 0",
  [theme.breakpoints.down("md")]: {
    padding: "40px 0",
  },
}));

const SectionDivider = styled("div")(({ theme }) => ({
  width: "80%",
  height: "2px",
  margin: "30px auto",
  background: "linear-gradient(90deg, transparent, #130253ff, transparent)",
  opacity: 0.6,

  [theme.breakpoints.down("md")]: {
    width: "88%",
    margin: "25px auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "92%",
    margin: "22px auto",
  },
}));

const Career = () => {
  const navigate = useNavigate();

  return (
    <>
      <CareerSection>
        <CareerRow>
          <CareerText
            sx={{
              paddingLeft: { xl: "80px", lg: "60px", md: "30px", sm: "0px" },
              textAlign: { md: "center", sm: "center" },
              margin: { sm: "auto" },
            }}
          >
            <Typography variant="h2">Join Our Team</Typography>
            <Typography variant="body1">
              At Netcom, we believe that innovation starts with people who are
              passionate, curious, and driven to make a difference. We’re
              looking for creative minds to help us shape the future of
              technology education and digital solutions. Grow your career with
              us — where ideas matter and teamwork drives success.
            </Typography>
          </CareerText>

          <CareerImageBox>
            <img src="/assets/career/career1.jpg" alt="Career Opportunities" />
          </CareerImageBox>
        </CareerRow>
      </CareerSection>

      <JobRoleSection>
        <CareerRow>
          <CareerImageBox>
            <img src="/assets/career/career2.jpg" alt="Editor Role" />
          </CareerImageBox>

          <CareerText>
            <Typography variant="h2">Job Role: Editor</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Skills Required:</strong> Editing & Visual Effects
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              <strong>Qualification:</strong> Any Degree or Diploma
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              <strong>Location:</strong> Tirunelveli & Chennai
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 3, color: "#0a5c75", fontWeight: 600 }}
            >
              Be part of our creative team, crafting visually stunning and
              impactful stories that connect with audiences worldwide.
            </Typography>
            <LearnMoreButton
              onClick={() =>
                navigate("/careerdetails", {
                  state: { details: CareerDataList[0].details },
                })
              }
            >
              Details
            </LearnMoreButton>
          </CareerText>
        </CareerRow>
      </JobRoleSection>
      <SectionDivider />

      <JobRoleSection>
        <CareerRow>
          <CareerText>
            <Typography variant="h2">Job Role: Web Developer</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Experience:</strong> 1 Year
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              <strong>Qualification:</strong> Any Degree in Engineering
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              <strong>Location:</strong> Tirunelveli & Chennai
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 3, color: "#0a5c75", fontWeight: 600 }}
            >
              Develop modern, scalable, and high-performance web applications as
              part of a collaborative and innovative development team.
            </Typography>
            <LearnMoreButton
              onClick={() =>
                navigate("/careerdetails", {
                  state: { details: CareerDataList[1].details },
                })
              }
            >
              Details
            </LearnMoreButton>
          </CareerText>

          <CareerImageBox>
            <img src="/assets/career/career3.jpg" alt="Web Developer Role" />
          </CareerImageBox>
        </CareerRow>
      </JobRoleSection>
      <SectionDivider />

      <JobRoleSection>
        <CareerRow>
          <CareerImageBox>
            <img
              src="/assets/career/career4.jpg"
              alt="Digital Marketing Role"
            />
          </CareerImageBox>

          <CareerText>
            <Typography variant="h2">
              Job Role: Digital Marketing & Marketing Executive
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Experience:</strong> 1 - 2 Years
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              <strong>Qualification:</strong> PG in Digital Marketing
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              <strong>Location:</strong> Tirunelveli & Chennai
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 3, color: "#0a5c75", fontWeight: 600 }}
            >
              Drive online engagement and brand awareness through strategic
              campaigns, SEO, and creative marketing initiatives.
            </Typography>
            <LearnMoreButton
              onClick={() =>
                navigate("/careerdetails", {
                  state: { details: CareerDataList[2].details },
                })
              }
            >
              Details
            </LearnMoreButton>
          </CareerText>
        </CareerRow>
      </JobRoleSection>
      <SectionDivider />

      <JobRoleSection>
        <CareerRow>
          <CareerText>
            <Typography variant="h2">Job Role: Hardware Engineer</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Experience:</strong> Fresher / Experienced
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              <strong>Qualification:</strong> B.Sc IT, CS or Diploma
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              <strong>Location:</strong> Tirunelveli & Chennai
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 3, color: "#0a5c75", fontWeight: 600 }}
            >
              Work on hardware systems, diagnostics, and troubleshooting to
              ensure robust and efficient performance for all technical
              operations.
            </Typography>
            <LearnMoreButton
              onClick={() =>
                navigate("/careerdetails", {
                  state: { details: CareerDataList[3].details },
                })
              }
            >
              Details
            </LearnMoreButton>
          </CareerText>

          <CareerImageBox>
            <img
              src="/assets/career/career5.jpg"
              alt="Hardware Engineer Role"
            />
          </CareerImageBox>
        </CareerRow>
      </JobRoleSection>
    </>
  );
};

export default Career;
