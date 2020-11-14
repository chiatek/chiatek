import React from "react";
import ContactSection from "../sections/Contact";
import Footer from "../sections/Footer";

function Contact() {
    return (
        <div>
            <div className="hero-banner"></div>
            <ContactSection contactPage={true} />
            <Footer />
        </div>
    );
}

export default Contact;