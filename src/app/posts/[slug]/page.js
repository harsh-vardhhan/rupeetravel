import Container from "../../../component/container";
import PostBody from "../../../component/post-body";
import Header from "../../../components/ui/server/header";
import PostHeader from "../../../component/post-header";
import Layout from "../../../component/layout";
import { getPostBySlug, getAllPosts } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import { notFound } from "next/navigation";
import Seo from "../../../component/seo";

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "canonical",
    "ogImage",
    "coverImage",
  ]);
  if (!post) return {};
  const ogImage =
    post.ogImage ||
    post.coverImage ||
    "https://ik.imagekit.io/rupeetravel/preview.png";
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: post.canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: post.canonical,
      siteName: "Rupee Travel",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${post.title} | Rupee Travel`,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      site: "@harsh_vardhhan",
      creator: "@harsh_vardhhan",
      images: [ogImage],
    },
    robots: "index,follow",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function Page({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "canonical",
    "content",
    "ogImage",
    "coverImage",
  ]);
  if (!post?.slug) {
    notFound();
  }
  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <Layout>
        <Container>
          <Header />
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
  );
}
