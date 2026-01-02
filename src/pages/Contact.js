import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import axios from "axios";

const ContactWrapper = styled(Box)(() => ({
  background: "linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowX: "hidden",
}));

const MapSection = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "45vh",
  [theme.breakpoints.down("sm")]: { height: "40vh" },
  overflow: "hidden",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  position: "relative",
  borderRadius: "0 0 20px 20px",
}));

const MapOverlay = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  zIndex: 5,
  background:
    "rgba(0,0,0,0.3) url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2220%22 fill=%22white%22 font-family=%22Arial%22>Use Ctrl + Scroll to zoom the map</text></svg>') center no-repeat",
  backgroundSize: "contain",
  cursor: "grab",
  transition: "opacity 0.3s ease",
  opacity: 0,
  "&:hover": { opacity: 1 },
}));

const FormCard = styled(motion(Box))(({ theme }) => ({
  background: "#fff",
  borderRadius: "20px",
  boxShadow: "0 10px 35px rgba(0,0,0,0.15)",
  padding: "45px 35px",
  width: "78%",
  margin: "auto",
  marginTop: "-70px",
  position: "relative",
  zIndex: 10,
  [theme.breakpoints.down("lg")]: { width: "85%", padding: "40px 30px" },
  [theme.breakpoints.down("md")]: { width: "90%", padding: "35px 25px" },
  [theme.breakpoints.down("sm")]: {
    width: "96%",
    padding: "30px 20px",
    marginTop: "-60px",
  },
}));

const UnderlineTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" } },
  "& .MuiInputBase-input": {
    borderBottom: "2px solid #f4b400",
    paddingBottom: "6px",
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: { fontSize: "1.05rem" },
    [theme.breakpoints.up("lg")]: { fontSize: "1.1rem" },
    [theme.breakpoints.up("xl")]: { fontSize: "1.15rem" },
  },
  "& label": {
    fontSize: "0.9rem",
    [theme.breakpoints.up("md")]: { fontSize: "1rem" },
    [theme.breakpoints.up("lg")]: { fontSize: "1.05rem" },
  },
  "& label.Mui-focused": { color: "#f4b400" },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
    WebkitTextFillColor: "#000 !important",
    transition: "background-color 5000s ease-in-out 0s",
  },
}));

const Address = [
  {
    branch: "Head Office",
    address:
      "No. 1/1, Nathan Street, Adaikalapuram, Trivandrum Road, Palayamkottai, Tirunelveli-627002",
    mail: "hr@ncpli.com",
    contact: "+91 7397730950, +91 7397730945",
  },
  {
    branch: "Branch Office",
    address:
      "No. 86, First Floor, Chamiers Road, Chennai - 600018, Tamil Nadu, India.",
    mail: "hr@ncpli.com",
    contact: "044 - 4212 5369",
  },
];

export default function Contact() {
  const [submitBar, setSubmitBar] = useState(false);
  const [mapScroll, setMapScroll] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "phone") {
    // digits mattum allow, max 10
    const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);
    setForm({ ...form, phone: onlyNumbers });
    setErrors({ ...errors, phone: "" });
    return;
  }

  setForm({ ...form, [name]: value });
  setErrors({ ...errors, [name]: "" });
};


  const validateForm = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Please enter your name";
    if (!form.email) newErrors.email = "Please enter your email";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.phone) newErrors.phone = "Please enter your phone number";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!form.subject) newErrors.subject = "Please enter your subject";
    if (!form.message) newErrors.message = "Please enter your message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        const res = await axios.post("http://localhost:3001/api/send", {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: `${form.subject}\n\n${form.message}`,
        });

        if (res.data.ok) {
          setForm({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setSubmitBar(true);
        } else {
          alert("Mail failed: " + res.data.error);
        }
      } catch (err) {
        console.error("Error sending mail:", err);
        alert("Something went wrong! Check console for details.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <ContactWrapper>
      <MapSection
        onClick={() => setMapScroll(!mapScroll)}
        onMouseLeave={() => setMapScroll(false)}
      >
        {!mapScroll && <MapOverlay />}
        <iframe
          src="https://www.google.com/maps?q=Netcom+Computers+Pvt+Ltd,+No.+1/1,+Nathan+Street,+Adaikalapuram,+Trivandrum+Road,+Palayamkottai,+Tirunelveli,+Tamil+Nadu+627002&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Netcom Computers Pvt Ltd Location"
        />
      </MapSection>

      <FormCard
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            color: "#f4b400",
            mb: 4,
            textTransform: "uppercase",
          }}
        >
          Contact Us
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 1, sm: 2, md: 3 },
              alignItems: { xs: "center", md: "center" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
                width: "100%",
                maxWidth: { xs: "95%", sm: "90%", md: "85%" },
              }}
            >
              <UnderlineTextField
                fullWidth
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
              <UnderlineTextField
                fullWidth
                label="Your Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <UnderlineTextField
                fullWidth
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
              <UnderlineTextField
                fullWidth
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                error={!!errors.subject}
                helperText={errors.subject}
              />
              <UnderlineTextField
                fullWidth
                multiline
                rows={3}
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
              />

              <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                disabled={loading}
                sx={{
                  mt: 2,
                  py: 1.3,
                  fontSize: "1rem",
                  backgroundColor: "#f4b400",
                  fontWeight: 600,
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#e6a700",
                    transform: loading ? "none" : "scale(1.03)",
                  },
                }}
              >
                {loading ? "Sending..." : "Send"}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                backgroundColor: "#000",
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: "12px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: { xs: "100%", md: "90%" },
                ml: { xs: 0, md: "auto" },
                minHeight: { md: "520px", lg: "560px" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#f4b400",
                  fontWeight: 700,
                  mb: 3,
                  textTransform: "uppercase",
                  letterSpacing: 0.8,
                }}
              >
                Our Offices
              </Typography>

              {Address.map((obj, idx) => (
                <Box
                  key={idx}
                  sx={{
                    mb: 4,
                    borderBottom: "1px solid #333",
                    pb: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: "#fff",
                      mb: 1,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    {obj.branch}
                  </Typography>

                  <Box sx={{ display: "flex", mt: 1 }}>
                    <HomeIcon sx={{ color: "#f4b400", mr: 1, fontSize: 20 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ddd",
                        lineHeight: 1.5,
                        flex: "1 1 100%",
                        wordBreak: "break-word",
                      }}
                    >
                      {obj.address}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", mt: 1 }}>
                    <MailIcon sx={{ color: "#f4b400", mr: 1, fontSize: 20 }} />
                    <Typography
  variant="body2"
  sx={{ color: "#3873FD" }}
>
  <a
    href={`mailto:${obj.mail}`}
    style={{ color: "#3873FD", textDecoration: "none" }}
  >
    {obj.mail}
  </a>
</Typography>

                  </Box>

                  <Box sx={{ display: "flex", mt: 1 }}>
                    <PhoneIcon sx={{ color: "#f4b400", mr: 1, fontSize: 20 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#3873FD",
                        cursor: "pointer",
                      }}
                    >
                      <a
    href={`mailto:${obj.mail}`}
    style={{ color: "#3873FD", textDecoration: "none" }}
  >
    {obj.contact}
  </a>
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </FormCard>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={submitBar}
        autoHideDuration={3000}
        onClose={() => setSubmitBar(false)}
      >
        <SnackbarContent
          sx={{ backgroundColor: "#f4b400", color: "#fff" }}
          message="Thanks for contacting us!"
        />
      </Snackbar>
    </ContactWrapper>
  );
}
