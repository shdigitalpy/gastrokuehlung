import React from 'react';
import Image from 'next/image';
import imgBig from '../../../assets/images/features1.png';
import imgSmall from '../../../assets/images/features2.png';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const points = [
    {
        text: 'Topprodukt zu fairen Preisen'
    },
    {
        text: 'Korrekte Dämmdicke für den Schweizer Markt'
    },
    {
        text: 'Mit oder ohne Montage in der ganzen Schweiz'
    },
    {
        text: 'Langjährige Montageerfahrung'
    },
    {
        text: 'Mit oder ohne Kühlaggregat lieferbar'
    },
    {
        text: 'Beratung von Ort'
    },
]

const Features = () => {
    return (
        <section className="features-1 container" id="features">
            <div className="grid-wrapper md:grid grid-cols-2">
                <div className="content-wrapper">
                    <FramerMotionAnimation type="h4" className="title">Kühlzellen / Tiefkühlzellen</FramerMotionAnimation>
                    <div className="points-wrapper flex flex-col relative">
                        { points.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.15, delay: index * 0.1 }}
                                className="point-wrapper flex items-center" key={index}>
                                <span className="bullet-number text-primary font-semibold bg-secondary">{ index + 1 }</span>
                                <span className="text">{ item.text }</span>
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                <FramerMotionAnimation className="image-wrapper relative">
                    <Image src={imgBig} alt="Fresh" className="image-big" />
                    <Image src={imgSmall} alt="Fresh" className="image-small" />
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default Features;
