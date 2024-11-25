import Image from "next/image";

export function BusinessCard() {
  return (
    <div className="card card-side bg-base-100 shadow-xl mt-10 max-w-4xl">
      <Image
        src="/restaurant1.png"
        width={300}
        height={400}
        alt="Picture of the slow chat application"
        className="pt-0 mt-6 md:mt-0 shadow-2xl rounded-lg"
      />
      <div className="card-body">
        <h2 className="card-title">Harmony Bites</h2>
        <p>
          A contemporary dining destination blending global flavors with a touch
          of innovation. From expertly crafted appetizers to indulgent desserts,
          every dish is a celebration of taste and creativity. Perfect for
          casual dinners or special occasions.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary h-14 text-base rounded-lg">Read More</button>
        </div>
      </div>
    </div>
  );
}
