import React from 'react';
import Image from "next/image";
import areaMap from '../../../assets/images/installation-area.png';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const InstallationArea = () => {
    return (
        <section className="installation-area container">
            <FramerMotionAnimation className="flex-wrapper flex flex-col md:flex-row">
                <Image src={areaMap} alt="installation" className="main-image" />
                <div className="content-wrapper">
                    <p className="content-title font-semibold">
                        Allgemeine Technische Daten Die Aufstellfläche für die Zelle muss 100% flach und
                        waagerecht sein (kein Rohbeton)
                    </p>
                    <p className="description">
                        <span>Ausführung: Kühlzelle</span>
                        <span>Außenabmessung: 2125 x 2125 x 2300 mm</span>
                        <span>Innenabmessung: 1925 x 1925 x 2100 mm</span>
                        <span>Isolierung: 100 mm</span>
                        <span>Deckschicht innen: Stahlblech ähnlich RAL 9002, Grauweiss, kunststofflackiert
                            Bodenausführung: 0,8 mm V2A TB1, R11</span>
                    </p>
                    <p className="description">
                        <span>1 Stk. NK-Tür: 800 x 2000 mm, Din Links</span>
                        <span>Verriegelung: Euro 2000, Profilzylinder Türbander: 2 x Typ 7514, grau, steigend</span>
                        <span>1 Stk. Wandaggregat KW 200-R452a (max. 11,1 m3)
                            Optional: 1 Stck LED-Wand-/Deckenleuchte mit Bewegungssensor 20 Watt</span>
                    </p>
                    <p className="description">
                        <span>1 Stk. Wandaggregat KW 200-R452a (max. 11,1 m3)</span>
                    </p>
                    <p className="description">
                        <span>Optional: 1 Stck LED-Wand-/Deckenleuchte mit Bewegungssensor 20 Watt</span>
                    </p>
                </div>
            </FramerMotionAnimation>
        </section>
    );
};

export default InstallationArea;
