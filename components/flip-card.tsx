"use client";

import Link from "next/link";

export function FlipCard() {
  return (
    <>
      <style jsx global>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 12rem;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
      <Link href="/about-me" className="flip-card">
        <div className="flip-card-inner">
          {/* Front of card */}
          <div className="flip-card-front border rounded-lg p-6 text-center bg-card">
            <h2 className="text-2xl font-bold mb-2">
              you want to really get to know me?
            </h2>
            <p className="text-muted-foreground">hover over</p>
          </div>
          {/* Back of card */}
          <div className="flip-card-back border rounded-lg p-6 text-center bg-card">
            <h2 className="text-2xl font-bold mb-2">personal life</h2>
            <p className="text-muted-foreground">
              learn about the real me - my hobbies, interests, personal life.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
