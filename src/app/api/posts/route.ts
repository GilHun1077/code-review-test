import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export async function GET() {
  if (!fs.existsSync(postsDirectory)) {
    return Response.json([]);
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        tags: data.tags || [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return Response.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { slug, title, date, description, tags, content } = body;

  if (!slug || !title || !content) {
    return Response.json(
      { error: "slug, title, content는 필수입니다." },
      { status: 400 }
    );
  }

  const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  if (!slugPattern.test(slug)) {
    return Response.json(
      { error: "slug는 소문자, 숫자, 하이픈만 사용할 수 있습니다." },
      { status: 400 }
    );
  }

  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (fs.existsSync(fullPath)) {
    return Response.json(
      { error: "이미 존재하는 slug입니다." },
      { status: 409 }
    );
  }

  const frontMatter = matter.stringify(content, {
    title,
    date: date || new Date().toISOString().split("T")[0],
    description: description || "",
    tags: tags || [],
  });

  fs.writeFileSync(fullPath, frontMatter, "utf8");

  return Response.json({ slug }, { status: 201 });
}
