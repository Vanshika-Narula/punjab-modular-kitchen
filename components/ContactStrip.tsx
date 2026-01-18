"use client";

import Reveal from "@/components/Reveal";

type ContactStripProps = {
  showMap?: boolean;
};

export default function ContactStrip({ showMap = true }: ContactStripProps) {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-32 bg-[#f7f6f3]">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-24 max-w-7xl mx-auto items-start">

          {/* LEFT: CONTACT INFO */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-12">
              Visit or Get in Touch
            </h2>

            <div className="space-y-8 text-[#555]">

              {/* EMAIL */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#777] mb-2">
                  Email
                </p>
                <a
                  href="mailto:info@punjabmodularkitchen.com"
                  className="text-base hover:text-black transition"
                >
                  info@punjabmodularkitchen.com
                </a>
              </div>

              {/* PHONE */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#777] mb-2">
                  Phone
                </p>
                <a
                  href="tel:+917696306556"
                  className="text-base hover:text-black transition"
                >
                  +91 76963 06556
                </a>
              </div>

              {/* ADDRESS */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#777] mb-2">
                  Address
                </p>
                <p className="leading-relaxed max-w-md">
                  Punjab Modular Kitchen<br />
                  Kesar Nagar, Peer Wali Galli, Plot No-1,<br />
                  Behind Samta Yog Ashram Road<br />
                  Jagadhri, Haryana 135001
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT: MAP */}
          {showMap && (
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">

              {/* MAP */}
              <iframe
                title="Punjab Modular Kitchen Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d55202.61705347959!2d77.27499585!3d30.146739300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKesar%20nagar%2C%20Peer%20Wali%20Galli%2C%20Plot%20No-1%2C%20behind%20Samta%20Yog%20Asram%20Road%2C%20Jagadhri%2C%20Haryana%20135001!5e0!3m2!1sen!2sin!4v1768746515705!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0
                 contrast-105 brightness-95"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* SOFT OVERLAY */}
              <div className="absolute inset-0 bg-[#f7f6f3]/20 pointer-events-none" />

              {/* LOCATION TAG */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur
                px-4 py-2 text-xs tracking-wide">
                Jagadhri, Haryana
              </div>

            </div>
          )}

        </div>
      </Reveal>
    </section>
  );
}
