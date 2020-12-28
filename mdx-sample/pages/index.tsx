import Link from 'next/link'

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/hello">
        <a>Hello</a>
      </Link>
    </p>
  </>
)

export default IndexPage
