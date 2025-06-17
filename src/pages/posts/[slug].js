import { useRouter } from 'next/router'
import Container from '../../component/container'
import PostBody from '../../component/post-body'
import Header from '../../components/ui/server/header'
import PostHeader from '../../component/post-header'
import Layout from '../../component/layout'
import Seo from '../../component/seo'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../component/post-title'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, preview }) {

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    router.push('/404')
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        canonical={post.canonical}
      />
      <Layout preview={preview}>
        <Container>
          <Header />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody
                  content={post.content}
                />
              </article>
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'canonical',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
