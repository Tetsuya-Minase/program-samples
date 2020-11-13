export default function DynamicPosts({ id }) {
  return <h1>{id}</h1>
}

// pathから取ったidをcomponentに渡す
export function getStaticProps({params}){
  return {
    props: {
      id: params.id
    }
  }
}

// 動的にパスを変える用
export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: 'id1'
        }
      },
      {
        params: {
          id: 'id2'
        }
      },
      {
        params: {
          id: 'id3'
        }
      }
    ],
    fallback: false
  }
}