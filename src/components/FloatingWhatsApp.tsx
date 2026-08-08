import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Assalamu alaikum, I would like to know more about AL-KABEER Hajj and Umrah packages.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-colors hover:bg-primary-hover"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
