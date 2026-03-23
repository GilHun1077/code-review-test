import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "gilhun 소개",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">안녕하세요!</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          저는 gilhun입니다. 웹 개발과 AI에 관심이 많은 개발자입니다.
          이 블로그는 개발하면서 배운 것들과 생각들을 기록하는 공간입니다.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          새로운 기술을 배우고 적용하는 것을 좋아하며,
          특히 AI Native 개발에 관심을 가지고 공부하고 있습니다.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">기술 스택</h2>
        <div className="flex flex-wrap gap-2">
          {["TypeScript", "Next.js", "React", "Node.js", "Python", "AI/ML"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
        <p className="text-gray-600 dark:text-gray-300">
          GitHub:{" "}
          <a
            href="https://github.com/gilhun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            @gilhun
          </a>
        </p>
      </section>
    </div>
  );
}
