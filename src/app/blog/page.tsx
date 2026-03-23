import { Metadata } from "next";
import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "gilhun의 블로그 글 목록",
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Blog</h1>

      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 py-8 text-sm">
          아직 작성된 글이 없습니다.
        </p>
      )}
    </div>
  );
}
