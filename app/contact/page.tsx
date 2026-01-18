export default function Contact() {
  return (
    <main className="bg-[#f7f6f3] text-[#1c1c1c]">

      <section className="py-40 px-6 md:px-16 lg:px-32 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-light mb-8">
          Let’s design your kitchen.
        </h1>

        <p className="text-[#555] mb-12">
          Share a few details and we’ll take it from there.
        </p>

        <form className="grid gap-6">
          <input className="border p-3 bg-transparent" placeholder="Name" />
          <input className="border p-3 bg-transparent" placeholder="Phone" />
          <input className="border p-3 bg-transparent" placeholder="City" />
          <textarea className="border p-3 bg-transparent" placeholder="Message" rows={4} />
          <button className="border px-8 py-3 hover:bg-black hover:text-white transition">
            Submit
          </button>
        </form>
      </section>

    </main>
  );
}
