import Reveal from "@/components/Reveal";

export default function Materials() {
  return (
    <main className="bg-[#f7f6f3] text-[#1c1c1c]">

      <section className="py-40 px-6 md:px-16 lg:px-32">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-light mb-12">
            Materials chosen for longevity, not trends.
          </h1>

          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-xl font-light mb-4">Cabinet Materials</h3>
              <p className="text-sm text-[#555] leading-relaxed">
                Durable boards and finishes designed to age gracefully.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4">Hardware</h3>
              <p className="text-sm text-[#555] leading-relaxed">
                Smooth mechanisms, tested for daily use.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4">Finishes</h3>
              <p className="text-sm text-[#555] leading-relaxed">
                Neutral, timeless tones that complement any home.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

    </main>
  );
}
