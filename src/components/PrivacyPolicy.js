import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// 🌿 Container for the entire page
const Container = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  fontFamily: "'Noto Sans', sans-serif",
  color: "#121212",
  minHeight: "100vh",
  padding: "80px 10%",
  [theme.breakpoints.down("md")]: {
    padding: "60px 7%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 5%",
  },
}));

// 🌿 Section Block
const SectionBlock = styled(Box)(({ theme }) => ({
  marginBottom: "60px",
}));

// 🌿 Heading style
const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: "#111",
  marginBottom: "20px",
  textAlign: "left",
  fontSize: "2.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.7rem",
  },
}));

// 🌿 Subheading style
const SubHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#111",
  marginBottom: "10px",
  fontSize: "1.8rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
}));

// 🌿 Normal text
const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  color: "#121212",
  fontSize: "1.25rem",
  lineHeight: 1.8,
  marginBottom: "15px",
  textAlign: "justify",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export default function PrivacyPolicy() {
  return (
    <Container>
      <SectionBlock>
        <Heading>Privacy Policy</Heading>
        <Text>
          Welcome to Netcom Computer Private Limited. We respect your privacy and are committed
          to protecting your personal information. This Privacy Policy explains how we collect,
          use, and share your information when you visit our website.
        </Text>
      </SectionBlock>

      <SectionBlock>
        <SubHeading>Who We Are</SubHeading>
        <Text>
          Our company name is Netcom Computer Private Limited. Our website address is:{" "} https://ncpli.com.
        </Text>
      </SectionBlock>

      <SectionBlock>
        <SubHeading>Comments</SubHeading>
        <Text>
          When visitors leave comments on our site, we collect the data shown in the comments form,
          along with the visitor’s IP address and browser user agent string for spam detection.
        </Text>
        <Text>
          An anonymized string (hash) of your email may be provided to Gravatar to see if you are
          using it. Your profile picture may be visible to the public after approval of your comment.
        </Text>
      </SectionBlock>

      <SectionBlock>
        <SubHeading>Media</SubHeading>
        <Text>
          If you upload images to our website, please avoid including location data (EXIF GPS) in
          images. Visitors can download and extract location data from images on the website.
        </Text>
      </SectionBlock>

      <SectionBlock>
        <SubHeading>Cookies</SubHeading>
        <Text>
          If you leave a comment on our site, you may opt-in to saving your name, email, and
          website in cookies. These are for convenience, and will last one year.
        </Text>
        <Text>
          If you visit our login page, a temporary cookie is set to determine if your browser
          accepts cookies. Login cookies last two days, and screen options cookies last one year.
          Selecting "Remember Me" extends login persistence to two weeks.
        </Text>
        <Text>
          If you edit or publish an article, an additional cookie stores the post ID of the article
          you just edited and expires after 1 day.
        </Text>
      </SectionBlock>

      <SectionBlock>
        <SubHeading>Embedded Content from Other Websites</SubHeading>
        <Text>
          Articles may include embedded content such as videos, images, and other articles. These
          websites may collect data about you, use cookies, embed third-party tracking, and monitor
          your interaction with the content.
        </Text>
      </SectionBlock>

      <SectionBlock>
        <SubHeading>Who We Share Your Data With</SubHeading>
        <Text>
          If you request a password reset, your IP address will be included in the reset email.
        </Text>
      </SectionBlock>

      <SectionBlock>
        <SubHeading>How Long We Retain Your Data</SubHeading>
        <Text>
          Comments and metadata are retained indefinitely to recognize and approve follow-up
          comments automatically. Registered users’ personal information is stored in their user
          profiles. Users can see, edit, or delete their personal information at any time. Website
          administrators may also edit this information.
        </Text>
      </SectionBlock>

      <SectionBlock>
        <SubHeading>What Rights You Have Over Your Data</SubHeading>
        <Text>
          If you have an account or have left comments, you may request a copy of your personal
          data or request its deletion. This excludes any data required for administrative, legal,
          or security purposes.
        </Text>
      </SectionBlock>

      <SectionBlock>
        <SubHeading>Where We Send Your Data</SubHeading>
        <Text>
          Visitor comments may be checked through an automated spam detection service.
        </Text>
      </SectionBlock>
    </Container>
  );
}
