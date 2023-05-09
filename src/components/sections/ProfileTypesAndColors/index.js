import React from 'react';
import Image from 'next/image';
import typesImg from '../../../assets/images/profil-typen.png';
import profileColorsData from '../../../data/profileColorsData';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const ProfileTypesAndColors = () => {
    const { colors, discontinued, pattern } = profileColorsData;

    return (
        <section className="profile-types-and-colors container">
            <FramerMotionAnimation>
                <h2 className="title text-center">Profiltypen und Farben</h2>
                <Image src={typesImg} alt="Profiltypen und Farben" className="types-image" />
            </FramerMotionAnimation>
            <div className="colors-wrapper bg-gray">
                <FramerMotionAnimation
                    type="h5"
                    className="content-title font-semibold text-center">Wählen Sie die Farbe</FramerMotionAnimation>
                <div className="colors flex flex-wrap justify-center">
                    { colors.map((color, index) => <ColorVariantWrapper color={color} key={index} />)}
                </div>
                <div className="discontinued">
                    <div className="discontinued-grid flex justify-center">
                        { discontinued.map((color, index) => <ColorVariantWrapper color={color} key={index} />)}
                    </div>
                    <p className="description text-center">Auslaufende Farben (Solange Vorrat reicht)</p>
                </div>
                <div className="patterns flex flex-wrap justify-center">
                    { pattern.map((color, index) => <ColorVariantWrapper color={color} key={index} />)}
                </div>
            </div>
        </section>
    );
};

const ColorVariantWrapper = ({ color }) => {
    const { name, hex, image } = color;

    return (
        <FramerMotionAnimation className="color-variant-wrapper bg-white">
            { hex && (
                <div className="color-box" style={{ backgroundColor: `${hex}` }} />
            )}
            { image && (
                <Image src={image} alt="color pattern" className="color-box" />
            )}
            <p className="name text-center">{ name }</p>
        </FramerMotionAnimation>
    )
}

export default ProfileTypesAndColors;
