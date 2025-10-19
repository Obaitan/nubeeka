"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSendMessage: (name: string, phone: string, email: string) => void;
  imageThumbnail: string;
  imageAlt: string;
}

const GetQuote = ({
  isOpen,
  onClose,
  onSendMessage,
  imageThumbnail,
  imageAlt,
}: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleSendMessage = () => {
    if (name && phone) {
      onSendMessage(name, phone, email);
      setName("");
      setPhone("");
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto p-0 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-b-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-primary">Get A Quote</h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-error-400 transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 pb-3">
            <div className="bg-[linear-gradient(to_bottom_right,_#f2f2f2,_#dcdcdd)] p-2">
              <div className="h-[100px] w-[90px] relative overflow-hidden">
                <Image
                  src={imageThumbnail}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-[13px] text-gray-500 space-y-0.5">
              <p className="text-sm text-gray-800 font-semibold capitalize">
                {imageAlt}
              </p>
              <p>
                Colour: <span className="ml-1.5 text-gray-800">Blue</span>
              </p>
              <p>
                Material:
                <span className="ml-1.5 text-gray-800">
                  Satin, Sash, Cotton
                </span>
              </p>
            </div>
          </div>

          <div className="bg-[#f8f8f8] px-4 py-2">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-secondary mb-[1px]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-0 text-sm text-gray-900 font-medium capitalize placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-0"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="bg-[#f8f8f8] px-4 py-2">
            <label
              htmlFor="phone"
              className="block text-xs font-medium text-secondary mb-[1px]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border-0 text-sm text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-0"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
            />
          </div>
          <div className="bg-[#f8f8f8] px-4 py-2">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-secondary mb-[1px]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-0 text-sm text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-0"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-4 border-t">
          <Button
            onClick={handleSendMessage}
            disabled={!name || !phone || !email} // Disable if subject or message is empty
            className="w-full px-6 py-2 text-sm font-medium text-white bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary"
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
