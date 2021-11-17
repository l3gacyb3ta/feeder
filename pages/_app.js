import "../styles/globals.css";
import "../styles/blocks.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1 id="main-title">RSS NEWS</h1>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
