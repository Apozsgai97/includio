import Link from "next/link";

export function Nav(){
 return (
   <nav className="navbar bg-green-50">
     <div className="flex-1">
       <Link className="text-lg font-bold" href="/">
         Includio
       </Link>
     </div>
     <div className="flex-none">
       <ul className="hidden md:flex menu menu-horizontal px-1 font-bold">
         <li className="px-2">
           <Link
             className="hover:bg-green-100 rounded-lg text-base"
             href="\businesses\"
           >
             Businesses
           </Link>
         </li>
         <li>
           <Link
             className="hover:bg-green-100 rounded-lg text-base"
             href="\businesses\index"
           >
             Index
           </Link>
         </li>
         <li>
           <Link className="hover:bg-green-100 rounded-lg text-base" href="/">
             Contact
           </Link>
         </li>
       </ul>
       <div className="block md:hidden dropdown">
         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M4 6h16M4 12h16M4 18h7"
             />
           </svg>
         </div>
         <ul
           tabIndex={0}
           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 left-auto right-0 shadow"
         >
           <li>
             <Link href="\businesses\">Businesses</Link>
           </li>
           <li>
             <Link href="\businesses\index">Index</Link>
           </li>
           <li>
             <Link href="/">Contact</Link>
           </li>
         </ul>
       </div>
     </div>
   </nav>
 );
}