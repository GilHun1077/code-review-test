export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-3xl mx-auto px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} gilhun. All rights reserved.</p>
      </div>
    </footer>
  );
}
