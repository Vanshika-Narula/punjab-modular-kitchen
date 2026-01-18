export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-20">

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-light tracking-wide">
              Punjab Modular Kitchen
            </h3>
            <p className="mt-4 text-sm text-[#555] max-w-sm">
              Thoughtfully designed modular and stainless steel kitchens for
              modern homes across Punjab.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-end gap-3 text-sm text-[#555]">
            <a href="/kitchens" className="hover:text-black transition">
              Kitchens
            </a>
            <a href="/process" className="hover:text-black transition">
              Process
            </a>
            <a href="/about" className="hover:text-black transition">
              About
            </a>
            <a href="/contact" className="hover:text-black transition">
              Book Consultation
            </a>
          </div>

        </div>

        <div className="mt-20 text-xs text-[#777]">
          © {new Date().getFullYear()} Punjab Modular Kitchen. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
