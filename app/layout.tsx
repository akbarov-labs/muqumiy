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
    "Муқимий театри сайти учун концепт дизайн (Akbarov Labs). Театрнинг расмий сайти эмас.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uz-Cyrl" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <p className="concept-note">
          Концепт дизайн:{" "}
          <a href="https://akbarovlabs.uz" target="_blank" rel="noopener">
            Akbarov Labs
          </a>
          . Бу Муқимий театрининг расмий сайти эмас.
        </p>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
