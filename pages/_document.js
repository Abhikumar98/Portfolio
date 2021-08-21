import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        const GTag = "G-SMB08DXQ96";
        return (
            <Html>
                <Head>
                    {process.env.NODE_ENV === "production" && (
                        <>
                            <script
                                async
                                type="text/javascript"
                                src={`https://www.googletagmanager.com/gtag/js?id=${GTag}`}
                            />
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
										window.dataLayer = window.dataLayer || [];
										function gtag(){dataLayer.push(arguments);}
										gtag('js', new Date());
										gtag('config', '${GTag}', { page_path: window.location.pathname });
										`,
                                }}
                            />
                        </>
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
