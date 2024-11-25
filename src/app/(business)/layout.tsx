import { Nav } from "@/features/business/components/nav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
     <Nav/>
      <main>{children}</main>
    </>
  );
}
