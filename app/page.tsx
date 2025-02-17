import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const projects = [
  {
    name: "ai-chatbot",
    description: "AI chatbot with RAG + web scraping capabilities 🤖",
    link: "https://github.com/freddykhant/ai-chatbot",
  },
  {
    name: "flex-ai",
    description:
      "flex-ai is your personal trainer and chatbot in one, leveraging an RAG pipeline to retrieve info from academic research to answer your fitness questions💪",
    link: "https://github.com/freddykhant/flex-ai",
  },
  {
    name: "summary-ai",
    description:
      "summary-ai is your intelligent csv analyser and summariser, using a RAG pipeline to extract key insights from your data files and provide concise, ai-powered summaries and insights 📊🧠",
    link: "https://github.com/freddykhant/summary-ai",
  },
  {
    name: "buildshare",
    description:
      "a social media for tech setups, built as part of buildspace's s4 nights & weekends program",
    link: "https://github.com/freddykhant/buildshare_app",
  },
  {
    name: "portfolio",
    description: "this website right here 😁",
    link: "https://github.com/freddykhant/portfolio",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <Image
          src="/pfp.jpg"
          alt="me"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">freddy khant</h1>
        <p className="text-xl text-gray-600 mb-4">
          software engineering student
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">about me</h2>
        <p className="text-gray-700">
          i am a final year student studying bachelor of computing - software
          engineering @ curtin university. i love building cool projects and
          have a keen interest in new and innovative technologies 💻.
        </p>
      </section>
    </div>
  );
}
