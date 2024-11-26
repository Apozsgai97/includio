import { BusinessCard, HeroBusiness } from "@/features";
import { businessFeature } from "@/features/business/instance";

export default async function Page() {
  
 const businesses = await businessFeature.service.getAllElections()
 
 return (
    <>
      <HeroBusiness/>
      <section className="flex flex-col justify-center items-center mt-12 bg-green-50 py-6 pt-12">
        <h2 className="text-4xl font-bold mb-6">Your Businesses</h2>
        <button className="btn bg-emerald-900 h-14 text-slate-50 hover:bg-emerald-800 rounded-lg flex items-center">
          <span className="mr-1 text-lg">+</span>Add a new business
        </button>
        {businesses.map((business) => (
         <BusinessCard key={business.id} business={business}/>
        ))}
      </section>
    </>
  );
}
