import React from "react";
import HeroSection from "../components/HeroSection";
import HomepageArticle from "../components/HomePageArticle";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function HomePage() {
  return <>
    <HeroSection/>
    <HomepageArticle/>
    <NewsLetter/>
    <Footer/>
  </>
}

export default HomePage;