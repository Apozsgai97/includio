export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <article className="flex flex-col justify-center items-center border-2 border-accent rounded-lg p-12 bg-white">
        <h1 className="text-4xl font-bold mb-6">Contact us</h1>
        <h2 className="text-xl font-semibold">Telephone number</h2>
        <p className="mb-6">+46701223456</p>
        <h2 className="text-xl font-semibold">E-mail</h2>
        <p>example@example.com</p>
      </article>
    </div>
  ); 
 }