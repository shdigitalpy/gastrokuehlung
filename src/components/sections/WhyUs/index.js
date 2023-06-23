import React from 'react';
import Image from 'next/image';
import shoppingImg from '../../../assets/images/shopping.png';
import solarPlatesImg from '../../../assets/images/soler-plates.png';
import cleaningImg from '../../../assets/images/cleaning.png';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const WhyUs = () => {
    return (
        <section className="why-us container">
            <FramerMotionAnimation className="title-wrapper text-center">
                <h2 className="title">Warum unsere Kühlzellen</h2>
                <p className="description">Ein Kühlraumangebot mit voller Flexibilität in Konfiguration und
                    Gestaltung mit modularer Erweiterbarkeit. Für hygienische und sichere Lagerbedingungen.</p>
            </FramerMotionAnimation>

            <div className="grid-wrapper grid md:grid-cols-3">
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0}}
                    className="card">
                    <div className="image-wrapper">
                        <Image src={shoppingImg} alt="Unübertroffene Hygiene" className="card-image" />
                    </div>
                    <div className="content-wrapper">
                        <h6 className="card-title font-semibold">Unübertroffene Hygiene</h6>
                        <p className="description">Der CElastik Boden ist die ideale
                            Lösung, wenn hoheAnsprüche an die Hygiene zu erfüllen sind.</p>
                    </div>
                </FramerMotionAnimation>
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.1}}
                    className="card">
                    <div className="image-wrapper">
                        <Image src={solarPlatesImg} alt="Minimale Energiekosten" className="card-image" />
                    </div>
                    <div className="content-wrapper">
                        <h6 className="card-title font-semibold">Minimale Energiekosten</h6>
                        <p className="description">Die Spannverschluss-Technik sorgt für die kraftschlüssige
                            Verkupplung der Paneele. Der Kern besteht aus Polyurethan (PUR), dem derzeit besten Dämmstoff 
                            zur Isolierung von Kühlräumen. Wir verwenden einen äusserst umweltfreundlichen PUR-Schaum</p>
                    </div>
                </FramerMotionAnimation>
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.2}}
                    className="card">
                    <div className="image-wrapper">
                        <Image src={cleaningImg} alt="" className="card-image" />
                    </div>
                    <div className="content-wrapper">
                        <h6 className="card-title font-semibold">Einfache Reinigung</h6>
                        <p className="description">Fugenfreie Überlappung der Wände verhindert die Ansammlung
                            von Schmutz und Wasser und erleichtert die Reinigung.</p>
                    </div>
                </FramerMotionAnimation>

                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.2}}
                    className="card">
                    
                    <div className="content-wrapper">
                        <h6 className="card-title font-semibold">Einfache Montage (siehe Video)</h6>
                        <p className="description">Die eingeschäumten Spannverschlüsse ermöglichen eine problemlose und schnelle Montage 
                        der Kühlzellen und Tiefkühlzellen, einschliesslich spiegelverkehrter Montageoptionen, 
                        was Zeit- und Kosteneinsparungen bei der Installation bietet.
                                </p>
                    </div>
                </FramerMotionAnimation>

                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.2}}
                    className="card">
                    
                    <div className="content-wrapper">
                        <h6 className="card-title font-semibold">Beste Materialien</h6>
                        <p className="description">Wir verwenden hochwertigen verzinkten Stahl  
                        für die Deckschicht und bieten 
                        sogar auf Anfrage Edelstahl-Deckschichten an. 
                        Diese stärkeren Deckschichten verbessern die Stabilität und 
                        Widerstandsfähigkeit erheblich und verringern die Empfindlichkeit gegenüber Druckstellen.
                                </p>
                    </div>
                </FramerMotionAnimation>

                 <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.2}}
                    className="card">
                    
                    <div className="content-wrapper">
                        <h6 className="card-title font-semibold">Fortschrittliche Technologie</h6>
                        <p className="description">Die Trennwände in Kühlzellen und Tiefkühlzellen werden umlaufend mit Spannverschlüssen 
                        ausgeführt. Unliebsame Kältebrücken und 
                        Eisbildungen im neuralgischen Bereich zwischen Kühl- und Tiefkühlraum werden so vermieden.

                
                                </p>
                    </div>
                </FramerMotionAnimation>


                
            </div>
        </section>
    );
};

export default WhyUs;
