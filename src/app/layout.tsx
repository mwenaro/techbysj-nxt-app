import { Footer, Header } from "./components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techbysj - Official site",
  description: "Techbysj official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Header />
          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
