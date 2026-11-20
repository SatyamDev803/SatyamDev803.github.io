// Moves to app/blog/[slug]/page.tsx with the first published post. Next.js static export
// rejects a dynamic route whose generateStaticParams returns no pages, so it cannot ship empty.

import type { Metadata } from "next";
import Link from "next/link";

import { formatDate, getAllPosts, getPost } from "@/lib/posts";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: `${post.title} | Satyam Sharma`, description: post.summary };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-8 py-20 sm:py-28 space-y-10">
      <Link href="/blog/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Writing
      </Link>
      <header className="space-y-3">
        <div className="text-sm text-muted-foreground font-mono">{formatDate(post.date)}</div>
        <h1 className="text-3xl sm:text-4xl font-light">{post.title}</h1>
      </header>
      <article className="prose-post" dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}
