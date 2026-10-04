import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import WhyVaelthor from "@/components/WhyVaelthor/WhyVaelthor";
import Projects from "@/components/Projects/Projects";
import Process from "@/components/Process/Process";
import Technologies from "@/components/Technologies/Technologies";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Web Development & Digital Solutions Company",

  description:
    "Vaelthor Technologies creates modern websites, mobile apps, custom software, ERP solutions and digital experiences that help businesses grow.",

  keywords: [
    "web development company",
    "website development",
    "mobile app development",
    "custom software development",
    "ERP solutions",
    "UI UX design",
    "digital solutions",
    "software development company",
    "Vaelthor Technologies",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Web Development & Digital Solutions Company",

    description:
      "Modern websites, mobile apps, custom software and ERP solutions built for growing businesses.",

    url: "https://vaelthortechnology.com/",

    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Services />

      <WhyVaelthor />

      <Projects />

      <Process />

      <Technologies />

      <CTA />

      <Footer />
    </main>
  );
}