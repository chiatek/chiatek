import React from "react";
import Section from "../sections/Section";
import Cta from "../sections/Cta";
import Projects from "../sections/Projects";
import Features from "../sections/Features";
import Footer from "../sections/Footer";

function Services() {
    return (
        <div>
            <div className="hero-banner"></div>
            <Section id="services" name="services" />
            <Cta id={1} />
            <Section id="services-info" name="services-info" />
            <Features index={0} />
            <Projects category="category1" />
            <Footer />
        </div>
    );
}

export default Services;