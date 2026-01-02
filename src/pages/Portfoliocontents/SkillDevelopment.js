import React from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const skilldevelopmentImage = [
  {
    img: "/assets/portfoliopageimages/skilldevelopment/skill1.webp",
    text: "Salem-Kunnur School",
  },
  {
    img: "/assets/portfoliopageimages/skilldevelopment/skill2.webp",
    text: "Covai-Muttathuvayal School",
  },
  {
    img: "/assets/portfoliopageimages/skilldevelopment/skill3.webp",
    text: "ADW 100 School",
  },
  {
    img: "/assets/portfoliopageimages/skilldevelopment/skill4.webp",
    text: "Villupuram-Sankarapuram School",
  },
  {
    img: "/assets/portfoliopageimages/skilldevelopment/skill5.webp",
    text: "Thanjavur-Nalladai",
  },
  {
    img: "/assets/portfoliopageimages/skilldevelopment/skill6.webp",
    text: "Sevvapet Girls School",
  },
  {
    img: "/assets/portfoliopageimages/skilldevelopment/skill7.webp",
    text: "Erode-Kongadai School",
  },
  {
    img: "/assets/portfoliopageimages/skilldevelopment/skill8.webp",
    text: "GTR School",
  },
];

const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #fdfdfd 0%, #f5f5f5 100%)",
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

const SkillDevelopment = () => {
  return (
    <PageWrapper>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#004d40",
            mb: 1,
            textShadow: "2px 2px 4px rgba(255,255,255,0.6)",
          }}
        >
          Skill Development
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "#00695c",
            maxWidth: 700,
            mb: 5,
            fontWeight: 500,
            textShadow: "1px 1px 2px rgba(255,255,255,0.4)",
          }}
        >
          Our Skill Development programs empower students with hands-on
          experience, technical knowledge, and creativity to face real-world
          challenges.
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "1300px" }}
      >
        {skilldevelopmentImage.map((item, index) => (
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
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                maxWidth: "380px",
                willChange: "transform",
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                  backgroundColor: "#ffffff",
                  transition: "transform 0.3s",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(0,100,100,0.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "16/12",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.text}
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
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
                      "linear-gradient(90deg, #e0f2f1 0%, #b2dfdb 100%)",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      color: "#004d40",
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
          color: "#a7ffeb",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        ⚙️
      </motion.div>
    </PageWrapper>
  );
};

export default SkillDevelopment;
