import React from 'react';
import Image from "next/image";
import Link from "next/link";
import tagIcon from '../../../assets/icons/tag.svg';
import fridge from '../../../assets/images/fridge2.png';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const TopOffer = () => {
    return (
        <section className="top-offer container bg-gray">
            <FramerMotionAnimation className="grid-wrapper grid md:grid-cols-2">
                <div className="content-wrapper">
                    <h6 className="title-secondary flex items-center">
                        <Image src={tagIcon} alt="tag" className="tag-icon" />
                        Topangebot für Einsteiger
                    </h6>
                    <h2 className="title">Kühlzelle Nordstream</h2>
                    <p className="description font-semibold">Nur CHF 8&apos;000.-- exkl. MwSt.</p>
                    <p className="description font-semibold">Aussenmasse 2&apos;125 x 2&apos;125 x 2&apos;300 mm mit Aggregat und Boden.</p>
                    <Link href={'#quotation-form'} className="btn-primary">Jetzt anfragen</Link>
                </div>
                <Image src={fridge} alt="Cold storage" className="main-image" />
            </FramerMotionAnimation>
        </section>
    );
};

export default TopOffer;
