// src/components/SEO.tsx
import Head from 'next/head'
import { useEffect, useState } from 'react';
interface SEOProps {
    title?: string
    description?: string
    ogImage?: string
    keywords?: string
    // Add more props as needed
}

export default function SEO({ title, description, ogImage, keywords }: SEOProps) {
    const defaulName = "CI Finesser";
    const defaultTitle = "Empowering Nigeria's Creative Industries - CI Finesser";
    const defaultDescription = "Revolutionizing Nigeria's creative and technological landscape through innovative solutions, talent development, and digital banking."
    const defaultOGImage = '/og-image.png' // Add a default OG image to your public folder
    const defaultKeywords = "Nigeria Creative Industries, Digital Economy Solutions, Talent Development Platform, Digital Banking Innovation, Creative Technology Solutions, African Talent Empowerment, Technological Innovation Nigeria, Creative Industry Revolution, Sustainable Growth Solutions"
    title = title || defaultTitle
    description = description || defaultDescription
    ogImage = ogImage || defaultOGImage
    keywords = keywords ?? defaultKeywords

    const [pathname, setPathname] = useState('/');

    useEffect(() => {
        // This will only run on the client-side
        if (typeof window !== 'undefined') {
            setPathname(window.location.pathname);
        }
    }, []);

    return (
        <Head>
            <meta name="description" content={description || defaultDescription} />
            <meta property="keywords" content={keywords || defaultKeywords} />
            <meta property="og:keywords" content={keywords || defaultKeywords} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content={defaultTitle} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://www.finesser.co${pathname}`} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={ogImage || defaultOGImage} />
            <meta property="og:image:secure_url" content={ogImage || defaultOGImage} />
            <meta property="og:image:width" content="1200" />
            <title>{title ? `${title} - ${defaultTitle}` : defaultTitle}</title>
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="preload" href="/assets/fonts/graphik/graphik.woff" as="font" type="font/woff" crossOrigin='' />
            <link rel="preload" href="/assets/fonts/satoshi/satoshi.woff" as="font" type="font/woff" crossOrigin='' />

            {/* Add more meta tags as needed */}
        </Head>
    )
}
