import Layout from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts'
import { getPostById } from '../../lib/posts-by-id'

export default function Post({ post }) {
  return (
    <Layout>
      {JSON.stringify(post)}
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getSortedPostsData().map(({ id }) => ({ params: { id } }))
  console.log({ paths })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const post = getPostById(params.id)
  return {
    props: {
      post,
    }
  }
}
