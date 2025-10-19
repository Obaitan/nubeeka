"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { designs } from "@/lib/resources";
import { Button } from "@/components/ui/button";
import GetQuote from "@/components/GetQuote";

interface Design {
  url: string;
  label: string;
}

const DesignsPage = () => {
  const [isQuoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const handleOpenQuoteModal = (design: Design) => {
    setSelectedDesign(design);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setSelectedDesign(null);
  };

  const handleSendMessage = (name: string, phone: string) => {
    // Handle sending the message (e.g., API call)
    console.log("Sending message:", { name, phone, design: selectedDesign });
  };

  return (
    <>
      <section className="px-6 md:px-20 py-16 md:py-20">
        <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
          <div className="flex items-end justify-center gap-1.5">
            <span className="w-12 h-[3px] bg-primary relative bottom-2"></span>
            <h4 className="text-secondary text-xl font-bold">
              Ready-To-Wear Designs
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
                  <Button
                    variant="default"
                    className="bg-white text-secondary text-sm font-semibold absolute bottom-0 left-0 right-0 w-fit mx-auto px-9 hover:bg-gray-100 hover:opacity-100"
                    onClick={() => handleOpenQuoteModal(design)}
                  >
                    Get A Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedDesign && (
          <GetQuote
            isOpen={isQuoteModalOpen}
            onClose={handleCloseQuoteModal}
            onSendMessage={handleSendMessage}
            imageThumbnail={selectedDesign.url}
            imageAlt={selectedDesign.label}
          />
        )}
      </section>
      <section className="bg-white py-20">
        <div className="px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div className="pr-10">
              <Image
                src="/brand/tailor.jpg"
                alt="Academy image"
                width={612}
                height={408}
                className="w-full rounded-4xl shadow-lg border-[4px] border-white"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-secondary leading-tight mb-4">
                For your bespoke designs and orders, contact us
              </h3>
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-5">
                Explore our curated collection of stylish clothing and
                accessories tailored to suit unique tastes and needs.
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
    </>
  );
};

export default DesignsPage;
