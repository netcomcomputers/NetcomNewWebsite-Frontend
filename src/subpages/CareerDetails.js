import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SendIcon from "@mui/icons-material/Send";

const Wrapper = styled(Box)(({ theme }) => ({
  padding: "40px 10%",
  backgroundColor: "#f3f7f9",
  minHeight: "100vh",

  [theme.breakpoints.down("md")]: {
    padding: "35px 7%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "25px 5%",
  },
}));

export default function CareerDetails() {
  const location = useLocation();
  const data = location.state?.details;

  if (!data) {
    return (
      <Wrapper>
        <Typography variant="h6" color="red" textAlign="center">
          No details available.
        </Typography>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#074860",
          textAlign: "center",
          mb: 5,
          fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.4rem", lg: "2.6rem" },
        }}
      >
        {data.title}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: "#0b4c63",
          fontSize: { xs: "1.35rem", sm: "1.45rem", md: "1.55rem" },
        }}
      >
        Job Description
      </Typography>

      {data.description.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <ArrowRightIcon
            sx={{ color: "#0a6fae", mt: "4px", mr: 1, fontSize: "25px" }}
          />
          <Typography
            sx={{
              fontSize: { xs: "1.08rem", sm: "1.12rem", md: "1.18rem" },
              lineHeight: 1.75,
              color: "#333",
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}

      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mt: 5,
          mb: 2,
          color: "#0b4c63",
          fontSize: { xs: "1.35rem", sm: "1.45rem", md: "1.55rem" },
        }}
      >
        Skills Required
      </Typography>

      {data.skills.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <CheckCircleIcon
            sx={{
              color: "#1ca85e",
              mt: "4px",
              mr: 1,
              fontSize: "24px",
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "1.08rem", sm: "1.12rem", md: "1.18rem" },
              lineHeight: 1.75,
              color: "#333",
            }}
            dangerouslySetInnerHTML={{ __html: item }}
          ></Typography>
        </Box>
      ))}

      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mt: 5,
          mb: 2,
          color: "#0b4c63",
          fontSize: { xs: "1.35rem", sm: "1.45rem", md: "1.55rem" },
        }}
      >
        Eligibility
      </Typography>

      {data.eligibility.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <FiberManualRecordIcon
            sx={{
              color: "#444",
              mt: "10px",
              mr: 1,
              fontSize: "12px",
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "1.08rem", sm: "1.12rem", md: "1.18rem" },
              lineHeight: 1.75,
              color: "#333",
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}

      <Box sx={{ mt: 6, textAlign: "left" }}>
        <Button
          startIcon={<SendIcon />}
          variant="contained"
          sx={{
            backgroundColor: "#0a6b58ff",
            px: { xs: 2.5, sm: 3, md: 3.5 },
            py: { xs: 0.9, sm: 1, md: 1.1 },
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.95rem" },
            borderRadius: "8px",
            transition: "all 0.25s ease",

            "&:hover": {
              backgroundColor: "#157561",
              transform: "scale(1.05)",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.18)",
            },

            "@media (min-width: 1536px)": {
              px: 4,
              py: 1.2,
              fontSize: "1rem",
            },
          }}
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdzvYzOIqmmAH3hTrFX0ioSb-itU2cus4py_meFNxYuGfg80A/viewform?usp=dialog"
            )
          }
        >
          Apply Now
        </Button>
      </Box>
    </Wrapper>
  );
}
