import Container from '../../../components/post/container'
import PostBody from '../../../components/post/post-body'
import Header from '../../../components/ui/header'
import PostHeader from '../../../components/post/post-header'
import Layout from '../../../components/ui/layout'
import { getPostBySlug, getAllPosts } from '../../../lib/api'
import markdownToHtml from '../../../lib/markdownToHtml'
import { notFound } from 'next/navigation'
import Seo from '../../../components/util/seo'

export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params // Await params here
  const post = getPostBySlug(slug, [
    'title',
    'excerpt',
    'canonical',
  ])
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: post.canonical },
  }
}

export default async function Page({ params }) {
  const { slug } = await params // Await params here
  const post = getPostBySlug(slug, [
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
  if (!post?.slug) {
    notFound()
  }
  const content = await markdownToHtml(post.content || '')

  return (
    <>
      {/* Seo is handled by generateMetadata, but you can keep this for legacy support */}
      <Seo
        title={post.title}
        description={post.excerpt}
        canonical={post.canonical}
      />
      <Layout>
        <Container>
          <Header  title={post.title} blog={true}/>
          <article>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={content} />
          </article>
        </Container>
      </Layout>
    </>
  )
}