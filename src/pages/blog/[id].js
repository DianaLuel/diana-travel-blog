import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Blog posts data
const posts = [
  {
    id: 0,
    tag: "Lifestyle",
    title: "How to Pack Light for a 2-Week Adventure",
    meta: "Theodore Reginad • 24 Jan 2024 • 10 min read",
    hero: "https://cdn.apartmenttherapy.info/image/upload/v1707152613/at/organize-clean/2023/Stock/Custom%20Stock%20Shoots/2023-05-luggage-travel/230509-suitcase-0400.jpg",
    content: `
      <p>Packing light is an art—and a necessity. This guide reveals how to pack smart for a 2-week trip with just a carry-on.</p>
      <h2>Choose a Capsule Wardrobe</h2>
      <p>Pick clothes that mix and match. Stick to one color palette so everything goes together.</p>
      <h2>Roll, Don’t Fold</h2>
      <p>Rolling saves space and reduces wrinkles. Use packing cubes to stay organized.</p>
      <h2>Essentials Only</h2>
      <ul>
        <li>3–4 tops</li>
        <li>2 bottoms</li>
        <li>1 jacket</li>
        <li>Underwear & socks (1 per day)</li>
        <li>Toiletries in travel sizes</li>
      </ul>
      <p>Remember: You can always wash clothes or buy what you need.</p>
    `,
  },
  {
    id: 1,
    tag: "Destination",
    title: "Top 5 Hidden Hiking Trails Around the World",
    meta: "Theodore Reginad • 24 Jan 2024 • 10 min read",
    hero: "https://www.travelandleisure.com/thmb/OmGhzSe-6Q6aC3aeCoZfdoBAs08=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19-mount-rainier-national-park-washington-BESTHIKE0407-1b2ae69a788f49a996e64ff38f05275a.jpg",
    content: `
      <p>Escape the crowds and discover these breathtaking but lesser-known hiking trails.</p>
      <h2>1. Cinque Terre, Italy (Lesser Path)</h2>
      <p>Avoid the main tourist route and take the higher trail for panoramic coastal views.</p>
      <h2>2. Zhangjiajie, China</h2>
      <p>Home of the Avatar mountains, this park has quiet forest paths beyond the main boardwalks.</p>
      <h2>3. Rota Vicentina, Portugal</h2>
      <p>Coastal cliffs, fishing villages, and wildflowers—perfect for spring hikes.</p>
      <h2>4. Kodaikanal to Berijam Lake, India</h2>
      <p>A misty forest trail through untouched biodiversity.</p>
      <h2>5. Troll’s Path, Norway</h2>
      <p>Narrow ledge with views straight into a deep valley—only for the brave!</p>
    `,
  },
  {
    id: 2,
    tag: "Culinary",
    title: "Street Foods You Must Try When Traveling Asia",
    meta: "Sophie Mitchell • 15 Feb 2024 • 8 min read",
    hero: "https://www.globaltimes.cn/Portals/0/attachment/2019/2019-06-27/a032b18c-30a7-49f4-9191-34ee439a358d.jpeg",
    content: `
      <p>Asia is a street food paradise. From sizzling skewers to sweet desserts, here are the must-try bites.</p>
      <h2>Thailand: Pad Thai from a Street Cart</h2>
      <p>Cooked fresh in minutes, with tamarind, peanuts, and chili.</p>
      <h2>Turkey: Simit</h2>
      <p>Sesame-crusted bread rings sold at every corner—perfect with tea.</p>
      <h2>India: Pani Puri</h2>
      <p>Crunchy hollow puris filled with spiced potato and tangy water. One bite bliss!</p>
      <h2>Japan: Takoyaki</h2>
      <p>Octopus balls topped with mayo and bonito flakes.</p>
      <h2>Vietnam: Bánh Mì</h2>
      <p>Crusty baguette with pickled veggies, meat, and chili. Only $1–2!</p>
      <p>Pro tip: Eat where the locals line up!</p>
    `,
  },
  {
    id: 3,
    tag: "Tips & Hacks",
    title: "10 Travel Hacks That Will Save You Time and Money",
    meta: "Alex Bennett • 1 Mar 2024 • 6 min read",
    hero: "https://img.freepik.com/premium-photo/passport-suitcase-plane-ticket-travel-safety-airport-immigration-holiday-vacation-luggage-document-visa-board-flight-traveling-abroad-overseas-with-airline-airplane_590464-90237.jpg",
    content: `
      <p>Smart travelers know the tricks. Here are 10 hacks to make your trip smoother.</p>
      <h2>1. Use Incognito Mode When Booking</h2>
      <p>Some sites raise prices based on your search history.</p>
      <h2>2. Pack a Foldable Tote</h2>
      <p>Use it as a day bag or extra luggage if you shop too much!</p>
      <h2>3. Download Offline Maps</h2>
      <p>Google Maps lets you save areas for offline use—no data needed.</p>
      <h2>4. Carry a Power Bank</h2>
      <p>Stay charged on long journeys.</p>
      <h2>5. Book Refundable Flights First</h2>
      <p>Hold a spot, then cancel if you find a better deal.</p>
      <h2>6. Travel Mid-Week</h2>
      <p>Tuesdays and Wednesdays are often cheaper.</p>
      <h2>7. Use Free Walking Tours</h2>
      <p>Pay what you want at the end—great way to learn and meet people.</p>
      <h2>8. Drink Tap Water (If Safe)</h2>
      <p>Refill your bottle instead of buying new ones.</p>
      <h2>9. Eat Lunch Specials at Fancy Restaurants</h2>
      <p>Same quality, half the price.</p>
      <h2>10. Carry a Universal Adapter</h2>
      <p>One plug for all countries.</p>
    `,
  },
  {
    id: 4,
    tag: "Lifestyle",
    title: "What I Learned from Traveling Alone for a Year",
    meta: "Theodore Reginad • 24 Jan 2024 • 10 min read",
    hero: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF369EkKoXQX4F2iQBaIaEKXlhwYu85pt_Ng&s",
    content: `
      <p>One year. 28 countries. No companion. Here's what I discovered about myself and the world.</p>
      <h2>Loneliness Is Temporary</h2>
      <p>You feel alone at first, but within days, you start connecting—with locals, fellow travelers, even yourself.</p>
      <h2>Trust Your Instincts</h2>
      <p>Your gut is your best safety tool. If something feels off, leave.</p>
      <h2>You Don’t Need Much</h2>
      <p>I started with 30kg of gear. Ended with 10kg. Less baggage = more freedom.</p>
      <h2>Kindness Is Universal</h2>
      <p>I was hosted by strangers in Morocco, helped by a farmer in Vietnam, and fed by a grandmother in Georgia.</p>
      <h2>Travel Changes You</h2>
      <p>You become more patient, adaptable, and grateful. And you realize home isn't a place—it's a feeling.</p>
    `,
  },
  {
    id: 5,
    tag: "Destination",
    title: "Discovering the Magic of Morocco’s Blue City",
    meta: "Theodore Reginad • 24 Jan 2024 • 10 min read",
    hero: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-wJFUuF7IwgCydqPX6iFIQ3qL2mCEaW1oQ&s",
    content: `
      <p>Located in the Rif Mountains, Chefchaouen—also known as the Blue City—is a dream in shades of azure.</p>
      <h2>A City Painted in Blue</h2>
      <p>Every wall, stair, and door is painted blue. The color varies from sky to cobalt, creating a surreal vibe.</p>
      <h2>Why Blue?</h2>
      <p>Some say it represents the sky and heaven. Others believe it keeps mosquitoes away. Either way, it's magical.</p>
      <h2>What to Do</h2>
      <ul>
        <li>Hike to the Spanish Mosque for sunset views</li>
        <li>Explore the medina and buy handmade crafts</li>
        <li>Drink fresh mint tea in a rooftop café</li>
        <li>Photograph every corner—it's Instagram heaven!</li>
      </ul>
      <p>Chefchaouen is peaceful, artistic, and unforgettable.</p>
    `,
  },
  {
    id: 6,
    tag: "Culinary",
    title: "Global Coffee Culture: Brews from Every Corner",
    meta: "Sophie Mitchell • 15 Feb 2024 • 8 min read",
    hero: "https://www.nescafe.com/gb/sites/default/files/2023-08/Coffee%20Cup%20Guide%20Banner%20Desktop.jpg",
    content: `
      <p>Coffee is more than a drink—it's a ritual. Here's how the world enjoys it.</p>
      <h2>Italy: Espresso</h2>
      <p>Standing at the bar, one shot, no sugar. Fast and strong.</p>
      <h2>Turkey: Turkish Coffee</h2>
      <p>Boiled with sugar and cardamom, served with grounds at the bottom.</p>
      <h2>Ethiopia: Jebena Coffee</h2>
      <p>Poured from a clay pot in a ceremonial tradition. Bitter, smoky, and sacred.</p>
      <h2>Sweden: Fika</h2>
      <p>A coffee break with a pastry—mandatory social event!</p>
      <h2>Vietnam: Cà Phê Sữa Đá</h2>
      <p>Strong drip coffee with sweetened condensed milk and ice.</p>
      <p>No matter the style, coffee brings people together.</p>
    `,
  },
  {
    id: 7,
    tag: "Tips & Hacks",
    title: "Essential Gear Checklist for First-Time Backpackers",
    meta: "Alex Bennett • 1 Mar 2024 • 6 min read",
    hero: "https://thumbs.dreamstime.com/b/collection-hiking-camping-gear-laid-out-forest-floor-various-supplies-including-backpacks-boots-other-351864197.jpg",
    content: `
      <p>Don't get caught unprepared. Here's your must-have list for your first backpacking trip.</p>
      <h2>Backpack (40–60L)</h2>
      <p>Comfortable straps and hip belt are key.</p>
      <h2>Tent & Sleeping Bag</h2>
      <p>Choose one rated for the season.</p>
      <h2>Water Filtration System</h2>
      <p>Never run out. Pump, straw, or purification tablets.</p>
      <h2>First Aid Kit</h2>
      <p>Bandages, antiseptic, blister pads, painkillers.</p>
      <h2>Clothing</h2>
      <ul>
        <li>Moisture-wicking base layers</li>
        <li>Insulating mid-layer (fleece)</li>
        <li>Rain jacket</li>
        <li>Hiking boots (broken in!)</li>
        <li>Extra socks</li>
      </ul>
      <h2>Extras</h2>
      <ul>
        <li>Headlamp + batteries</li>
        <li>Multi-tool</li>
        <li>Map & compass</li>
        <li>Snacks (trail mix, energy bars)</li>
      </ul>
      <p>Test your gear before you go!</p>
    `,
  },
];

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [currentPost, setCurrentPost] = useState(null);
  const [comments, setComments] = useState([
    {
      name: "Amelia Rose",
      text: "🌄 This post really inspired me to finally hike the Simien Mountains. Thanks!",
    },
    {
      name: "Daniel B.",
      text: "Loved the gear tips section. I never thought about bringing sunscreen for hiking!",
    },
  ]);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  // Find the current post
  useEffect(() => {
    if (id !== undefined) {
      const postIndex = parseInt(id);
      if (postIndex >= 0 && postIndex < posts.length) {
        setCurrentPost(posts[postIndex]);
      }
    }
  }, [id]);

  const loadNextPost = () => {
    if (currentPost) {
      const nextId = (currentPost.id + 1) % posts.length;
      router.push(`/blog/${nextId}`);
    }
  };

  const loadPreviousPost = () => {
    if (currentPost) {
      const prevId = (currentPost.id - 1 + posts.length) % posts.length;
      router.push(`/blog/${prevId}`);
    }
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (name.trim() && commentText.trim()) {
      setComments([
        ...comments,
        { name: name.trim(), text: commentText.trim() },
      ]);
      setName("");
      setCommentText("");
    }
  };

  if (!currentPost) {
    return (
      <>
        <Head>
          <title>Post Not Found</title>
        </Head>
        <Navbar />
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <h1>Post not found</h1>
          <p>
            <a href="/">Return to homepage</a>
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{currentPost.title} - Diana Blog</title>
        <meta name="description" content={currentPost.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      {/* Blog Hero Image */}
      <section className="blog-hero">
        <img src={currentPost.hero} className="hero-bg" alt="Blog Hero" />
        <div className="blog-hero-overlay">
          <span className="tag">{currentPost.tag}</span>
          <h1>{currentPost.title}</h1>
          <div className="author-info">
            <img
              src="https://static.vecteezy.com/system/resources/previews/029/796/026/non_2x/asian-girl-anime-avatar-ai-art-photo.jpg"
              alt="Author"
              className="avatar"
            />
            <span>{currentPost.meta}</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <main className="blog-content">
        <article dangerouslySetInnerHTML={{ __html: currentPost.content }} />

        <div className="post-nav">
          <button onClick={loadPreviousPost}>← Previous Post</button>
          <button onClick={loadNextPost}>Next Post →</button>
        </div>
      </main>

      {/* Comment Section */}
      <section className="comment-section">
        <h2>Comments</h2>

        {/* Existing Comments */}
        <div id="comment-list">
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              <h4>{comment.name}</h4>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>

        {/* New Comment Form */}
        <form onSubmit={handleSubmitComment} className="comment-form">
          <h4>Leave a Comment</h4>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            rows="4"
            placeholder="Write your comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <Footer />
    </>
  );
}
