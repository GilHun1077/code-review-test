import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostPath(slug: string) {
  return path.join(postsDirectory, `${slug}.md`);
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const fullPath = getPostPath(slug);

  if (!fs.existsSync(fullPath)) {
    return Response.json({ error: "게시물을 찾을 수 없습니다." }, { status: 404 });
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return Response.json({
    slug,
    title: data.title || "",
    date: data.date || "",
    description: data.description || "",
    tags: data.tags || [],
    content,
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const fullPath = getPostPath(slug);

  if (!fs.existsSync(fullPath)) {
    return Response.json({ error: "게시물을 찾을 수 없습니다." }, { status: 404 });
  }

  const body = await request.json();
  const { title, date, description, tags, content } = body;

  if (!title || !content) {
    return Response.json(
      { error: "title, content는 필수입니다." },
      { status: 400 }
    );
  }

  const frontMatter = matter.stringify(content, {
    title,
    date: date || new Date().toISOString().split("T")[0],
    description: description || "",
    tags: tags || [],
  });

  fs.writeFileSync(fullPath, frontMatter, "utf8");

  return Response.json({ slug });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const fullPath = getPostPath(slug);

  if (!fs.existsSync(fullPath)) {
    return Response.json({ error: "게시물을 찾을 수 없습니다." }, { status: 404 });
  }

  fs.unlinkSync(fullPath);

  return Response.json({ message: "삭제되었습니다." });
}
