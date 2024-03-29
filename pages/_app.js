import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/static/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/static/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/static/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/static/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/static/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/static/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/static/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/static/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/static/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/static/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/static/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/static/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/static/favicon-16x16.png"
                />
                <link rel="manifest" href="/static/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
                <title>Hello, I'm Abhishek</title>
                <meta name="title" content="Hello, I'm Abhishek" />
                <meta
                    name="description"
                    content="Abhishek Kumar | Frontend developer"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://abhishekkumar.dev/" />
                <meta property="og:title" content="Hello, I'm Abhishek" />
                <meta
                    property="og:description"
                    content="Abhishek Kumar | Frontend developer"
                />
                <meta
                    property="og:image"
                    content="https://ik.imagekit.io/abhishekkumar/IMG_20181201_144641__1__1__1__sut-0wVmT.png"
                />
                <meta
                    property="shortcut icon"
                    itemProp="image"
                    content="https://ik.imagekit.io/abhishekkumar/IMG_20181201_144641__1__1__1__sut-0wVmT.png"
                />
                <meta
                    property="twitter:card"
                    content="Hey there ! I'm Abhishek Kumar. I'm a Frontend Developer"
                />
                <meta
                    property="twitter:url"
                    content="https://abhishekkumar.dev/"
                />
                <meta property="twitter:title" content="Hello, I'm Abhishek" />
                <meta
                    property="twitter:description"
                    content="Abhishek Kumar | Frontend developer"
                />
                <meta
                    property="twitter:image"
                    content="https://ik.imagekit.io/abhishekkumar/IMG_20181201_144641__1__1__1__sut-0wVmT.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
