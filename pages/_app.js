// import node module libraries
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { Analytics } from '@vercel/analytics/react';

// import theme style scss file
import 'styles/theme.scss';

// import default layouts
import DefaultDashboardLayout from 'layouts/DefaultDashboardLayout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageURL = process.env.baseURL + router.pathname;
  const title = "SME Loan Origination";

  // Identify the layout, which will be applied conditionally
  const Layout = Component.Layout || (router.pathname.includes('dashboard') ? 
  (router.pathname.includes('instructor') || router.pathname.includes('student') ? 
  DefaultDashboardLayout : DefaultDashboardLayout) : DefaultDashboardLayout)
  
  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/aeon-logo.svg" type="image/x-icon" />
      </Head>
      <NextSeo
        title={title}
        canonical={pageURL}
        openGraph={{
          url: pageURL,
          title: title,
          site_name: process.env.siteName
        }}
      />
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
    </SSRProvider>
  )
}

export default MyApp
