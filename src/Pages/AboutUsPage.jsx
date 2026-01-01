import React from "react";
import AboutHero from "../components/About/AboutHero";
import OurMission from "../components/About/OurMission";
import OurVision from "../components/About/OurVision";
import OurValues from "../components/About/OurValues";
import PrincipalMessage from "../components/About/PrincipalMessage";
import WhyChooseUsAbout from "../components/About/WhyChooseUsAbout";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import OurJourney from "../components/About/OurJourney";
import WhyParentsTrustUs from "../components/About/WhyParentsTrustUs";


const AboutUsPage = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <OurJourney />
      <OurMission />
      <OurVision />
      <OurValues />
      <PrincipalMessage />
      <WhyParentsTrustUs />
      <WhyChooseUsAbout />
      <Footer />
    </>
  );
};

export default AboutUsPage;
