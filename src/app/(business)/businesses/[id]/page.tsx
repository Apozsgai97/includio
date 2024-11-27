import { businessFeature } from "@/features/business/instance";
import Image from "next/image";
import Link from "next/link";
import { CgAdd, CgCloseO } from "react-icons/cg";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  
  const business = await businessFeature.service.getBusinessById(id)
  const accessibilityIndex = await businessFeature.service.getAccessibilityIndexById(id)

  return (
    <div className="container mx-auto max-w-4xl rounded-lg shadow-md md:m-6">
      <section className="flex flex-col sm:flex-row items-center gap-8 pb-6 md:pb-0 rounded-t-lg bg-emerald-900">
        <Image
          src={business.image}
          width={300}
          height={300}
          alt={`Picture of ${business.name}`}
          className="pt-0 md:mt-0 md:rounded-tl-lg  w-full md:h-96 md:w-96 object-cover"
        />
        <div className="text-center md:text-left w-full px-10">
          <h1 className="text-4xl font-bold text-gray-50">{business.name}</h1>
          <p className="text-gray-100 text-lg">{business.category}</p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-6 py-6">
        <article className="max-w-96 md:w-96 ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 pl-4">
            Location
          </h2>
          <p className="text-gray-700 mb-2 pl-4">{business.address}</p>
          <div className="w-full h-64 overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1140.631670099329!2d18.009561359512706!3d59.33756915057438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d1ad188b8f3%3A0xf92c2f046e1956f2!2sSALT%20%F0%9F%A7%82%20School%20of%20Applied%20Technology!5e0!3m2!1ssv!2sse!4v1732633301034!5m2!1ssv!2sse"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </article>
        <article className="flex flex-col flex-1 justify-start md:px-12 p-4 md:py-0">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">About</h2>
            <p className="text-gray-700 mb-4">{business.description}</p>
          </div>
          <div className="flex flex-col items-start justify-around">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Contact
            </h2>
            <h3 className="font-semibold">E-mail</h3>
            <p className="text-gray-700 flex items-center gap-2 py-2">
              {`📧 ${business.contact.email}`}
            </p>
            <h3 className="font-semibold">Telephone number</h3>
            <p className="text-gray-700 flex items-center gap-2 py-2">
              {`📞 ${business.contact.mobile}`}
            </p>
          </div>
        </article>
      </section>
      <section className=" flex flex-col justify-center items-center md:p-8 bg-emerald-50">
        <div className="md:w-11/12 w-full shadow-md p-6 flex flex-col justify-center items-center rounded-lg md:bg-white bg-emerald-50">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Accessibility
          </h2>
          <article className="stats shadow my-8 w-44 border-2 border-accent">
            <div className="stat text-center p-1">
              <div className="stat-title">Score</div>
              <div className="stat-value">0</div>
            </div>
          </article>
          <article className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold mb-2">
              Accessibility Features
            </h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Features</th>
                    <th></th>
                    <th></th>
                    <th>Available</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr>
                    <td>Ramp or Stairless Entry</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.ramp === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Automatic Doors with Buttons</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.doors === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Accessible Parking Spot</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.parking === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Restroom has minimum dimensions of 2450mm x 2450mm</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.dimension === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Restroom has grab rails</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.grabRails === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Restroom has emergency button</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.emergencyButton === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Restroom has a ceiling lift</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.ceilingLift === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Restroom has a shower bed</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.showerBed === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      The main area has a walking space of at least 2 meters
                    </td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.space === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Easy access to restroom</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.restroomAccess === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td> No stairs or high thresholds inside</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.insideStairs === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td> Accessible tables and reachable equipments</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.tables === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Access for Service Dog</td>
                    <td></td>
                    <td></td>
                    <td className="flex justify-center items-center">
                      {accessibilityIndex?.dog === "yes" ? (
                        <CgAdd size={28} color="green" />
                      ) : (
                        <CgCloseO size={26} color="red" />
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link
              href={`/businesses/edit/index/${business.id}`}
              className="btn bg-emerald-900 h-14 text-slate-50 text-base hover:bg-emerald-800 rounded-lg mt-4 w-40"
            >
              Edit
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
