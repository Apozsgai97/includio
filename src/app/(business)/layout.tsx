import { Nav } from "@/features";
import { Footer } from "@/features/business/components/footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer/>
    </>
  );
}
