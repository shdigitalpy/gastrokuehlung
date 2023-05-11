import { Html, Head, Main, NextScript } from 'next/document'
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
    gtmId: 'GTM-WZTGGWF'
}
if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}
export default function Document() {
  return (
    <Html lang="de">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
