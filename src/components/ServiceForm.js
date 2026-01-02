// ✅ src/components/ServiceForm.js
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  useMediaQuery,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { motion } from "framer-motion";
import axios from "axios";

// 🌄 Background image path
const bgImage = process.env.PUBLIC_URL + "/assets/serviceform/serviceform.jpg";

// 🌈 Background Wrapper (Image)
const GradientWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(5, 3),
  fontFamily: "Poppins, sans-serif",
  position: "relative",
  overflow: "hidden",
}));

// 💬 Underline-only TextField (transparent bg + white text)
const UnderlineTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent",
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
  },
  "& .MuiInputBase-input": {
    borderBottom: "2px solid rgba(255,255,255,0.8)",
    padding: "10px 0",
    color: "#fff",
    backgroundColor: "transparent",
    outline: "none",
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
    WebkitTextFillColor: "#fff !important",
    caretColor: "#fff !important",
    transition: "background-color 5000s ease-in-out 0s",
  },
  "& textarea:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
    WebkitTextFillColor: "#fff !important",
    caretColor: "#fff !important",
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.8)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "rgba(255,255,255,0.6)",
  },
}));

export default function ServiceForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 📱 Phone: only digits + max 10
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return; // digits only
      if (value.length > 10) return; // max 10
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 🚫 Prevent reload

    const newErrors = {};

    // ✅ Empty check
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });

    // ✅ Email validation
    if (formData.email && !formData.email.endsWith("@gmail.com")) {
      newErrors.email = "Email must end with @gmail.com";
    }

    // ✅ Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      axios
        .post("http://localhost:3001/api/send", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        })
        .then((res) => {
          if (res.data.ok) {
            setSuccess(true);
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          } else {
            alert("Mail sending failed");
          }
        })
        .catch((err) => {
          console.error("Mail error:", err);
          alert("Backend error. Mail not sent.");
        });
    }
  };

  return (
    <GradientWrapper>
      {/* 🔲 Optional Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          width: "100%",
          maxWidth: "850px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "center" },
          justifyContent: { xs: "center", md: "center" },
          textAlign: { xs: "center", md: "left" },
          zIndex: 2,
        }}
      >
        {/* 🟣 Heading Row */}
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{
            mb: 6,
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          {/* Left - Heading */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "flex-start",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "2.8rem",
                  lg: "3rem",
                  xl: "3.2rem",
                },
                lineHeight: 1.2,
              }}
            >
              Get In Touch
            </Typography>
          </Grid>

          {/* Right - Subheading */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "flex-start",
              textAlign: { xs: "center", md: "right" },
              mt: { xs: 2, sm: 2, md: 0 },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.1rem",
                  lg: "1.25rem",
                  xl: "1.3rem",
                },
                lineHeight: 1.6,
                maxWidth: { xs: "90%", sm: "80%", md: "100%" },
              }}
            >
              We will take approximately 3–5 working days to respond to your
              enquiry.
            </Typography>
          </Grid>
        </Grid>

        {/* 📝 Form Fields */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            maxWidth: "420px",
            mx: "auto",
          }}
        >
          {["name", "email", "phone", "message"].map((field) => (
            <UnderlineTextField
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              fullWidth
              variant="outlined"
              value={formData[field]}
              onChange={handleChange}
              multiline={field === "message"}
              rows={field === "message" ? 3 : 1}
              sx={{ mb: 4 }}
              error={Boolean(errors[field])}
              inputProps={
                field === "phone" ? { maxLength: 10, inputMode: "numeric" } : {}
              }
              helperText={
                errors[field] && (
                  <Typography sx={{ color: "#ff4d4d", fontSize: "0.85rem" }}>
                    {errors[field]}
                  </Typography>
                )
              }
            />
          ))}

          {/* 🔘 Submit Button */}
          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "50%",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "25px",
                py: 0.8,
                border: "2px solid #fff",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ✅ Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thanks for contacting us!
        </Alert>
      </Snackbar>
    </GradientWrapper>
  );
}
