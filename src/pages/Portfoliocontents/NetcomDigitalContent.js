import React from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const digitalContent = [
  {
    img: "/assets/portfoliopageimages/digitalcontentimage/dg1.webp",
    text: "Sevvapet Girls School",
  },
  {
    img: "/assets/portfoliopageimages/digitalcontentimage/dg2.webp",
    text: "Erode-Kongadai School",
  },
  {
    img: "/assets/portfoliopageimages/digitalcontentimage/dg3.webp",
    text: "Villupuram-Sankarapuram School",
  },
  {
    img: "/assets/portfoliopageimages/digitalcontentimage/dg4.webp",
    text: "Salem-Kunnur School",
  },
  {
    img: "/assets/portfoliopageimages/digitalcontentimage/dg5.webp",
    text: "Thanjavur-Nalladai",
  },
  {
    img: "/assets/portfoliopageimages/digitalcontentimage/dg6.webp",
    text: "GTR School",
  },
];

const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #ffe6f0 0%, #ffccdf 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(8, 3),
  position: "relative",
  overflow: "hidden",
}));

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const NetcomDigitalContent = () => {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#ad1457",
            mb: 1,
            textShadow: "2px 2px 4px rgba(255,255,255,0.6)",
          }}
        >
          Netcom Digital Content
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "#880e4f",
            maxWidth: 700,
            mb: 5,
            fontWeight: 500,
            textShadow: "1px 1px 2px rgba(255,255,255,0.4)",
          }}
        >
          Our digital content program empowers students with interactive,
          multimedia learning experiences that enhance engagement and
          understanding.
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "1300px" }}
      >
        {digitalContent.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              style={{ width: "100%", maxWidth: "380px" }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                  backgroundColor: "#fff0f5",
                  transition: "transform 0.3s",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(255,105,180,0.4)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "16/13",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.text}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      "&:hover": { transform: "scale(1.08)" },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    p: 2,
                    textAlign: "center",
                    background:
                      "linear-gradient(90deg, #ffc1e3 0%, #ffb6c1 100%)",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      color: "#ad1457",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        style={{
          position: "absolute",
          bottom: 40,
          right: 60,
          fontSize: "8rem",
          color: "#ff80ab",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        🌷
      </motion.div>
    </PageWrapper>
  );
};

export default NetcomDigitalContent;
