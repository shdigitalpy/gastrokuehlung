import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import headerData from '../../../data/headerData';
import FramerMotionAnimation from "../FramerMotionAnimation";

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const { pathname } = useRouter();
    const { logo, links } = headerData;

    useEffect(() => {
        if (expanded) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'auto';
        }
    }, [expanded]);


    return (

        <header className="header container flex items-center">
            <FramerMotionAnimation>
                <Link href="/">
                    <Image src={logo} alt="logo" className="logo" />
                </Link>
            </FramerMotionAnimation>

            <nav className={`nav-container ml-auto desktop`}>
                <ul className="flex flex-col md:flex-row">
                    { links?.map((link, index) => (
                        <FramerMotionAnimation type="li" key={index}>
                            <Link href={link.url}
                                  onClick={() => setExpanded(false)}
                                  className={`nav-item ${link.isButton ? 'nav-link-btn' : 'nav-link'} ${pathname === link.url ? 'active' : ''}`}>
                                { link.name }
                            </Link>
                        </FramerMotionAnimation>
                    ))}
                </ul>
            </nav>

            <nav className={`nav-container ml-auto mobile ${expanded ? 'show' : ''}`}>
                <ul className="flex flex-col md:flex-row">
                    { links?.map((link, index) => (
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.25, delay: 0.25 }}
                            key={index}>
                            <Link href={link.url}
                                  onClick={() => setExpanded(false)}
                                  className={`nav-item ${link.isButton ? 'nav-link-btn' : 'nav-link'} ${pathname === link.url ? 'active' : ''}`}>
                                { link.name }
                            </Link>
                        </FramerMotionAnimation>
                    ))}
                </ul>
            </nav>


            <button className={`close-btn hamburger ${expanded ?  'is-active' : ''}`}
                    onClick={() => setExpanded(!expanded)}>
                <span className="line"/>
                <span className="line"/>
                <span className="line"/>
            </button>
        </header>
    );
};

export default Header;
