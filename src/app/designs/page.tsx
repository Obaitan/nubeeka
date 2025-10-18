import ImageCarousel from "@/components/ImageCarousel";

const DesignsPage = () => {
  return (
    <section className="px-6 md:px-20 py-16 md:py-20">
      <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Our Designs</h1>
        <ImageCarousel />
      </div>
    </section>
  );
};

export default DesignsPage;
