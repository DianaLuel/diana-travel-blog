import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Diana Blog</div>
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/blog/0">Blog</Link>
        <Link href="/about">About Us</Link>
      </nav>
    </header>
  );
}
