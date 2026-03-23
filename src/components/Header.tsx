import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-3xl mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          gilhun.dev
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
