import React from 'react';
import Image from "next/image";
import img1 from '../../../assets/images/room.png';
import img2 from '../../../assets/images/fixing.png';
import img3 from '../../../assets/images/fridge3.png';
import img4 from '../../../assets/images/door.png';
import img5 from '../../../assets/images/corridor.png';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const Impressions = () => {
    return (
        <section className="impressions container" id="impressions">
            <h2 className="title">Impressionen</h2>
            <div className="grid-wrapper flex">
                <FramerMotionAnimation className="item item-big">
                    <Image src={img1} alt="impressions" className="image" />
                </FramerMotionAnimation>
                <FramerMotionAnimation className="item">
                    <Image src={img2} alt="impressions" className="image" />
                </FramerMotionAnimation>
                <FramerMotionAnimation className="item">
                    <Image src={img3} alt="impressions" className="image" />
                </FramerMotionAnimation>
                <FramerMotionAnimation className="item">
                    <Image src={img4} alt="impressions" className="image" />
                </FramerMotionAnimation>
                <FramerMotionAnimation className="item">
                    <Image src={img5} alt="impressions" className="image" />
                </FramerMotionAnimation>
                <FramerMotionAnimation className="item item-big">
                    <Image src={img1} alt="impressions" className="image" />
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default Impressions;
