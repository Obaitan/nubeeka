import Image from "next/image";
import Link from "next/link";
import { designs, socialLinks } from "@/lib/resources";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="py-16">
        <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
          <main className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            {/* LEFT SECTION */}
            <div className="xl:pr-8">
              <h1 className="text-3xl md:text-[56px] font-bold text-secondary leading-tight mb-4">
                Discover Your Own Fashion Sense
              </h1>
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-5">
                Explore our curated collection of stylish clothing and
                accessories tailored to suit unique tastes and needs.
              </p>
              <Link
                href="/designs"
                className="block w-fit bg-primary rounded font-semibold px-7 text-sm py-3 shadow-sm transition-all cursor-pointer text-white hover:opacity-90 uppercase"
              >
                Explore Our Designs
              </Link>
            </div>

            {/* RIGHT SECTION */}
            <div>
              <div className="bg-[linear-gradient(to_bottom_right,_#f2f2f2,_#dcdcdd)] rounded-tl-[150px] rounded-bl-[90px] rounded-tr-[40px] rounded-br-[150px] flex justify-center items-center relative w-5/6 h-[560px] ml-auto">
                <Image
                  src="/model.png"
                  alt="Designs"
                  width={400}
                  height={520}
                  className="object-cover"
                />
                {/* Decorative dots */}
                <div className="absolute left-9 bottom-9 grid grid-cols-3 gap-2.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-[#dcdcdd] rounded-full opacity-70"
                    />
                  ))}
                </div>
                <div className="absolute right-6 top-6 grid grid-cols-3 gap-2.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-gray-300 rounded-full opacity-70"
                    />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
          <div className="grid grid-col-1 md:grid-cols-2 gap-10 xl:gap-2 items-center">
            <div>
              <Image
                src="/brand/chic-3.png"
                alt="Nubeeka brand image"
                width={611}
                height={650}
                priority
                className="w-4/5"
              />
            </div>
            <div className="text-lg space-y-5">
              <div className="flex items-end gap-1.5">
                <span className="w-12 h-[3px] bg-primary relative bottom-2"></span>
                <h4 className="text-secondary text-xl font-bold">About Us</h4>
              </div>
              <p>
                <span className="font-semibold text-primary tracking-wide">
                  NUBEEKA CONCEPTS
                </span>{" "}
                is a fashion business organization that focuses primarily on the
                advancement of the Nigerian and ultimately the African textie
                and apparel industry through initiatives like Fashion Designing,
                Trainings et cetera.
              </p>
              <p>
                We blend together cutting edge creativity with initiatives that
                consistently seeks to achieve success in the Fashion industry
                commercial success our strategic and innovative clothing designs
                in the African apparel and textile sector, makes us unique.
              </p>
              <Link
                href="/about"
                className="block w-fit bg-primary rounded font-semibold px-7 text-sm py-3 shadow-sm transition-all cursor-pointer text-white hover:opacity-90 uppercase"
              >
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
          <div className="flex items-end justify-center gap-1.5">
            <span className="w-12 h-[3px] bg-primary relative bottom-2"></span>
            <h4 className="text-secondary text-xl font-bold">
              Some of Our Designs
            </h4>
          </div>
          <p className="text-gray-800 text-center text-lg mx-6 md:mx-10 xl:mx-36 mt-4">
            We blend together cutting edge creativity with initiatives that
            consistently lead to innovative clothing designs in the African
            apparel and textile sector, making us unique.
          </p>
          <div className="grid grid-col-2 md:grid-cols-4 gap-4 xl:gap-6 items-center mt-10">
            {designs.map((design, index) => (
              <div
                key={index}
                className="bg-[linear-gradient(to_bottom_right,_#f2f2f2,_#dcdcdd)] p-6"
              >
                <div className="h-[360px] flex justify-between items-center relative overflow-hidden">
                  <Image
                    src={design.url}
                    alt={design.label}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-9 w-full">
            <Link
              href="/designs"
              className="block w-fit bg-primary rounded font-semibold px-8 text-sm py-3 shadow-sm transition-all cursor-pointer text-white hover:opacity-90 uppercase"
            >
              more designs
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-accent py-16 md:py-20">
        <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
          <div className="grid grid-col-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-[225px] w-full flex justify-between items-center relative overflow-hidden rounded-3xl shadow-xl border-[4px] border-white">
                <Image
                  src="/academy/academy-2.png"
                  alt="Academy image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-[225px] w-full flex justify-between items-center relative overflow-hidden rounded-3xl shadow-xl border-[4px] border-white">
                <Image
                  src="/academy/academy-4.jpg"
                  alt="Academy image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-[225px] w-full flex justify-between items-center relative overflow-hidden rounded-3xl shadow-xl border-[4px] border-white">
                <Image
                  src="/academy/academy-3.jpg"
                  alt="Academy image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-[225px] w-full flex justify-between items-center relative overflow-hidden rounded-3xl shadow-xl border-[4px] border-white">
                <Image
                  src="/academy/academy.jpg"
                  alt="Academy image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-lg space-y-5">
              <div className="flex items-end gap-1.5">
                <span className="w-12 h-[3px] bg-primary relative bottom-2"></span>
                <h4 className="text-secondary text-xl font-bold">
                  Our Fashion Academy
                </h4>
              </div>
              <p>
                <span className="font-semibold text-primary tracking-wide">
                  NUBEEKA CONCEPTS
                </span>{" "}
                is a fashion business organization that focuses primarily on the
                advancement of the Nigerian and ultimately the African textie
                and apparel industry through initiatives like Fashion Designing,
                Trainings et cetera.
              </p>
              <p>
                We blend together cutting edge creativity with initiatives that
                consistently seeks to achieve success in the Fashion industry
                commercial success our strategic and innovative clothing designs
                in the African apparel and textile sector, makes us unique.
              </p>
              <Link
                href="/academy"
                className="block w-fit bg-primary rounded font-semibold px-7 text-sm py-3 shadow-sm transition-all cursor-pointer text-white hover:opacity-90 uppercase"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 py-16 md:py-20">
        <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
          <main className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary leading-tight mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-5">
                Looking to discuss a bespoke design, collaborate on a project,
                or learn more about the Fashion Academy?
              </p>
              <div className="flex items-center gap-4 my-4">
                <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
                  Call us on:
                </p>
                <span className="bg-gray-200/80 px-3 py-1 text-lg font-semibold text-primary">
                  +234 801 000 1000, +234 802 000 2000
                </span>
              </div>
              <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-2">
                Or drop us a line
              </p>
              <div className="flex gap-4">
                <Link
                  href="mailto:myMail"
                  target="_blank"
                  className="w-14 h-14 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label="Email icon"
                >
                  <Mail className="w-8 h-8" />
                </Link>
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className="w-14 h-14 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon === "facebook" && (
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    )}

                    {link.icon === "instagram" && (
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    {link.icon === "linkedin" && (
                      <svg
                        className="w-7 h-7"
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

            <div className="flex justify-end">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[180px] w-[200px] flex justify-between items-center relative overflow-hidden rounded-3xl shadow-sm border-[4px] border-white">
                    <Image
                      src="/academy/academy-3.jpg"
                      alt="Academy image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-primary font-medium">Bespoke Designs</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[180px] w-[200px] flex justify-between items-center relative overflow-hidden rounded-3xl shadow-sm border-[4px] border-white">
                    <Image
                      src="/brand/chic-3.png"
                      alt="Academy image"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-primary font-medium">
                    Ready-To-Wear Pieces
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[180px] w-[200px] flex justify-between items-center relative overflow-hidden rounded-3xl shadow-sm border-[4px] border-white">
                    <Image
                      src="/academy/academy-4.jpg"
                      alt="Academy image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-primary font-medium">Fashion Academy</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[180px] w-[200px] flex justify-between items-center relative overflow-hidden rounded-3xl shadow-sm border-[4px] border-white">
                    <Image
                      src="/academy/academy-2.png"
                      alt="Academy image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-primary font-medium">
                    Clothing Accessories
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
