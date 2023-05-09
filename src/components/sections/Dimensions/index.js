import React from 'react';
import Image from 'next/image';
import heightIcon from '../../../assets/icons/height.svg';
import defrostIcon from '../../../assets/icons/defrost.svg';
import lengthIcon from '../../../assets/icons/length.svg';
import dimensionImg1 from '../../../assets/images/dimension1.png';
import dimensionImg2 from '../../../assets/images/dimension2.png';
import dimensionImg3 from '../../../assets/images/dimension3.png';
import dimensionImg4 from '../../../assets/images/dimension4.png';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const Dimensions = () => {
    return (
        <section className="dimensions container">
            <FramerMotionAnimation type="h2" className="title text-center">Abmessungen</FramerMotionAnimation>
            <div className="content-wrapper">
                <FramerMotionAnimation className="content-box flex flex-col md:flex-row md:items-center justify-between bg-gray">
                    <div className="item-wrapper flex">
                        <Image src={heightIcon} alt="height" className="item-icon" />
                        <div className="details-wrapper">
                            <h6 className="item-title font-semibold">Höhe</h6>
                            <p className="range text-dark">50 - 1080mm</p>
                        </div>
                    </div>
                    <div className="item-wrapper flex">
                        <Image src={defrostIcon} alt="defrost" className="item-icon" />
                        <div className="details-wrapper">
                            <h6 className="item-title font-semibold">Stärke</h6>
                            <p className="range text-dark">10 - 50mm</p>
                        </div>
                    </div>
                    <div className="item-wrapper flex">
                        <Image src={lengthIcon} alt="length" className="item-icon" />
                        <div className="details-wrapper">
                            <h6 className="item-title font-semibold">Länge</h6>
                            <p className="range text-dark">2&apos;060mm (Standard)</p>
                        </div>
                    </div>
                </FramerMotionAnimation>
            </div>
            <FramerMotionAnimation className="images-wrapper grid grid-cols-2 md:grid-cols-4">
                <Image src={dimensionImg1} alt="dimension" className="image" />
                <Image src={dimensionImg2} alt="dimension" className="image" />
                <Image src={dimensionImg3} alt="dimension" className="image" />
                <Image src={dimensionImg4} alt="dimension" className="image" />
            </FramerMotionAnimation>
        </section>
    );
};

export default Dimensions ;
