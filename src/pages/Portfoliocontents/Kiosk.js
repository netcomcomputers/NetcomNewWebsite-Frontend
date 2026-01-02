import React from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const kioskImage = [
  {
    img: "/assets/portfoliopageimages/kioskimage/kiosk1.webp",
    text: "Salem-Kunnur School",
  },
  {
    img: "/assets/portfoliopageimages/kioskimage/kiosk2.webp",
    text: "Thanjavur-Nalladai",
  },
  {
    img: "/assets/portfoliopageimages/kioskimage/kiosk3.webp",
    text: "Villupuram-Sankarapuram School",
  },
  {
    img: "/assets/portfoliopageimages/kioskimage/kiosk4.webp",
    text: "GTR School",
  },
  {
    img: "/assets/portfoliopageimages/kioskimage/kiosk5.webp",
    text: "Erode-Kongadai School",
  },
  {
    img: "/assets/portfoliopageimages/kioskimage/kiosk6.webp",
    text: "Dharmapuri-Sitheri School",
  },
  {
    img: "/assets/portfoliopageimages/kioskimage/kiosk7.webp",
    text: "Covai-Muttathuvayal School",
  },
  {
    img: "/assets/portfoliopageimages/kioskimage/kiosk8.webp",
    text: "Sevvapet Girls School",
  },
  {
    img: "/assets/portfoliopageimages/kioskimage/kiosk9.webp",
    text: "ADW 100 School",
  },
];

const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
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

const Kiosk = () => {
  return (
    <PageWrapper>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#7B3F00",
            mb: 1,
            textShadow: "2px 2px 4px rgba(255,255,255,0.6)",
          }}
        >
          Kiosk
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "#8B4513",
            maxWidth: 700,
            mb: 5,
            fontWeight: 500,
            textShadow: "1px 1px 2px rgba(255,255,255,0.4)",
          }}
        >
          Our Kiosk installations bring digital learning to schools across Tamil
          Nadu, creating engaging and interactive experiences for students.
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "1300px" }}
      >
        {kioskImage.map((item, index) => (
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
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%", maxWidth: "400px" }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                  backgroundColor: "#fffaf3",
                  transition: "transform 0.3s",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(200,100,0,0.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "16/14",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.text}
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
                      "linear-gradient(90deg, #ffecb3 0%, #ffe0b2 100%)",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      color: "#7B3F00",
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
          color: "#ffcc80",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        🌞
      </motion.div>
    </PageWrapper>
  );
};

export default Kiosk;
