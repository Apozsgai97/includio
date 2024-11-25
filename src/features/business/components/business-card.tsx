import Image from "next/image";
import { Business } from "../repository";

type Props = {
  business: Business
}

export function BusinessCard({business}: Props) {
  return (
    <div className="card md:card-side bg-base-100 shadow-xl mt-10 max-w-4xl flex flex-col justify-center items-center w-10/12">
      <Image
        src="/restaurant1.png"
        width={300}
        height={400}
        alt="Picture of the slow chat application"
        className="pt-0 md:mt-0 shadow-2xl rounded-t-lg md:rounded-tr-none md:rounded-l-lg  w-full"
      />
      <div className="card-body">
        <h2 className="card-title">{business.name}</h2>
        <p>
          {business.description}
        </p>
        <div className="card-actions justify-end mt-3">
          <button className="btn btn-secondary h-14 text-base rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
