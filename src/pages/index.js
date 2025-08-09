import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const posts = [
    {
      id: 0,
      category: "Lifestyle",
      image:
        "https://cdn.apartmenttherapy.info/image/upload/v1707152613/at/organize-clean/2023/Stock/Custom%20Stock%20Shoots/2023-05-luggage-travel/230509-suitcase-0400.jpg",
      title: "How to Pack Light for a 2-Week Adventure",
    },
    {
      id: 1,
      category: "Destination",
      image:
        "https://www.travelandleisure.com/thmb/OmGhzSe-6Q6aC3aeCoZfdoBAs08=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19-mount-rainier-national-park-washington-BESTHIKE0407-1b2ae69a788f49a996e64ff38f05275a.jpg",
      title: "Top 5 Hidden Hiking Trails Around the World",
    },
    {
      id: 2,
      category: "Culinary",
      image:
        "https://www.globaltimes.cn/Portals/0/attachment/2019/2019-06-27/a032b18c-30a7-49f4-9191-34ee439a358d.jpeg",
      title: "Street Foods You Must Try When Traveling Asia",
    },
    {
      id: 3,
      category: "Tips & Hacks",
      image:
        "https://img.freepik.com/premium-photo/passport-suitcase-plane-ticket-travel-safety-airport-immigration-holiday-vacation-luggage-document-visa-board-flight-traveling-abroad-overseas-with-airline-airplane_590464-90237.jpg",
      title: "10 Travel Hacks That Will Save You Time and Money",
    },
    {
      id: 4,
      category: "Lifestyle",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF369EkKoXQX4F2iQBaIaEKXlhwYu85pt_Ng&s",
      title: "What I Learned from Traveling Alone for a Year",
    },
    {
      id: 5,
      category: "Destination",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-wJFUuF7IwgCydqPX6iFIQ3qL2mCEaW1oQ&s",
      title: "Discovering the Magic of Morocco’s Blue City",
    },
    {
      id: 6,
      category: "Culinary",
      image:
        "https://www.nescafe.com/gb/sites/default/files/2023-08/Coffee%20Cup%20Guide%20Banner%20Desktop.jpg",
      title: "Global Coffee Culture: Brews from Every Corner",
    },
    {
      id: 7,
      category: "Tips & Hacks",
      image:
        "https://thumbs.dreamstime.com/b/collection-hiking-camping-gear-laid-out-forest-floor-various-supplies-including-backpacks-boots-other-351864197.jpg",
      title: "Essential Gear Checklist for First-Time Backpackers",
    },
  ];

  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) => post.category === activeFilter);

  return (
    <>
      <Head>
        <title>Diana Travel Blog</title>
        <meta
          name="description"
          content="A travel blog about hiking, destinations, and travel tips"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      {/* Hero Blog Post */}
      <section className="hero">
        <img
          src="https://images.stockcake.com/public/e/f/2/ef24b6d7-d7ae-4f98-afd5-2334539a1516_large/cozy-rainy-reading-stockcake.jpg"
          className="hero-bg"
          alt="Hiking Desert"
        />
        <div className="hero-content">
          <span className="tag">Have Fun</span>
          <h1>Exploring the Wonders of Hiking</h1>
          <p>
            An iconic landmark, this post unveils the secrets that make this
            destination a traveler's paradise.
          </p>
          <div className="author-info">
            <img
              src="https://marketplace.canva.com/EAFN_7rJDRQ/1/0/1600w/canva-beige-cute-cartoon-illustration-girl-avatar-E7_RvrHMyYU.jpg"
              alt="Author"
              className="avatar"
            />
            <span>Theodore Reginad • 24 Jan 2024 • 10 mins read</span>
          </div>
        </div>
      </section>

      {/* Blog Filters */}
      <section className="blog">
        <h2>Blog</h2>
        <div className="filters">
          {["All", "Destination", "Culinary", "Lifestyle", "Tips & Hacks"].map(
            (filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
