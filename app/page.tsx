import Image from "next/image";

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
