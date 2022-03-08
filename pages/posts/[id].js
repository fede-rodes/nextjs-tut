import Head from 'next/head'
import Layout from '../../components/layout'
import { getSortedPostsData, getPostById } from '../../lib/posts'

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      {post.title}
      <br />
      {post.id}
      <br />
      <Date dateString={post.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
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

// Do params come from router?
export async function getStaticProps(props) {
  console.log({ props })
  // Fetch necessary data for the blog post using params.id
  const post = await getPostById(props.params.id)
  return {
    props: {
      post,
    }
  }
}
