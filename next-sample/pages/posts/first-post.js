import Link from 'next/link';
// 関数名は何でも良いけど、default exportする必要がある
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <p><Link href="/"><a>Back to home</a></Link></p>
    </>);
}