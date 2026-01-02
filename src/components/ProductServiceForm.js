
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
const bgImage =
  process.env.PUBLIC_URL +
  "/assets/productserviceform/productserviceform.jpg";

// 🌈 Background Wrapper
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
  position: "relative",
  overflow: "hidden",
}));

// ✔ WHITE TextField (underline-only) — FIXED VERSION
const UnderlineTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent",
    "& fieldset": { border: "none" },
  },
  "& .MuiInputBase-input": {
    borderBottom: "2px solid rgba(255,255,255,1)",
    padding: "8px 0 !important",
    color: "#fff",
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

export default function ProductServiceForm() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) newErrors[key] = "This field is required";
    });

    if (formData.email && !formData.email.endsWith("@gmail.com")) {
      newErrors.email = "Email must end with @gmail.com";
    }

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
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Mail failed");
      }
    })
    .catch((err) => {
      console.error("Mail error:", err);
      alert("Mail sending failed. Check backend.");
    });
}

  };

  return (
    <GradientWrapper>
      {/* overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.55)",
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
          maxWidth: "900px",
          color: "#fff",
          zIndex: 2,
        }}
      >
        {/* ---------------- HEADING SECTION ---------------- */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: 6,
            alignItems: "center",
            textAlign: { xs: "center", sm: "center", md: "left" },
          }}
        >
          {/* LEFT SIDE HEADING */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "700",
                color: "#fff",
                fontSize: {
                  xs: "2rem",
                  sm: "2.4rem",
                  md: "2.8rem",
                  lg: "3rem",
                },
                lineHeight: 1.2,
              }}
            >
              Need this Product?
              <br />
              Contact Us
            </Typography>
          </Grid>

          {/* RIGHT SIDE DESCRIPTION */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.05rem",
                  md: "1.15rem",
                  lg: "1.2rem",
                },
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              If you like and want this product, feel free to contact us.
              We can add/update new features & design changes based on your need.
              <br />
              <br />
              Mail: hr@ncpli.com
              <br />
              Call: +91 7397730950
            </Typography>
          </Grid>
        </Grid>

        {/* ---------------- FORM SECTION ---------------- */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
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
              value={formData[field]}
              onChange={handleChange}
              multiline={field === "message"}
              rows={field === "message" ? 3 : 1}
              sx={{ mb: 4 }}
              error={Boolean(errors[field])}
              helperText={
                errors[field] && (
                  <Typography sx={{ color: "#ff4d4d", fontSize: "0.85rem" }}>
                    {errors[field]}
                  </Typography>
                )
              }
            />
          ))}

          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "50%",
                backgroundColor: "rgba(239, 245, 247, 0.95)",
                color: "#111111ff",
                borderRadius: "25px",
                py: 1,
                border: "2px solid #fff",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0a0a0aff",
                  color: "#faf8f8ff",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>

      {/* SUCCESS MESSAGE */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success">Thanks for contacting us!</Alert>
      </Snackbar>
    </GradientWrapper>
  );
}
