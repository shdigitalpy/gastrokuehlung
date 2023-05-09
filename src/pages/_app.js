import '@/styles/globals.scss';
import MainLayout from '../layouts/Main';
import {AnimatePresence} from 'framer-motion';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUp } from 'react-icons/fi';

const progress = new ProgressBar({
  size: 2,
  color: "#2F384E",
  className: "bar-of-progress",
  delay: 100,
});

const red = ({
  color: "#2F384E",
})

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
  return (
      <MainLayout>
        <AnimatePresence>
            <Component {...pageProps} />
        </AnimatePresence>
         <ScrollToTop smooth component={<p  style={{ backgroundColor:"FF7A00", display: "flex", justifyContent: "center", alignItems:"center"}}><FiArrowUp /></p>} />
      </MainLayout>
  )
}
