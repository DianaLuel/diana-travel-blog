import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Diana Travel Blog</title>
        <meta
          name="description"
          content="Learn about Diana Travel Blog and our team"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <section className="about-content">
        <h1>About Horizon</h1>
        <p>
          Horizon is a travel blog dedicated to inspiring wanderlust and helping
          you explore the world smarter and better. Since our launch in 2023,
          we've been sharing curated stories about hidden destinations, cultural
          cuisine, travel hacks, and lifestyle advice from passionate explorers.
        </p>
        <p>
          Our team believes that travel is not just about the places you visit
          but the experiences you gather along the way. We're here to guide you,
          whether you're a seasoned traveler or planning your first adventure.
        </p>

        <h2>Meet the Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img
              src="https://static.vecteezy.com/system/resources/previews/029/796/026/non_2x/asian-girl-anime-avatar-ai-art-photo.jpg"
              alt="Theodore Reginad"
            />
            <h3>Theodore Reginad</h3>
            <p>Founder & Lead Writer</p>
          </div>
          <div className="team-member">
            <img
              src="https://marketplace.canva.com/EAFN_7rJDRQ/1/0/1600w/canva-beige-cute-cartoon-illustration-girl-avatar-E7_RvrHMyYU.jpg"
              alt="Sophie Mitchell"
            />
            <h3>Sophie Mitchell</h3>
            <p>Culinary Specialist & Editor</p>
          </div>
          <div className="team-member">
            <img
              src="https://wallpapers.com/images/hd/cute-avatar-profile-picture-23yuqpb8wz1dqqqv.jpg"
              alt="Alex Bennett"
            />
            <h3>Alex Bennett</h3>
            <p>Travel Hacks Expert & Content Creator</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
