import Link from 'next/link';
import Head from 'next/head';

// 関数名は何でも良いけど、default exportする必要がある
export default function FirstPost({pageTitle}) {
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
export async function getStaticProps() {
  const pageTitle = 'First Post';
  return {
    props: {
      pageTitle
    }
  }
}

// getStaticPropsをexport or なにもexportしないとSSGの挙動になる
// getServerSidePropsをexportするとSSRになる
// export async function getServerSideProps() {
//   const pageTitle = 'First Post';
//   return {
//     props:{
//       pageTitle
//     }
//   }
// }