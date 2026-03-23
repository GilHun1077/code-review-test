"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PostActions({ slug }: { slug: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("정말 이 게시물을 삭제하시겠습니까?")) return;

    const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" });
    if (res.ok) {
      router.push("/blog");
      router.refresh();
    } else {
      const data = await res.json();
      alert(data.error || "삭제 중 오류가 발생했습니다.");
    }
  }

  return (
    <div className="flex gap-3">
      <Link
        href={`/admin/posts/${slug}/edit`}
        className="text-sm px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        수정
      </Link>
      <button
        onClick={handleDelete}
        className="text-sm px-3 py-1.5 rounded-md border border-red-200 dark:border-red-800 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
      >
        삭제
      </button>
    </div>
  );
}
