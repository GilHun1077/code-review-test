---
title: "Next.js로 블로그 만들기"
date: "2026-03-23"
description: "Next.js App Router와 마크다운을 이용해 개인 블로그를 만드는 방법을 소개합니다."
tags: ["Next.js", "TypeScript", "블로그"]
---

# Next.js로 블로그 만들기

이 블로그 자체가 Next.js로 만들어졌습니다. 어떻게 구성했는지 간략히 정리해봤습니다.

## 기술 스택

- **Next.js 15** — App Router 기반
- **TypeScript** — 타입 안전성
- **Tailwind CSS** — 스타일링
- **gray-matter** — 마크다운 frontmatter 파싱
- **remark** — 마크다운 → HTML 변환

## 핵심 구조

```
src/
  app/
    page.tsx         # 홈
    blog/
      page.tsx       # 블로그 목록
      [slug]/
        page.tsx     # 개별 포스트
    about/
      page.tsx       # 소개
  lib/
    posts.ts         # 포스트 읽기 유틸
  types/
    post.ts          # 타입 정의
posts/               # 마크다운 파일들
```

## 글 작성 방법

`posts/` 디렉토리에 `.md` 파일을 추가하면 됩니다. frontmatter에 제목, 날짜, 설명, 태그를 작성합니다.

```markdown
---
title: "글 제목"
date: "2026-03-23"
description: "글 설명"
tags: ["태그1", "태그2"]
---

본문 내용...
```

간단하죠?
