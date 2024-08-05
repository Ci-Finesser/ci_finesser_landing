// src/components/SEO.tsx
import Head from 'next/head'

interface SEOProps {
    title?: string
    description?: string
    ogImage?: string
    // Add more props as needed
}

export default function SEO({ title, description, ogImage }: SEOProps) {
    const defaultTitle = 'CI Finesser'
    const defaultDescription = 'Optimize your CI/CD workflows with CI Finesser'
    const defaultOGImage = '/og-image.png' // Add a default OG image to your public folder

    return (
        <Head>
            <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={ogImage || defaultOGImage} />
            <meta name="twitter:card" content="summary_large_image" />
            {/* Add more meta tags as needed */}
        </Head>
    )
}
