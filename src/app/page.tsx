import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const recentPosts = getSortedPostsData().slice(0, 5);

  return (
    <div>
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          안녕하세요, gilhun입니다.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          개발하고, 생각하고, 기록합니다. 주로 웹 개발과 AI에 관심이 많습니다.
        </p>
      </section>

      {/* Recent Posts */}
      <section>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">최근 글</h2>
          <Link href="/blog" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            모두 보기 →
          </Link>
        </div>

        {recentPosts.length > 0 ? (
          <div>
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 py-8 text-sm">
            아직 작성된 글이 없습니다.
          </p>
        )}
      </section>
    </div>
  );
}
