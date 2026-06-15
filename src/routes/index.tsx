import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustAuthority } from "@/components/sections/TrustAuthority";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/sections/FloatingButtons";

const title = "The Nord Byte Labs | Web Development, Software, CRM & Cyber Security Solutions";
const description = "The Nord Byte Labs provides web development, mobile apps, CRM systems, AI automation, cybersecurity, cloud solutions, lead generation, WhatsApp integrations, and business technology services.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "The Nord Byte Labs",
          description,
          slogan: "Building Digital Solutions For Modern Businesses",
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustAuthority />
        <Services />
        <WhyUs />
        <Industries />
        <Process />
        <CaseStudies />
        <Portfolio />
        <Testimonials />
        <Team />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
