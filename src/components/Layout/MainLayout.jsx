import Head from 'next/head'

export default function MainLayout({title, description, children}) {
    return (
        <>
            <Head>
                <title>{`${title} | Посты`}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {children}
            </main>
        </>
    )
}