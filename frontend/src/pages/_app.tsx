import {AppProps} from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';
import {ApolloProvider} from "@apollo/react-hooks";
import {useApollo} from "@/utils/apolloClient";

import {setup} from 'twind';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({Component, pageProps}: AppProps) {
  const apolloClient = useApollo(pageProps)
  return <ApolloProvider client={apolloClient}><Component {...pageProps} /></ApolloProvider>;
}
