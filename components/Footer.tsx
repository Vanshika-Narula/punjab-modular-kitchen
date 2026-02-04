import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-24">

        {/* Top Grid */}
        <div className="grid gap-16 md:grid-cols-5 text-sm text-[#555]">

          {/* Company */}
          <div>
            <h4 className="mb-6 font-medium text-black tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="/about" className="hover:text-black transition">About</a></li>
              <li><a href="/process" className="hover:text-black transition">Process</a></li>
              <li><a href="/blog" className="hover:text-black transition">Blogs</a></li>
              <li><a href="/contact" className="hover:text-black transition">Book Consultation</a></li>
              
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-6 font-medium text-black tracking-wide">
              Products
            </h4>
            <ul className="space-y-3">
              <li><a href="/kitchens" className="hover:text-black transition">Kitchens</a></li>
              <li><a href="/" className="hover:text-black transition">Stainless Steel Kitchens</a></li>
              <li><a href="/" className="hover:text-black transition">Modular Systems</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 font-medium text-black tracking-wide">
              Services
            </h4>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-black transition">Design Consultation</a></li>
              <li><a href="/" className="hover:text-black transition">Custom Manufacturing</a></li>
              <li><a href="/" className="hover:text-black transition">Installation & Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6 font-medium text-black tracking-wide">
              Resources
            </h4>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-black transition">Use & Care</a></li>
              <li><a href="/" className="hover:text-black transition">Material Guide</a></li>
              <li><a href="/" className="hover:text-black transition">FAQs</a></li>
            </ul>
          </div>

          {/* Brand */}
          <div>
            <h3 className="text-lg font-light tracking-wide text-black">
              Punjab Modular Kitchen
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#555] max-w-xs">
              Stainless steel kitchens crafted for hygiene, durability,
              and timeless architectural minimalism.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 flex flex-col md:flex-row md:items-center md:justify-between text-xs text-[#777] gap-6">

          {/* Copyright */}
          <div>
            © {new Date().getFullYear()} Punjab Modular Kitchen. All rights reserved.
          </div>

          {/* Social + Legal */}
          <div className="flex items-center gap-8">

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/punjab_modular_kitchen/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#777] hover:text-black transition"
              >
                <Instagram size={18} strokeWidth={1.25} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#777] hover:text-black transition"
              >
                <Facebook size={18} strokeWidth={1.25} />
              </a>

              <a
                href="https://www.linkedin.com/in/punjab-modular-kitchen-b1528b200/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#777] hover:text-black transition"
              >
                <Linkedin size={18} strokeWidth={1.25} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              <a href="/" className="hover:text-black transition">Legal Information</a>
              <a href="/" className="hover:text-black transition">Data Protection</a>
              <a href="/" className="hover:text-black transition">Privacy Policy</a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
