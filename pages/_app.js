import RootLayout from '../components/commons/root-layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;
