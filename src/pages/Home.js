import React from "react";
import Hero from "../sections/Hero";
import Section from "../sections/Section";
import Cta from "../sections/Cta";
import Projects from "../sections/Projects";
import Features from "../sections/Features";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function Home() {
    return (
        <div>
            <div className="hero-wrapper">
                <Hero />
            </div>
            <Section id="about" name="about" />
            <Cta id={0} />
            <Projects category="latest" />
            <Features index={null} />
            <Contact contactPage={false} />
            <Footer />
        </div>
    );
}

export default Home;