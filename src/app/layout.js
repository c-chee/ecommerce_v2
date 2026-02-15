/**
 * This files is essentially --> <html> + <head> + layout 
 */
import { Montserrat, Walter_Turncoat } from 'next/font/google';
import './globals.css';

import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

/**
 * ===========================
 *          FONTS
 * ===========================
 */
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-montserrat',
});

const walter = Walter_Turncoat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-walter',
});

export const metadata = {
  title: 'WabiSabi.jp',
  description: 'Beauty in Imperfection',
};

/**
 * ===========================
 *          LAYOUT
 * ===========================
 * Layout - wrapper around all pages 
 * Children is where the page appears 
 * Folders control routing, it is looking for the page.jsx files for contents
 */
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} ${walter.variable} min-h-screen flex flex-col`}>

        <Navbar />
        
        <main className='flex-1'>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
