import React from 'react';
import Image from "next/image";
import Link from "next/link";
import fridge from '../../../assets/images/fridge.png';
import checkIcon from '../../../assets/icons/yellow-check-rounded.svg';
import phoneIcon from '../../../assets/icons/phone-circle-gray.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const FoodHygiene = () => {
    return (
        <section className="food-hygiene container">
            <FramerMotionAnimation className="title-wrapper text-center">
                <h6 className="title-secondary">Kühlraum Lösungen</h6>
                <h4 className="title">Lebensmittel hygienisch lagern</h4>
                <p className="description">
                    Gebo Shop liefert Ihnen Kühlzellen und Tiefkühlzellen „aus einem Guss“. Sämtliche Bestandteile
                    unserer Zellen sind optimal aufeinander abgestimmt.
                </p>
            </FramerMotionAnimation>

            <FramerMotionAnimation className="grid-wrapper bg-gray md:flex">
                <Image src={fridge} alt="Hygiene" className="main-image" />
                <div className="content-wrapper">
                    <h5 className="content-title font-semibold">Kühlzelle Standard</h5>
                    <div className="points-wrapper flex flex-col">
                        { points.map((item, index) => (
                            <p className="point-wrapper flex" key={index}>
                                <Image src={checkIcon} alt="check" className="check-icon" />
                                { item.text }
                            </p>
                        ))}
                    </div>

                    <p className="description text-primary">
                        Für Angebotsanfrage füllen Sie das
                        <Link href={'#quotation-form'} className="underline text-dark px-1">Anfrageformular</Link>
                        mit Ihren persönlichen Angaben aus.
                        
                    </p>
                    <p className="description text-primary mb-0">
                        Gerne beraten wir Sie in einem persönlichen Gespräch.
                    </p>

                    <div className="contact-wrapper flex">
                        <Link href={'#quotation-form'} className="btn-secondary">Offerte anfragen</Link>
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

const points = [
    {
        text: 'Qualitätskühlzellen aus Deutschland mit der korrekten Isolierdämmung von Isolierdicke 100 mm bis 200 mm für den Schweizer Markt.'
    },
    {
        text: 'Preiswerte Standardmasse oder individuell nach Kundenwunsch. Verschieden Bodenausführungen in Kunststoff, Celastik oder Chromstahl.'
    },
    {
        text: 'Die Kühlzellen können professionell durch uns in der ganzen Schweiz montiert werden (langjährige Facherfahrung).'
    },
];

export default FoodHygiene;
