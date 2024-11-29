import { createAccessibilityIndex } from "@/features/business/action";
import { businessFeature } from "@/features/business/instance";
import Link from "next/link";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const accessibilityIndex = await businessFeature.service.getAccessibilityIndexById(id);
 
 return (
   <section className="flex flex-col justify-center items-center md:w-6/12">
     <form
       action={createAccessibilityIndex}
       className="flex flex-col justify-center items-center p-8 w-full md:shadow-xl md:my-12 my-4 md:rounded-lg md:border-accent md:border-2 prose"
       aria-labelledby="form-title"
     >
       <h1 id="form-title" className="text-2xl font-bold mb-4 text-center">
         Accessibility Rating
       </h1>
       <Link
         href={"/businesses/index"}
         className="mb-8 font-medium text-blue-600 dark:text-blue-500 hover:underline"
       >
         {" "}
         Read more about the Accessibility Rating
       </Link>

       <input type="hidden" name="businessId" value={id} />

       <fieldset className="w-full max-w-xl mb-6">
         <legend className="text-lg font-bold mb-4">Entry Accessibility</legend>

         <div className="flex justify-between  items-center border-t-2 py-2 border-b-2 border-zinc-100">
           <label htmlFor="ramp"> Ramp or Stairless Entry</label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="ramp"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.ramp === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="ramp"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.ramp !== "yes"}
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center py-2 border-b-2 border-zinc-100">
           <label htmlFor="doors"> Automatic Doors with Buttons</label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="doors"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.doors === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="doors"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.doors !== "yes"}
               />
               No
             </label>
           </div>
         </div>
       </fieldset>
       <fieldset className="w-full max-w-xl mb-6">
         <legend className="text-lg font-bold mb-4">
           Parking accessibility
         </legend>

         <div className="flex justify-between items-center border-t-2 py-2 border-b-2 border-zinc-100">
           <label htmlFor="parking"> Accessible Parking Spot</label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="parking"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.parking === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="parking"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.parking !== "yes"}
               />
               No
             </label>
           </div>
         </div>
       </fieldset>
       <fieldset className="w-full max-w-xl mb-6">
         <legend className="text-lg font-bold mb-4">
           Restroom Accessibility
         </legend>

         <div className="flex justify-between items-center border-t-2 py-2 border-b-2 border-zinc-100">
           <label htmlFor="dimension" className="md:max-w-72 max-w-60">
             Restroom has minimum dimensions of 2450mm x 2450mm
           </label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="dimension"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.dimension === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="dimension"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.dimension !== "yes"}
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center py-2 border-b-2 border-zinc-100">
           <label htmlFor="grab-rails">Grab rails</label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="grab-rails"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.grabRails === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="grab-rails"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.grabRails !== "yes"}
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center py-2 border-b-2 border-zinc-100">
           <label htmlFor="emergency-button">Emergency button</label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="emergency-button"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.emergencyButton === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="emergency-button"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.emergencyButton !== "yes"}
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center py-2 border-b-2 border-zinc-100">
           <label htmlFor="shower-bed">Shower bed</label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="shower-bed"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.showerBed === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="shower-bed"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.showerBed !== "yes"}
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center py-2 border-b-2 border-zinc-100">
           <label htmlFor="ceiling-lift">Ceiling lift</label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="ceiling-lift"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.ceilingLift === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="ceiling-lift"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.ceilingLift !== "yes"}
               />
               No
             </label>
           </div>
         </div>
       </fieldset>
       <fieldset className="w-full max-w-xl mb-6">
         <legend className="text-lg font-bold mb-4">
           Main Area Accessibility
         </legend>

         <div className="flex justify-between items-center border-t-2 py-2 border-b-2 border-zinc-100">
           <label htmlFor="space" className="md:max-w-72 max-w-60">
             Walking space of at least 2 meters
           </label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="space"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.space === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="space"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.space !== "yes"}
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center py-2 border-b-2 border-zinc-100">
           <label htmlFor="restroom-access">Easy access to restroom</label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="restroom-access"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.restroomAccess === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="restroom-access"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.restroomAccess !== "yes"}
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center py-2 border-b-2 border-zinc-100">
           <label htmlFor="inside-stairs" className="md:max-w-96 max-w-60">
             No stairs or high thresholds inside
           </label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="inside-stairs"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.insideStairs === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="inside-stairs"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.insideStairs !== "yes"}
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center py-2 border-b-2 border-zinc-100">
           <label htmlFor="tables" className="md:max-w-72 max-w-60">
             Accessible tables and reachable equipments
           </label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="tables"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.tables === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="tables"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.tables !== "yes"}
               />
               No
             </label>
           </div>
         </div>
       </fieldset>
       <fieldset className="w-full max-w-xl mb-6">
         <legend className="text-lg font-bold mb-4">Service Dog</legend>

         <div className="flex justify-between items-center border-t-2 py-2 border-b-2 border-zinc-100">
           <label htmlFor="dog"> Access for Service Dogs</label>
           <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center">
             <label className="mr-4">
               <input
                 type="radio"
                 name="dog"
                 value="yes"
                 required
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.dog === "yes"}
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="dog"
                 value="no"
                 className="mr-1"
                 defaultChecked={accessibilityIndex?.dog !== "yes"}
               />
               No
             </label>
           </div>
         </div>
       </fieldset>

       <button
         type="submit"
         className="btn bg-emerald-900 h-14 text-slate-50 hover:bg-emerald-800 rounded-lg mt-4 w-24"
       >
         Edit
       </button>
     </form>
   </section>
 ); 
 
 
 }