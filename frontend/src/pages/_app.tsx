import {AppProps} from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';
import {ApolloProvider} from "@apollo/react-hooks";
import {useApollo} from "@/utils/apolloClient";
import {IntlProvider} from 'react-intl';
import {useRouter} from "next/router";

import {setup} from 'twind';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

import en from 'translations/en.json';
import de from 'translations/de.json';
import fr from 'translations/fr.json';
import it from 'translations/it.json';


const messages = {
  'en': en,
  'de': de,
  'fr': fr,
  'it': it
}

export default function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()
  const {locale, defaultLocale} = router;

  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale={defaultLocale}>
        <Component {...pageProps} />
      </IntlProvider>
    </ApolloProvider>
  )
}
