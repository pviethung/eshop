import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'A next ecommerce site from github.com/pviethung',
  siteName: 'Eshop - online ecommerce',
  description: 'A Pet Project of @pviethung',
  url: 'https://eshop-gilt-zeta.vercel.app/',
  type: 'website',
  robots: 'follow, index',
  image: '/s.jpg',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
    </Head>
  );
}
