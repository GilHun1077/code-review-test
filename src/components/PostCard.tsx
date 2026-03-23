import Link from "next/link";
import { PostMeta } from "@/types/post";
import { format } from "date-fns";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group border-b border-gray-100 dark:border-gray-800 py-8 last:border-0">
      <Link href={`/blog/${post.slug}`}>
        <div className="flex flex-col gap-2">
          <time className="text-sm text-gray-400 dark:text-gray-500">
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {post.description}
          </p>
          {post.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap mt-1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
