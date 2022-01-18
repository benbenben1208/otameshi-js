import  Head from 'next/head'

export default function Seo ({  title = "next-practice", description = "next-practice"}) {

    return (
        <Head>
            <title>{title}</title>
            <meta property="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
        </Head>
    )
}