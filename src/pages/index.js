import Head from 'next/head';
import {Inter} from 'next/font/google';
import HeroBanner from '../components/sections/HeroBanner';
import Features from '../components/sections/Features1';
import FoodHygiene from '../components/sections/FoodHygiene';
import TopOffer from '../components/sections/TopOffer';
import InstallationArea from '../components/sections/InstallationArea';
import WhyUs from '../components/sections/WhyUs';
import VideoStrip from '../components/sections/VideoStrip';
import Impressions from '../components/sections/Impressions';
import QuotationForm from '../components/sections/QuotationForm';
import heroBg from '../assets/images/hero-bg.png';
import thumbnailImg from '../assets/images/thumbnail.png';
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>Kühlzellen kaufen in der Schweiz</title>
                <meta name="description" content="Wir liefern modulare Kühlzellen und Tiefkühlzellen. Alle Bestandteile unserer Zellen sind optimal aufeinander abgestimmt."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="home-page">
                <HeroBanner bg={heroBg}>
                    <div className="banner-content-wrapper">
                        <h6 className="title-secondary">Willkommen</h6>
                        <h1 className="title-lg">Kühlzellen kaufen</h1>
                        <p className="description">
                            In der heutigen professionellen Gastronomie ist eine optimale Kühlung von Lebensmitteln von
                            größter Bedeutung. Die Qualität und Haltbarkeit der Produkte hängen von der richtigen Temperatur
                            ab. Deshalb sollten Kühl- und Tiefkühlzellen in keinem Restaurant oder Hotelbetrieb fehlen.
                        </p>
                        <Link href="/#features" className="btn-secondary">Mehr erfahren</Link>
                    </div>
                </HeroBanner>

                <Features/>
                <FoodHygiene />
                <TopOffer />
                <InstallationArea />
                <WhyUs />
                <VideoStrip thumbnail={thumbnailImg} videoUrl="https://www.youtube.com/embed/sV28YoBoLyU" />
                <Impressions />
                <QuotationForm bg="gray" />
            </main>
        </>
    )
}
