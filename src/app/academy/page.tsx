import Image from "next/image";
import Link from "next/link";

const FashionAcademyPage = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-4 xl:gap-8">
          <div className="text-center space-y-2">
            <div className="h-36 xl:h-40 flex justify-between items-center relative overflow-hidden rounded-full shadow-sm border-[4px] border-white">
              <Image
                src="/academy/academy-3.jpg"
                alt="Academy image"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-primary font-medium text-sm md:text-base">
              Accessories
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="h-36 xl:h-40 flex justify-between items-center relative overflow-hidden rounded-full shadow-sm border-[4px] border-white">
              <Image
                src="/academy/academy-3.jpg"
                alt="Academy image"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-primary font-medium text-sm md:text-base">
              Cutting
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="h-36 xl:h-40 flex justify-between items-center relative overflow-hidden rounded-full shadow-sm border-[4px] border-white">
              <Image
                src="/academy/academy-3.jpg"
                alt="Academy image"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-primary font-medium text-sm md:text-base">
              Sewing
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="h-36 xl:h-40 flex justify-between items-center relative overflow-hidden rounded-full shadow-sm border-[4px] border-white">
              <Image
                src="/academy/academy-3.jpg"
                alt="Academy image"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-primary font-medium text-sm md:text-base">
              Layout
            </p>
          </div>
          <div className="col-span-full lg:col-span-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-4 xl:gap-8">
            <div className="hidden md:block lg:hidden"></div>
            <div className="text-center space-y-2">
              <div className="h-36 xl:h-40 flex justify-between items-center relative overflow-hidden rounded-full shadow-sm border-[4px] border-white">
                <Image
                  src="/academy/academy-3.jpg"
                  alt="Academy image"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-primary font-medium text-sm md:text-base">
                Something 1
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="h-36 xl:h-40 flex justify-between items-center relative overflow-hidden rounded-full shadow-sm border-[4px] border-white">
                <Image
                  src="/academy/academy-3.jpg"
                  alt="Academy image"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-primary font-medium text-sm md:text-base">
                Something 2
              </p>
            </div>
            <div className="hidden md:block lg:hidden"></div>
          </div>
        </div>
        <hr className="mt-12 mb-16" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12 items-center">
          <div className="xl:pr-10 w-full md:w-5/6 lg:w-full mx-auto">
            <Image
              src="/academy/academy.jpg"
              alt="Academy image"
              width={1440}
              height={1080}
              className="w-full rounded-4xl shadow-lg border-[4px] border-white"
            />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary leading-tight mb-4">
              Learn the tenets of Fashion Designing
            </h3>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-5">
              NUBEEKA CONCEPTS is a fashion business organization that focuses
              primarily on the advancement of the Nigerian and ultimately the
              African textie and apparel industry through initiatives like
              Fashion Designing, Trainings et cetera.
            </p>
            <Link
              href="mailto:"
              className="block w-fit bg-primary rounded font-semibold px-7 text-sm py-3 shadow-sm transition-all cursor-pointer text-white hover:opacity-90 uppercase mx-auto lg:mx-0"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionAcademyPage;
