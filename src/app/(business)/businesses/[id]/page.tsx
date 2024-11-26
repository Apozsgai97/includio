import Image from "next/image";
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  console.log(id);

  return (
    <div className="container mx-auto max-w-4xl rounded-lg shadow-md md:m-6 pb-6">
      <section className="flex flex-col sm:flex-row items-center gap-8 mb-6 bg-emerald-50 pb-6 md:pb-0 rounded-t-lg">
        <Image
          src="/restaurant1.png"
          width={300}
          height={300}
          alt="Picture of the slow chat application"
          className="pt-0 md:mt-0 md:rounded-tl-lg  w-full md:h-96 md:w-96 object-cover"
        />
        <div className="text-center md:text-left w-full px-10">
          <h1 className="text-4xl font-bold text-gray-800">Business Name</h1>
          <p className="text-gray-600 text-lg">Category Name</p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-6">
        <article className="bg-white max-w-96 md:w-96">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 pl-4">
            Location
          </h2>
          <p className="text-gray-700 mb-2 pl-4">
            123 Example Street, Stockholm, Sweden
          </p>
          <div className="w-full h-64 overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_LINK"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </article>

        <article className="flex flex-col flex-1 bg-white justify-between md:px-12 p-4 md:py-0">
         <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            About Us
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, id quibusdam nobis incidunt, dignissimos veniam tempora corporis similique ratione nesciunt cum magnam culpa perferendis necessitatibus quam quo. Temporibus, laborum laudantium.
          </p>
         </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-around bg-slate-50 p-3 rounded-lg shadow-sm">
            <p className="text-gray-700 flex items-center gap-2">
              📧 example@email.com
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              📞 +46 123 456 789
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
