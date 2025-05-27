import { FooterLinks } from "@/components/Links";
export function Footer() {
  return (
    <footer className="mx-auto mt-12 pb-24 grid max-w-2xl grid-cols-4 justify-center gap-3 px-4 sm:grid-cols-5 md:grid-cols-8 md:px-0">
      <FooterLinks />
    </footer>
  );
}
