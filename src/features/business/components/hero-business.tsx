import Image from "next/image";
export function HeroBusiness() {
  return (
    <>
      <section className="hero p-4">
        <div className="hero-content flex flex-col text-center md:flex-row">
          <div className="prose max-w-md">
            <h1 className="text-5xl font-bold"> Welcome to Includio!</h1>
            <p className="py-6  text-2xl mt-2">
              Inclusion Made Easy for Businesses
            </p>
          </div>
          <Image
            src="/accessible_restaurant.png"
            width={400}
            height={400}
            alt="Three women are eating in a restaurant and one of them is in a wheelchair."
            className="md:ml-10 pt-0 mt-6 md:mt-0 shadow-2xl rounded-lg"
          />
        </div>
      </section>
    </>
  );
}
