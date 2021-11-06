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
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
										
										`,
                                }}
                            />
                        </>
                    )}
                </Head>
                <body>
                    {/* <script
                        data-name="BMC-Widget"
                        data-cfasync="false"
                        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
                        data-id="abhishekkumar98"
                        data-description="Support me on Buy me a coffee!"
                        data-message=""
                        data-color="#5F7FFF"
                        data-position="Right"
                        data-x_margin="18"
                        data-y_margin="18"
                    ></script> */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
