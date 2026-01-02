import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const imageName = [
  {
    name: "புகைவண்டி",
    imgLink: "/assets/portfoliopageimages/youtube/y1.webp",
    videoLink: "https://www.youtube.com/watch?v=Uz98TQd1U_s",
  },
  {
    name: "Adventures of Tenaliraman",
    imgLink: "/assets/portfoliopageimages/youtube/y2.webp",
    videoLink: "https://www.youtube.com/watch?v=elpnngb_-NM",
  },
  {
    name: "Adventures of Vikramadhityan",
    imgLink: "/assets/portfoliopageimages/youtube/y3.webp",
    videoLink: "https://www.youtube.com/watch?v=0u9WoKh2auI&t=342s",
  },
  {
    name: "சிட்டு",
    imgLink: "/assets/portfoliopageimages/youtube/y4.webp",
    videoLink: "https://youtu.be/Vmq9CDAMjVk?t=113",
  },
  {
    name: "Moral Stories",
    imgLink: "/assets/portfoliopageimages/youtube/y5.webp",
    videoLink: "https://www.youtube.com/watch?v=XEA_ruJZxIE",
  },
  {
    name: "பச்சை கிளி",
    imgLink: "/assets/portfoliopageimages/youtube/y6.webp",
    videoLink: "https://youtu.be/Uz98TQd1U_s?t=63",
  },
  {
    name: "ஆணை",
    imgLink: "/assets/portfoliopageimages/youtube/y7.webp",
    videoLink: "https://youtu.be/Uz98TQd1U_s?t=125",
  },
  {
    name: "வீரன்",
    imgLink: "/assets/portfoliopageimages/youtube/y8.webp",
    videoLink: "https://youtu.be/Uz98TQd1U_s",
  },
  {
    name: "குள்ள வாத்து",
    imgLink: "/assets/portfoliopageimages/youtube/y9.webp",
    videoLink: "https://youtu.be/Vmq9CDAMjVk",
  },
];

const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #ffe6e6 0%, #ffd6d6 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(8, 3),
  overflow: "hidden",
}));

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const YouTubeChannel = () => {
  return (
    <PageWrapper>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#a30000",
            mb: 1,
            textShadow: "2px 2px 4px #fff",
          }}
        >
          🎬 YouTube Channel
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "#5a0000",
            maxWidth: 700,
            mb: 5,
            fontWeight: 500,
            textShadow: "1px 1px 2px rgba(255,255,255,0.5)",
          }}
        >
          Explore our collection of educational and fun Tamil and English
          stories! Click any image below to watch the full video on YouTube.
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          maxWidth: "1300px",
        }}
      >
        {imageName.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%", maxWidth: "380px" }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                  backgroundColor: "#fff",
                  "&:hover": {
                    boxShadow: "0 8px 22px rgba(255,0,0,0.3)",
                  },
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                  onClick={() => window.open(item.videoLink, "_blank")}
                >
                  <Box
                    sx={{
                      width: "100%",
                      aspectRatio: "4/3",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.imgLink}
                      alt={item.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      flexGrow: 1,
                      p: 2,
                      textAlign: "center",
                      background:
                        "linear-gradient(90deg, #ffcccc 0%, #ffe6e6 100%)",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#800000",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1, y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        style={{
          position: "absolute",
          bottom: 30,
          right: 40,
          fontSize: "8rem",
          color: "#ffb3b3",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        🎥
      </motion.div>
    </PageWrapper>
  );
};

export default YouTubeChannel;
