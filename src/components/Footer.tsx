import Link from "next/link";
import { socialLinks, links } from "@/lib/resources";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-20">
      <div className="px-6 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
        <div className="grid grid-cols-1 gap-y-6">
          <div className="flex flex-wrap justify-between items-end gap-y-4">
            <p className="text-white text-2xl font-bold tracking-wide">
              Nubeeka Concepts
            </p>
            <p className="text-white/60">Discover your own fashion sense...</p>
          </div>
          <hr className="border border-gray-800" />
          <div className="flex flex-col md:flex-row flex-wrap xl:justify-between gap-y-12">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-auto">
              <h3 className="font-bold mb-4 text-white">Quick Links</h3>
              <ul className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  Home
                </Link>
                {links.map((link) => (
                  <Link
                    href={link.url}
                    key={link.label}
                    className="text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="mailto:"
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  Contact Us
                </Link>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-5 w-full md:w-1/2 xl:w-auto">
              <div>
                <h3 className="font-bold mb-4 text-white">
                  Other Contact Channels
                </h3>
                <div className="flex flex-col gap-2 text-gray-300">
                  <div className="flex flex-wrap gap-2">
                    <span>+234 802 303 8483,</span>
                    <span>+234 810 696 4279,</span>
                    <span>+234 802 640 4334</span>
                  </div>
                  <Link
                    href="mailto:"
                    target="_blank"
                    className="text-gray-400 hover:text-secondary transition-colors"
                  >
                    hello@nubeekaconcepts.com
                  </Link>
                  <p>
                   1, Lateef Aregbe street off Grandmate Bus Stop, Ago Palace Way, Okota, Lagos.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 hover:border-secondary hover:bg-secondary hover:text-white transition-colors"
                      aria-label={link.name}
                    >
                      {link.icon === "facebook" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      )}

                      {link.icon === "instagram" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      )}
                      {link.icon === "linkedin" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-gray-800" />
          <div className="flex flex-col md:flex-row md:justify-between gap-4 text-gray-400">
            <p className="text-sm">
              &copy; Nubeeka Concepts {new Date().getFullYear()}. All rights
              reserved.
            </p>
            <Link
              href="https://storyset.com/"
              target="_blank"
              className="text-sm hover:opacity-80 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
