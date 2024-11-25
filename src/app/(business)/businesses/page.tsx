import { BusinessCard, HeroBusiness } from "@/features";
export default function Page() {
  return (
    <>
      <HeroBusiness/>
      <section className="flex flex-col justify-center items-center mt-12 bg-green-50 py-6 pt-12">
        <h2 className="text-4xl font-bold mb-6">Your Businesses</h2>
        <button className="btn btn-secondary h-14 text-base rounded-lg flex items-center">
          <span className="mr-1 text-lg">+</span>Add a new business
        </button>
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
      </section>
    </>
  );
}
