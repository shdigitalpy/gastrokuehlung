import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import wallImg from '../../../assets/images/wall.png';
import phoneIcon from '../../../assets/icons/phone-circle-yellow.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const ProtectionWall = () => {
    return (
        <section className="protection-wall container" id="protection-wall">
            <FramerMotionAnimation className="grid-wrapper flex flex-col md:flex-row">
                <Image src={wallImg} alt="wall" className="main-image" />
                <div className="content-wrapper">
                    <h2 className="title">Wandschutz aus Polyethylen HDPE 500</h2>
                    <h5 className="sub-title font-semibold">
                        Rammschutz, Prallschutz, Wandschutz, Wandrammschutz, Anfahrschutz
                    </h5>
                    <p className="description">
                        Besonders geeignet für alle Gewerbe- und Industriebetriebe, Sportstätten, Schulen,
                        öffentliche Gebäude, Krankenhäuser und Pflegeheime, Gastronomie, Flughäfen, Bahnhöfe,
                        Kühlräume usw. Das Material ist physiologisch einwandfrei, äußerst stoß- und schlagfest,
                        pflegeleicht und unempfindlich gegen Fette und übliche Reinigungsmittel sowie kältefest
                        bis -30° C.
                    </p>
                    <div className="contact-wrapper flex">
                        <Link href={'/'} className="btn-secondary">Offerte anfragen</Link>
                        <div className="mobile-number-wrapper flex items-center">
                            <Image src={phoneIcon} alt="phone" className="phone-icon" />
                            <a href="tel:043 508 90 60" className="number font-bold">043 508 90 60</a>
                        </div>
                    </div>
                </div>
            </FramerMotionAnimation>
        </section>
    );
};

export default ProtectionWall;
