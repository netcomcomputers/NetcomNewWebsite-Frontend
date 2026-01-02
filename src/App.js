import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Career from "./pages/Career";
import Portfolio from "./pages/PortFolio";
import NetcomSmartClass from "./pages/Portfoliocontents/NetcomSmartClass";
import YouTubeChannel from "./pages/Portfoliocontents/YouTubeChannel";
import Kiosk from "./pages/Portfoliocontents/Kiosk";
import NetcomDigitalContent from "./pages/Portfoliocontents/NetcomDigitalContent";
import SkillDevelopment from "./pages/Portfoliocontents/SkillDevelopment";
import WebDevelopment from "./pages/Servicescontents/WebDevelopment";
import GraphicDesign from "./pages/Servicescontents/GraphicDesign";
import EcontentDevelopment from "./pages/Servicescontents/EcontentDevelopment";
import ShortFilm from "./pages/Servicescontents/ShortFilm";
import HardwareSupport from "./pages/Servicescontents/HardwareSupport";
import MobileDevelopment from "./pages/Servicescontents/MobileDevelopment";
import WebHoisting from "./pages/Servicescontents/WebHoisting";
import CustomizedDevelopment from "./pages/Servicescontents/CustomizedDevelopment";
import CloudMaintainance from "./pages/Servicescontents/CloudMaintainance";
import SmartTailorShop from "./pages/Productscontent/SmartTailorShop";
import OnlineCabBooking from "./pages/Productscontent/OnlineCabBooking";
import SmartClassroom from "./pages/Productscontent/SmartClassroom";
import EducationalMobileapp from "./pages/Productscontent/EducationalMobileapp";
import Emis from "./pages/Productscontent/Emis";
import AssessmentTool from "./pages/Productscontent/AssessmentTool";
import NetcomDigitalContentProject from "./pages/Projectcontent/NetcomDigitalContentProject";
import EmisSoftwareSolution from "./pages/Projectcontent/EmisSoftwareSolution";
import LanguageLab from "./pages/Projectcontent/Languagelab";
import CallSoft from "./pages/Projectcontent/CallSoft";
import Assessment from "./pages/Projectcontent/Assessment";
import SkillDevelopmentProject from "./pages/Projectcontent/SkillDevelopmentProject";
import Ict from "./pages/Projectcontent/Ict";
import KioskProject from "./pages/Projectcontent/KioskProject";
import RfidSolution from "./pages/Projectcontent/RfidSolution";
import HomeContent from "./subpages/HomeContent";
import Services from "./pages/Services";
import ProductPage from "./pages/ProductPage";
import ProjectPage from "./pages/ProjectPage";
import CareerDetails from "./subpages/CareerDetails";
import ArvrLab from "./pages/Projectcontent/ArvrLab";
import RoboticsLab from "./pages/Projectcontent/RoboticsLab";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="careerdetails" element={<CareerDetails />} />

        <Route path="/netcomsmartclass" element={<NetcomSmartClass />} />
        <Route path="/youtube" element={<YouTubeChannel />} />
        <Route path="/kiosk" element={<Kiosk />} />
        <Route
          path="/netcomdigitalcontent"
          element={<NetcomDigitalContent />}
        />
        <Route path="/skilldevelopment" element={<SkillDevelopment />} />

        <Route path="/services/webdevelopment" element={<WebDevelopment />} />
        <Route path="/services/graphicdesign" element={<GraphicDesign />} />
        <Route
          path="/services/econtentdevelopment"
          element={<EcontentDevelopment />}
        />
        <Route path="/services/shortfilm" element={<ShortFilm />} />
        <Route path="/services/hardwaresupport" element={<HardwareSupport />} />
        <Route
          path="/services/mobiledevelopment"
          element={<MobileDevelopment />}
        />
        <Route path="/services/webhoisting" element={<WebHoisting />} />
        <Route
          path="/services/customizeddevelopment"
          element={<CustomizedDevelopment />}
        />
        <Route
          path="/services/cloudmaintainance"
          element={<CloudMaintainance />}
        />

        <Route path="/smarttailorshop" element={<SmartTailorShop />} />
        <Route path="/onlinecabbooking" element={<OnlineCabBooking />} />
        <Route path="/smartclassroom" element={<SmartClassroom />} />
        <Route
          path="/educationalmobileapp"
          element={<EducationalMobileapp />}
        />
        <Route path="/emis" element={<Emis />} />
        <Route path="/assessmenttool" element={<AssessmentTool />} />

        <Route
          path="/netcomdigitalcontentproject"
          element={<NetcomDigitalContentProject />}
        />
        <Route path="/emissofwaresolution" element={<EmisSoftwareSolution />} />
        <Route path="/languagelab" element={<LanguageLab />} />
        <Route path="/callsoft" element={<CallSoft />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route
          path="/skilldevelopmentproject"
          element={<SkillDevelopmentProject />}
        />
        <Route path="/ict" element={<Ict />} />
        <Route path="/kioskproject" element={<KioskProject />} />
        <Route path="/rfidsolution" element={<RfidSolution />} />
        <Route path="/arvrlab" element={<ArvrLab />} />
        <Route path="/roboticslab" element={<RoboticsLab />} />

        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
