export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
     <nav>Home</nav>
      <main>{children}</main>
    </>
  );
}
