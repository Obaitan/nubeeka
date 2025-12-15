import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <section className="py-16">
        <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-12 items-center">
            <div className="w-full md:w-2/3 xl:w-5/12">
              <Image
                src="/brand/chic-3.png"
                alt="Nubeeka brand image"
                width={611}
                height={650}
                priority
                className="w-full"
              />
            </div>
            <div className="w-full md:w-full lg:w-7/12 space-y-5 text-[17px]">
              <p>
                <span className="font-semibold text-primary tracking-wide">
                  NUBEEKA CONCEPTS
                </span>{" "}
                is a fashion business organization that focuses primarily on the
                advancement of the Nigerian and ultimately the African textile
                and apparel industry through initiatives like Fashion Designing,
                Trainings et cetera.
              </p>
              <p>
                We blend together cutting edge creativity with initiatives that
                consistently seeks to achieve success in the Fashion industry
                commercial success our strategic and innovative clothing designs
                in the African apparel and textile sector, makes us unique.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[linear-gradient(to_bottom_right,_#f2f2f2,_#ececed)] px-5 py-4">
                  <div className="flex items-end gap-1">
                    <span className="w-8 h-[2px] bg-primary relative bottom-3"></span>
                    <p className="text-secondary text-sm font-bold uppercase mb-1">
                      Our Mission
                    </p>
                  </div>

                  <p className="text-base">
                    To innovate, lead, enhance and provide best-value products
                    and services in fashion to both local and global customers.
                  </p>
                </div>
                <div className="bg-[linear-gradient(to_bottom_right,_#f2f2f2,_#ececed)] px-5 py-4">
                  <div className="flex items-end gap-1">
                    <span className="w-8 h-[2px] bg-primary relative bottom-3"></span>
                    <p className="text-secondary text-sm font-bold uppercase mb-1">
                      Our Vision
                    </p>
                  </div>

                  <p className="text-base">
                    To be the world&apos;s most influential fashion house, known
                    for products that elevate personal style and empower lives
                    globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 items-center w-full xl:w-5/6 mx-auto">
            <div className="col-span-1 lg:col-span-2 text-[17px] order-last xl:order-first">
              <p className="mb-1 text-primary font-bold">Our Designs</p>
              <p className="mb-4">
                We blend together cutting edge creativity with initiatives that
                consistently lead to innovative clothing designs in the African
                apparel and textile sector, making us unique. Our designs have
                graced occassions far and wide, up to events on the moon. Even
                aliens have testimonies to give about them.
              </p>
              <Link
                href="/designs"
                className="block w-fit bg-primary rounded font-semibold px-8 text-sm py-2 shadow-sm transition-all cursor-pointer text-white hover:opacity-90 uppercase"
              >
                learn more
              </Link>
            </div>
            <div className="h-[225px] w-full flex justify-between items-center relative overflow-hidden rounded-2xl shadow-xl border-2 border-white order-first xl:order-last">
              <Image
                src="/academy/academy-3.jpg"
                alt="Academy image"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20 items-center mt-24 w-full xl:w-5/6 mx-auto">
            <div className="h-[225px] w-full flex justify-between items-center relative overflow-hidden rounded-2xl shadow-xl border-2 border-white">
              <Image
                src="/academy/academy-4.jpg"
                alt="Academy image"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-1 lg:col-span-2 text-[17px]">
              <p className="mb-1 text-primary font-bold">Fashion Academy</p>
              <p className="mb-4">
                We blend together cutting edge creativity with initiatives that
                consistently lead to innovative clothing designs in the African
                apparel and textile sector, making us unique. Our designs have
                graced occassions far and wide, up to events on the moon. Even
                aliens have testimonies to give about them.
              </p>
              <Link
                href="/academy"
                className="block w-fit bg-primary rounded font-semibold px-8 text-sm py-2 shadow-sm transition-all cursor-pointer text-white hover:opacity-90 uppercase"
              >
                learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
