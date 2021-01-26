import Head from 'next/head';

export function Layout({ pageTitle, description, previewImage, currentURL, children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>{pageTitle}</title>
                <meta property="og:url" content={currentURL} key="ogurl" />
                <meta property="og:image" content={previewImage} key="ogimage" />
                <meta property="og:title" content={pageTitle} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />
            </Head>
            {children}
        </>
    )
}