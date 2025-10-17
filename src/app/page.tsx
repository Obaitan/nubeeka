import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="px-6 md:px-20 py-10">
        <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
          <main className="flex flex-col md:flex-row items-center justify-between">
            {/* LEFT SECTION */}
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold text-[#264931] leading-tight mb-6">
                Discover and <br /> Find Your Own <br /> Fashion!
              </h1>
              <p className="text-[#264931] text-lg mb-8">
                Explore our curated collection of stylish <br />
                clothing and accessories tailored to your <br />
                unique taste.
              </p>
              <button className="bg-[#264931] text-white font-semibold px-8 py-3 rounded-sm shadow-lg hover:bg-[#1e3a27] transition-all">
                EXPLORE NOW
              </button>
            </div>

            {/* RIGHT SECTION */}
            <div className="relative mt-10 md:mt-0">
              <div className="bg-[#6EB77D] rounded-[2.5rem] w-[320px] md:w-[400px] h-[450px] md:h-[520px] flex items-center justify-center relative shadow-lg">
                <Image
                  src="/model.png" // 👈 Replace this with the image in your /public folder
                  alt="Fashion Model"
                  width={400}
                  height={520}
                  className="object-contain"
                />
                {/* Decorative dots */}
                <div className="absolute right-6 bottom-8 grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-[#264931] rounded-full opacity-70"
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
