import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import playIcon from '../../../assets/icons/play.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const VideoStrip = ({ thumbnail, videoUrl = '', stop }) => {
    const [videoMode, setVideoMode] = useState(false);

    useEffect(() => {
        setVideoMode(false);
    }, [stop]);

    return (
        <section className="video-strip container">
            <div className="video-wrapper" onClick={() => setVideoMode(true)}>
                <FramerMotionAnimation className={`thumbnail-wrapper relative ${!videoMode ? 'show' : ''}`}>
                    <Image src={thumbnail} alt="thumbnail" className="thumbnail-image" />
                    <div className="play-wrapper relative flex items-center text-white font-semibold">
                        <Image src={playIcon} alt="thumbnail" className="play-icon" />
                        Video anschauen
                    </div>
                </FramerMotionAnimation>
                { (videoMode && !stop) && (
                    <iframe width="100%"
                            height="100%"
                            src={`${videoUrl}?autoplay=1&mute=1`}
                            title="Video zur Herstellung der Kühlzellen"
                            frameBorder="0"
                            className={`video-frame ${videoMode ? 'show' : ''}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                    />
                )}
            </div>
        </section>
    );
};

export default VideoStrip;
