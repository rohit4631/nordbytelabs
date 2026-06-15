import { MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918699655213?text=Hello%20Nord%20Byte%20Labs,%20I%20am%20interested%20in%20your%20services."
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 hover:-translate-y-1"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-full mr-4 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 hidden md:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
