import React from 'react';
import Image from "next/image";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const HeroBanner = ({ children, bg }) => {
    return (
        <section className="hero-banner relative">
            <Image src={bg} alt="Background" className="banner-bg" />
            <FramerMotionAnimation
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="content-wrapper container relative">
                { children }
            </FramerMotionAnimation>
        </section>
    );
};

export default HeroBanner;
