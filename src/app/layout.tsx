import { ToastContainer } from 'react-toastify';
import { Footer, Header } from './(components)';
import './globals.css';

export const metadata = {
  title: 'Techbysj - Official site',
  description: 'Techbysj official website',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="techby-theme">
        <div >
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between p-2">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
