// _document.js or _document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add this to load model-viewer library */}
          <script src="https://cdn.jsdelivr.net/npm/@google/model-viewer@2.3.0/dist/model-viewer.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
