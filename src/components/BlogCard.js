import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.id}`} className="blog-card">
      <img src={post.image} alt={post.title} />
      <span className="category">{post.category}</span>
      <h3>{post.title}</h3>
    </Link>
  );
}
