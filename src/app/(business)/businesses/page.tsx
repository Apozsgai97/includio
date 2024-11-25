import Image from "next/image";
export default function Page() {
  return (
    <>
      <section className="hero p-8">
        <div className="hero-content flex flex-col text-center md:flex-row">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold"> Welcome to Includio!</h1>
            <p className="py-6  text-2xl mt-4">
              Inclusion Made Easy for Businesses
            </p>
          </div>
          <Image
            src="/accessible_restaurant.png"
            width={400}
            height={400}
            alt="Picture of the slow chat application"
            className="md:ml-10 pt-0 mt-6 md:mt-0 shadow-2xl rounded-lg"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-12">
        <h2 className="text-3xl font-bold">Your Businesses</h2>
      </section>
    </>
  );
}
