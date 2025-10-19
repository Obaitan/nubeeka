import Image from "next/image";
import Link from "next/link";

const FashionAcademyPage = () => {
  return (
    <section className="py-20">
      <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <div className="pr-10">
            <Image
              src="/academy/academy.jpg"
              alt="Academy image"
              width={1440}
              height={1080}
              className="w-full rounded-4xl shadow-lg border-[4px] border-white"
            />
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary leading-tight mb-4">
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
              className="block w-fit bg-primary rounded font-semibold px-7 text-sm py-3 shadow-sm transition-all cursor-pointer text-white hover:opacity-90 uppercase"
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
