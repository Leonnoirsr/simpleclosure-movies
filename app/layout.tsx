import type { Metadata }  from "next";
import { Manrope }        from "next/font/google";
import "./globals.css";



const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SimpleCinema",
  description: "Discover Your Favorite Films",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manRope.variable} h-full antialiased`}
    >
      <body className={`${manRope.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
