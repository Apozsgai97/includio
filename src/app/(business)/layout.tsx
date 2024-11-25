import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="navbar bg-violet-50">
        <div className="flex-1">
          <Link className="btn btn-ghost text-lg p-1 font-bold" href=".">
            Includio
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="px-2">
              <Link href="\chat\">Businesses</Link>
            </li>
            <li>
              <Link href="\statistics\">Index</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
