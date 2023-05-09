import Head from 'next/head';
import {Inter} from 'next/font/google';
import HeroBanner from '../components/sections/HeroBanner';
import QuotationForm from '../components/sections/QuotationForm';
import ProtectionWall from '../components/sections/ProtectionWall';
import AreasOfApplication from '../components/sections/AreasOfApplication';
import Dimensions from '../components/sections/Dimensions';
import ProfileTypesAndColors from '../components/sections/ProfileTypesAndColors';
import heroBg from '../assets/images/hero-bg.png';
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export default function Protection() {
    return (
        <>
            <Head>
                <title>Rammschutz | Gebo Shop</title>
                <meta name="description" content="Rammschutzleisten - Ideal für Gewerbe, Industrie, Schulen, Sport, Pflege, Gastronomie, Flughäfen etc. Stoßfest, pflegeleicht, kältefest bis -30°C."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="protection-page">
                <HeroBanner bg={heroBg}>
                    <div className="banner-content-wrapper text-center">
                        <h1 className="title-lg">Rammschutzleisten</h1>
                        <p className="description">
                            Herzlich Willkommen auf unserer Produkteseite für Wandschutz aus HDPE! Wir freuen uns,
                            Ihnen hier unsere hochwertigen Produkte vorzustellen, die speziell für den Einsatz in
                            der Gastronomie, der Lebensmittelindustrie und anderen Bereichen entwickelt wurden,
                            in denen eine hygienische Arbeitsumgebung von größter Bedeutung ist.
                        </p>
                        <div className="flex gap-10 md:gap-3 justify-center">
                            <Link href="#protection-wall" className="btn-secondary">Mehr erfahren</Link>
                            <Link href="#quotation-form" className="btn text-white">Anfrage senden</Link>
                        </div>
                    </div>
                </HeroBanner>

                <ProtectionWall />
                <AreasOfApplication />
                <Dimensions />
                <ProfileTypesAndColors />
                <QuotationForm short />
            </main>
        </>
    )
}
