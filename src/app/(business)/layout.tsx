import { Nav } from "@/features";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
     <Nav/>
      <main>{children}</main>
    </>
  );
}
