import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const designs = [
    { url: "/designs/mabel.png", label: "Kaftan" },
    { url: "/designs/asa.png", label: "Kaftan" },
    { url: "/designs/debbie.png", label: "Kaftan" },
    { url: "/designs/tabe.png", label: "Kaftan" },
    { url: "/designs/teni.png", label: "Kaftan" },
    { url: "/designs/mabel.png", label: "Kaftan" },
    { url: "/designs/asa.png", label: "Kaftan" },
    { url: "/designs/debbie.png", label: "Kaftan" },
  ];

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
    </>
  );
}
