import type { Metadata } from "next";
import { Manrope, Noto_Serif_Display } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const serif = Noto_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Муқимий театри",
    template: "%s · Муқимий театри",
  },
  description:
    "Муқимий номидаги Ўзбекистон давлат академик мусиқали театри: репертуар, спектакллар, янгиликлар ва алоқа.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uz-Cyrl" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
