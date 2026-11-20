import fs from "node:fs";
import path from "node:path";

import { marked } from "marked";

// Posts are Markdown files in content/posts/<slug>.md with a small front matter block:
//
// ---
// title: How we got recordings from 74% to 99%
// date: 2026-12-01
// summary: One line shown on the blog index.
// ---
//
// Files whose name starts with "_" are drafts and are never published.

export type PostMeta = { slug: string; title: string; date: string; summary: string };
export type Post = PostMeta & { html: string };

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function parse(raw: string, slug: string): { meta: PostMeta; body: string } {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
  if (!match) throw new Error(`Post "${slug}" is missing its front matter block`);
  const fields = Object.fromEntries(
    match[1]
      .split("\n")
      .filter((line) => line.includes(":"))
      .map((line) => {
        const i = line.indexOf(":");
        return [line.slice(0, i).trim(), line.slice(i + 1).trim()];
      }),
  );
  for (const key of ["title", "date", "summary"]) {
    if (!fields[key]) throw new Error(`Post "${slug}" is missing "${key}" in its front matter`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fields.date)) {
    throw new Error(`Post "${slug}" has date "${fields.date}"; use YYYY-MM-DD`);
  }
  return { meta: { slug, title: fields.title, date: fields.date, summary: fields.summary }, body: match[2] };
}

function postFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
}

export function getAllPosts(): PostMeta[] {
  return postFiles()
    .map((f) => parse(fs.readFileSync(path.join(POSTS_DIR, f), "utf8"), f.replace(/\.md$/, "")).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const { meta, body } = parse(raw, slug);
  return { ...meta, html: marked.parse(body, { async: false }) };
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
