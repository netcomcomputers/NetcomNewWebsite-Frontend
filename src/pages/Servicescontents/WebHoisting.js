// ✅ src/pages/Servicescontents/WebHoisting.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ServiceForm from "../../components/ServiceForm";

// 🌆 HERO SECTION
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "72vh",
  width: "100%",
  backgroundImage:
    "url('/assets/services/webhoisting/webhoistingbg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.4)",
  },
  [theme.breakpoints.down("md")]: {
    backgroundAttachment: "scroll",
    height: "75vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    padding: "80px 0 100px",
  },
}));

const HeroText = styled(motion.div)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  padding: "0 20px",
}));

// 🌿 CONTENT SECTION
const ContentSection = styled(Box)(({ theme }) => ({
  background: "#E6E7E8",
  color: "#000",
  padding: "90px 10%",
  fontFamily: "'Noto Sans', sans-serif",
  lineHeight: 1.9,
  [theme.breakpoints.down("md")]: {
    padding: "70px 7%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "50px 5%",
  },
}));

const SectionBlock = styled(Box)(() => ({
  marginBottom: "70px",
}));

/* ---------------------------------------------------
   ✅ Reusable styled typography components
   (replaces inline sx for headings/body)
--------------------------------------------------- */
const SectionHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 800,
  marginBottom: "14px",
  color: "#111",
  fontSize: "2.4rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.9rem",
    textAlign: "center",
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 700,
  marginTop: "18px",
  marginBottom: "8px",
  color: "#222",
  fontSize: "1.8rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const BodyParagraph = styled(Typography)(({ theme }) => ({
  fontFamily: "'Noto Sans', sans-serif",
  fontWeight: 400,
  color: "#000",
  textAlign: "justify",
  marginBottom: "18px",
  lineHeight: 1.9,
  fontSize: "1.35rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.15rem",
    textAlign: "left",
  },
}));

/* ---------------------------------------------------
   Bullet list components (replace inline list styles)
--------------------------------------------------- */
const ListWrapper = styled(Box)(({ theme }) => ({
  textAlign: "justify",
  marginTop: "10px",
}));

const Ul = styled("ul")(({ theme }) => ({
  margin: 0,
  padding: 0,
  listStyle: "none",
}));

const Li = styled("li")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  marginBottom: "22px",
  alignItems: "center",
  lineHeight: 1.5,
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "1.25rem",
  color: "#000",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.05rem",
  },
}));

const BulletDot = styled("span")(({ theme }) => ({
  color: "#111",
  fontSize: "1.6rem",
  lineHeight: 1,
}));

// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
export default function WebHoisting() {
  return (
    <>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {/* ===== HERO SECTION ===== */}
        <HeroSection>
          <HeroText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: "2.3rem",
                  sm: "3.2rem",
                  md: "4rem",
                  lg: "4.8rem",
                  xl: "5.3rem",
                },
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#ffffff",
                textShadow: "0 0 25px rgba(0,0,0,0.4)",
                lineHeight: 1.1,
              }}
            >
              Web Hosting Services
            </Typography>
          </HeroText>
        </HeroSection>

        {/* ===== CONTENT SECTION ===== */}
        <ContentSection>
          {/* 🧩 WS Development */}
          <SectionBlock>
            <SectionHeading>WS Development</SectionHeading>

            <BodyParagraph>
              Amazon Web Services is a collection of web services that provides
              on-demand cloud computing platforms and APIs to individuals,
              companies, and governments.
              <br />
              <br />
              Application Nexus has good hand-in experience in Amazon Web
              Services. We have a dedicated team of developers that will help
              you to do all the configuration and optimization of the AWS Cloud
              to meet your business needs. Also, we offer an orderly step-by-step
              strategy for migrating applications to the cloud and monitoring
              the performance of the cloud applications.
            </BodyParagraph>
          </SectionBlock>

          {/* 🧩 Amazon Services */}
          <SectionBlock>
            <SectionHeading>Services Offered By Amazon</SectionHeading>

            {/* Elastic Computing */}
            <SubHeading>Elastic Computing</SubHeading>
            <BodyParagraph>
              An Amazon EC2 instance is a virtual server in Amazon's Elastic
              Compute Cloud (EC2) for running applications on the Amazon Web
              Services (AWS) infrastructure. EC2 encourages scalable deployment
              of applications by providing a web service through which users can
              boot an Amazon Machine Image (AMI) to configure a virtual machine,
              called an "instance", containing any desired software.
              <br />
              <br />
              A user can create, launch, and terminate server-instances as
              needed, paying by the second for active servers – hence the term
              "elastic".
            </BodyParagraph>

            {/* Amazon S3 */}
            <SubHeading>Amazon S3</SubHeading>
            <BodyParagraph>
              Amazon S3 is a high-speed and low-cost service offered by Amazon
              Web Services that provides object storage and archiving of data
              through a web service interface. AWS S3 is highly scalable and
              uses the same storage infrastructure that Amazon.com uses.
              <br />
              <br />
              Amazon S3 offers four different storage classes that offer
              different levels of durability, availability, and performance
              requirements.
            </BodyParagraph>
          </SectionBlock>

          {/* 🧩 Cloud Storage */}
          <SectionBlock>
            <SectionHeading>Cloud Storage Management</SectionHeading>
            <BodyParagraph>
              Cloud Data Management is the practice of storing a company's data
              on an offsite server owned and overseen by a specialized vendor.
              Netcom Cloud Computing is now a standard way to access IT
              infrastructure, software, and hardware resources. They are
              scalable and efficient, offering automated backups, professional
              support, and easy access from any location.
            </BodyParagraph>
          </SectionBlock>

          {/* 🧩 Benefits */}
          <SectionBlock>
            <SectionHeading>Benefits in NETCOM Cloud Services</SectionHeading>

            <ListWrapper>
              <Ul>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Cloud Storage might be more secure.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Zero Maintenance.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Anywhere Access.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Automated Backups.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Pay As You Go Pricing.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Scalability.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Automate data protection.</span>
                </Li>
              </Ul>
            </ListWrapper>
          </SectionBlock>

          {/* 🧩 Server Maintenance */}
          <SectionBlock>
            <SectionHeading>Netcom Server Maintenance Services</SectionHeading>

            <ListWrapper>
              <Ul>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Checking server log files.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Assessing hard disk space.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Examining folder permissions.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Monitoring network temperature applications.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Ensuring adequate redundancy of systems.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Examining security features.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Installing security software patches.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Reading server logs for security alerts or hacking attempts.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Updating antivirus software on all computers.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Updating critical service packs and software updates</span>
                </Li>
              </Ul>
            </ListWrapper>
          </SectionBlock>

          {/* 🧩 Network Maintenance */}
          <SectionBlock>
            <SectionHeading>Netcom Network Maintenance Services</SectionHeading>

            <ListWrapper>
              <Ul>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Troubleshooting network problems.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Hardware and software installation/configuration.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Monitoring and improving network performance.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Planning for future network growth.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Creating network documentation.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Ensuring compliance with company policies & regulations.</span>
                </Li>
                <Li>
                  <BulletDot>•</BulletDot>
                  <span>Securing the network against all kinds of threats.</span>
                </Li>
              </Ul>
            </ListWrapper>
          </SectionBlock>
        </ContentSection>
      </Box>

      {/* ✅ Reusable Form */}
      <ServiceForm />
    </>
  );
}
