import { Footer, Header } from "./components";
import "./globals.css";



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
      <body className="">
        <div className="">
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>


          <Footer />
        </div>
      </body>
    </html>
  );
}
