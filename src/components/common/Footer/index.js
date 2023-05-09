import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import footerData from '../../../data/footerData';

const Footer = () => {
    const { logo, content: { bg, title, description }, links, copyright } = footerData;

    return (
        <footer className="footer relative">
            <div className="content-wrapper container">
                <div className="relative h-full w-full flex items-center justify-center">
                    <Image src={bg} alt="bg" className="bg-image" />
                    <div className="content relative text-center">
                        <h2 className="title">{ title }</h2>
                        <p className="description text-white">{ description }</p>
                    </div>
                </div>
            </div>
            <div className="footer-content-wrapper container bg-gray">
                <div className="logo-wrapper">
                    <Image src={logo} alt="logo" className="logo" />
                </div>
                <div className="items-wrapper flex items-center justify-between">
                    <p className="copyright">{ copyright }</p>
                    <div className="links-wrapper flex items-center justify-between">
                        { links.map((item, index) => (
                            <Link href={item.url} key={index} className="footer-link">{ item.name }</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
