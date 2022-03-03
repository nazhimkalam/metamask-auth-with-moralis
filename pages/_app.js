import { MoralisProvider } from "react-moralis";

const MyApp = ({ Component, pageProps }) => {
  const appId = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
  const serverUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_ID;

  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
