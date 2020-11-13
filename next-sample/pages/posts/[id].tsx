import { GetStaticPaths, GetStaticProps } from "next"

export default function DynamicPosts({ id }: { id: string }) {
  return <h1>{id}</h1>
}

// pathから取ったidをcomponentに渡す
export const getStaticProps: GetStaticProps = async({params}) => ({
  props: {
    id: params?.id
  }
})

// 動的にパスを変える用
export const getStaticPaths: GetStaticPaths = async () => ({
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
});

