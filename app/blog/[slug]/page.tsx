"use client";

import { useParams } from "next/navigation";
import { blogs } from "@/data/blogs";

export default function BlogDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-32 text-center">
        <p>Article not found.</p>
      </div>
    );
  }

  return (
    <article className="py-32 px-6 md:px-16 lg:px-32">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-black">
          {blog.title}
        </h1>

        <p className="mt-6 text-lg text-[#555]">
          {blog.excerpt}
        </p>

        <div className="mt-16 space-y-6 text-[#333] leading-relaxed">
          {blog.content
            .trim()
            .split("\n\n")
            .map((para, index) => (
              <p key={index}>{para}</p>
            ))}
        </div>

      </div>
    </article>
  );
}
