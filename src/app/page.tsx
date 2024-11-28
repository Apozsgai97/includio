import Link from "next/link";

export default function Home() {
  return (
    <div className="hero bg-gradient-to-r from-emerald-100 to-pink-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-7xl font-bold">Includio</h1>
          <p className="py-12 font-semibold text-xl leading-10">
            Includio bridges the gap between businesses and customers seeking
            accessible places. <br /> Empower businesses to improve accessibility with
            scores, feedback, and progress tracking, while connecting them to
            clients eager to explore inclusive spaces. <br />Simple tools for
            meaningful change.
          </p>
          <Link
            href={`/businesses`}
            className="btn bg-emerald-900 h-14 text-lg text-slate-50 hover:bg-emerald-800 rounded-xl mr-12"
          >
            Business
          </Link>
          <Link
            href={`/businesses`}
            className="btn bg-emerald-900 h-14 text-lg text-slate-50 hover:bg-emerald-800 rounded-xl"
          >
            Customer
          </Link>
        </div>
      </div>
    </div>
  );
}
