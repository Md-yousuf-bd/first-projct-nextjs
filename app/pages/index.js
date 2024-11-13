// pages/index.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="hero">
        <h1>Welcome to My Next.js Site</h1>
        <p>Building modern web apps with Next.js and CSS.</p>
      </div>
      <div className="container">
        <div className="grid">
          <Card title="Feature 1" text="Description of feature 1." />
          <Card title="Feature 2" text="Description of feature 2." />
          <Card title="Feature 3" text="Description of feature 3." />
          <Card title="Feature 4" text="Description of feature 4." />
        </div>
      </div>
      <Footer />
    </div>
  );
}
