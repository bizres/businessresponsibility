import * as React from 'react';
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';
import {setup} from 'twind';
import {asyncVirtualSheet, getStyleTagProperties} from 'twind/server';
import twindConfig from '../twind.config';
import {tw} from "twind";

const sheet = asyncVirtualSheet();

setup({...twindConfig, sheet});

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    sheet.reset();
    const initialProps = await Document.getInitialProps(ctx);
    const {id, textContent} = getStyleTagProperties(sheet);
    const styleProps = {
      id,
      key: id,
      dangerouslySetInnerHTML: {
        __html: textContent,
      },
    };

    return {
      ...initialProps,
      styles: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...initialProps.styles,
        React.createElement(`style`, styleProps),
      ],
    };
  }

  render() {
    return (
      <Html lang="en" >
        <Head>
          {/*<script async src="https://scripts.simpleanalyticscdn.com/latest.js" />*/}
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
