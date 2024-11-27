import Link from "next/link";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
 
 return (
   <section className="flex flex-col justify-center items-center md:w-6/12">
     <form
       action={"addBusiness"}
       className="flex flex-col justify-center items-center p-8 w-full md:shadow-xl md:my-12 my-4 md:rounded-lg md:border-accent md:border-2"
       aria-labelledby="form-title"
     >
       <h1 id="form-title" className="text-2xl font-bold mb-4 text-center">
         Accessibility Index
       </h1>
       <Link
         href={"/businesses/index"}
         className="mb-8 font-medium text-blue-600 dark:text-blue-500 hover:underline"
       >
         {" "}
         Read more about the Accessibility Index
       </Link>

       <fieldset className="w-full max-w-xl mb-6">
         <legend className="text-lg font-bold mb-4">Entry Accessibility</legend>

         <div className="flex justify-between items-center mb-4">
           <label htmlFor="ramp"> Ramp or Stairless Entry</label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="ramp"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input type="radio" name="ramp" value="no" className="mr-1" />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center mb-4">
           <label htmlFor="doors"> Automatic Doors with Buttons</label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="doors"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input type="radio" name="doors" value="no" className="mr-1" />
               No
             </label>
           </div>
         </div>
       </fieldset>
       <fieldset className="w-full max-w-xl mb-6">
         <legend className="text-lg font-bold mb-4">
           Parking accessibility
         </legend>

         <div className="flex justify-between items-center mb-4">
           <label htmlFor="parking"> Accessible Parking Spot</label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="parking"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input type="radio" name="parking" value="no" className="mr-1" />
               No
             </label>
           </div>
         </div>
       </fieldset>
       <fieldset className="w-full max-w-xl mb-6">
         <legend className="text-lg font-bold mb-4">
           Restroom Accessibility
         </legend>

         <div className="flex justify-between items-center mb-4">
           <label htmlFor="dimension">
             Restroom has minimum dimensions of 2450mm x 2450mm
           </label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="dimension"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="dimension"
                 value="no"
                 className="mr-1"
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center mb-4">
           <label htmlFor="grab-rails">Grab rails</label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="grab-rails"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="grab-rails"
                 value="no"
                 className="mr-1"
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center mb-4">
           <label htmlFor="emergency-button">Emergency button</label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="emergency-button"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="emergency-button"
                 value="no"
                 className="mr-1"
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center mb-4">
           <label htmlFor="shower-bed">Shower bed</label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="shower-bed"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="shower-bed"
                 value="no"
                 className="mr-1"
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center mb-4">
           <label htmlFor="ceiling-lift">Ceiling lift</label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="ceiling-lift"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="ceiling-lift"
                 value="no"
                 className="mr-1"
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

         <div className="flex justify-between items-center mb-4">
           <label htmlFor="space">Walking space of at least 2 meters</label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="space"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input type="radio" name="space" value="no" className="mr-1" />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center mb-4">
           <label htmlFor="restroom-access">Easy access to restroom</label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="restroom-access"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="restroom-access"
                 value="no"
                 className="mr-1"
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center mb-4">
           <label htmlFor="inside-stairs">
             No stairs or high thresholds inside
           </label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="inside-stairs"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input
                 type="radio"
                 name="inside-stairs"
                 value="no"
                 className="mr-1"
               />
               No
             </label>
           </div>
         </div>
         <div className="flex justify-between items-center mb-4">
           <label htmlFor="tables">
             Accessible tables and reachable equipments
           </label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="tables"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input type="radio" name="tables" value="no" className="mr-1" />
               No
             </label>
           </div>
         </div>
       </fieldset>
       <fieldset className="w-full max-w-xl mb-6">
         <legend className="text-lg font-bold mb-4">Service Dog</legend>

         <div className="flex justify-between items-center mb-4">
           <label htmlFor="dog"> Access for Service Dogs</label>
           <div>
             <label className="mr-4">
               <input
                 type="radio"
                 name="dog"
                 value="yes"
                 required
                 className="mr-1"
               />
               Yes
             </label>
             <label>
               <input type="radio" name="dog" value="no" className="mr-1" />
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