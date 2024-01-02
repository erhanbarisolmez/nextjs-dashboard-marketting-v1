
import Navbar from '@/components/dashboard/navbar';
import { locales } from '@/navigation';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default function RootLayout({ children, params:{locale} }) {


  return (
    <html lang={locale}>
      <body className={inter.className}>
        
        <Navbar />
        {children}
        </body>
    </html>
    
  )
}
