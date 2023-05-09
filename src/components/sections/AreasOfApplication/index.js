import React from 'react';
import Image from 'next/image';
import doorImg from '../../../assets/images/door2.png';
import checkIcon from '../../../assets/icons/yellow-check-rounded.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const AreasOfApplication = () => {
    return (
        <section className="areas-of-application bg-gray">
            <div className="grid-wrapper container grid md:grid-cols-2">
                <div className="content-wrapper">
                    <FramerMotionAnimation>
                        <h2 className="title">Einsatzbereiche</h2>
                        <p className="description">Wandschutzprofile aus Polyethylen eignen sich besonders für
                            den Einbau in Räumen und Gängen mit Personen und Transportverkehr
                        </p>
                    </FramerMotionAnimation>

                    <div className="points-wrapper flex flex-col">
                        { points.map((item, index) => (
                            <FramerMotionAnimation
                                type="p"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.15, delay: index * 0.1 }}
                                className="point-wrapper flex" key={index}>
                                <Image src={checkIcon} alt="check" className="check-icon" />
                                { item.text }
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>

                <FramerMotionAnimation>
                    <Image src={doorImg} alt="Areas of application" className="main-image" />
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

const points = [
    {
        text: 'Leicht montierbar mittels Schrauben oder Spezialklebebändern',
    },
    {
        text: 'Äußerst stoß- und schlagfest',
    },
    {
        text: 'Gute Formbeständigkeit',
    },
    {
        text: 'Pflegeleicht und unempfindlich gegen fette und übliche Reinigungsmittel',
    },
    {
        text: 'Kältefest bis -30° C',
    },
    {
        text: 'Nachrüstung auch im Rahmen von Sanierungsarbeiten jederzeit möglich',
    },
    {
        text: 'Abmessungen voll auf kundenspezifische Anforderungen abgestimmt',
    },
    {
        text: 'Physiologisch unbedenklich im Lebensmittelbereich',
    },
    {
        text: 'Hochwertige Qualität, kurze Lieferzeiten, Sonderanfertigungen',
    },
];

export default AreasOfApplication;
