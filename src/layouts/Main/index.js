import React from 'react';
import Head from 'next/head'
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import FramerMotionAnimation from "../../components/common/FramerMotionAnimation";
import { useRouter } from "next/router";

const name = 'GastroKuehlung'
export const siteTitle = 'GastroKuehlung'



const MainLayout = ({ children }) => {

    const site = "https://www.gastrokuehlung.ch";
    const canonicalURL = site + useRouter().pathname;


    
    return (
        <>
         <Head>


        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalURL} />
        <link rel="alternate" href={canonicalURL} hrefLang="de-ch" />
      </Head>
      
            <Header />
            { children }
            <FramerMotionAnimation
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}>
                <Footer />
            </FramerMotionAnimation>
        </>
    )
};

export default MainLayout;
