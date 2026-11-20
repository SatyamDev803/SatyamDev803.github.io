import type { Metadata } from "next";
import Link from "next/link";

import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing | Satyam Sharma",
  description: "Notes on real-time AI systems and the production problems behind them.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-8 py-20 sm:py-28 space-y-12">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Satyam Sharma
      </Link>
      <h1 className="text-4xl sm:text-5xl font-light">Writing</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">First post coming soon.</p>
      ) : (
        <ul className="space-y-10">
          {posts.map((p) => (
            <li key={p.slug} className="space-y-2">
              <div className="text-sm text-muted-foreground font-mono">{formatDate(p.date)}</div>
              <Link href={`/blog/${p.slug}/`} className="text-xl font-medium hover:text-muted-foreground">
                {p.title}
              </Link>
              <p className="text-muted-foreground">{p.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
