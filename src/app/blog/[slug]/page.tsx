import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostData } from "@/lib/posts";
import { format } from "date-fns";
import PostActions from "@/components/PostActions";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostData(slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostData(slug);
  } catch {
    notFound();
  }

  return (
    <article>
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/blog"
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          ← 목록으로
        </Link>
        <PostActions slug={post!.slug} />
      </div>

      <header className="mb-10">
        <div className="flex gap-2 flex-wrap mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {post.title}
        </h1>
        <time className="text-sm text-gray-400 dark:text-gray-500">
          {format(new Date(post.date), "MMMM d, yyyy")}
        </time>
      </header>

      <div
        className="prose prose-gray dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
