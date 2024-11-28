import Image from "next/image";
import { Business } from "../repository";
import Link from "next/link";

type Props = {
  business: Business
}

export function BusinessCard({business}: Props)
 {
  console.log(business.id)
  return (
    <div className="card md:card-side bg-base-100 shadow-xl mt-10 max-w-4xl flex flex-col justify-center items-center w-10/12">
      <Image
        src={business.image!}
        width={300}
        height={300}
        alt={`${business.name}`}
        className="pt-0 md:mt-0 shadow-2xl rounded-t-lg md:rounded-tr-none md:rounded-l-lg  h-80 w-80 object-cover"
      />
      <div className="prose card-body">
        <h2 className="card-title">{business.name}</h2>
        <p>{business.description}</p>
        <div className="card-actions justify-end mt-3">
          <Link
            href={`/businesses/${business.id}`}
            className="btn bg-gray-700 h-14 text-base text-slate-50 hover:bg-gray-600 rounded-lg"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
