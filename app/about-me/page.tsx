import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="absolute right-0 top-0">
        <ModeToggle />
      </div>

      <header className="mb-8">
        <Link
          href="/"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-4">Get to Know Me</h1>
        <p className="text-muted-foreground">
          A glimpse into my personal life, interests, and thoughts
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Add your hobbies and interests here */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Hobby 1</h3>
            <p className="text-muted-foreground">Description of your hobby</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Hobby 2</h3>
            <p className="text-muted-foreground">Description of your hobby</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Blog</h2>
        <div className="space-y-4">
          {/* Add your blog posts here */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Blog Post Title</h3>
            <p className="text-muted-foreground">Blog post content...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
