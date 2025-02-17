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
        <h1 className="text-3xl font-bold mb-2">Freddy Khant</h1>
        <p className="text-xl text-gray-600 mb-4">
          Software Engineering Student
        </p>
      </header>
    </div>
  );
}
