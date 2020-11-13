import Link from 'next/link';
import Head from 'next/head';
import { GetStaticProps } from 'next';

// 関数名は何でも良いけど、default exportする必要がある
export default function FirstPost({pageTitle}: {pageTitle: string}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <h1>First Post</h1>
      <p><Link href="/"><a>Back to home</a></Link></p>
    </>);
}

// getStaticPropsはdevelop時にはリクエストごとに走るが、production時にはビルド時に実行される
export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = 'First Post';
  return {
    props: {
      pageTitle
    }
  }
}
