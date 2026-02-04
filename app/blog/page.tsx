import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-32 bg-[#f7f6f3]">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-black">
          Blogs
        </h1>

        {/* Blog List */}
        <div className="mt-24 space-y-28">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group block"
            >
              <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* Image */}
                <div className="relative h-[360px] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="max-w-xl">

                  {/* Brand */}
                  <p className="text-xs tracking-widest uppercase text-[#777]">
                    Punjab Modular Kitchen
                  </p>

                  {/* Meta */}
                  <div className="mt-3 flex items-center gap-4 text-xs text-[#777]">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-2xl md:text-3xl font-light text-black leading-snug">
                    {blog.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-6 text-sm text-[#555] leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Engagement */}
                  <div className="mt-6 flex items-center gap-6 text-xs text-[#777]">
                    <span>{blog.views} views</span>
                    <span>{blog.comments} comments</span>
                  </div>

                  {/* CTA */}
                  <span className="mt-8 inline-block text-sm text-black tracking-wide">
                    Read Article →
                  </span>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
