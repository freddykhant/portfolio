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
        <p> WIP ⚠️</p>
      </header>
    </div>
  );
}
