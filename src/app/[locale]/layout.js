
import Navbar from '@/components/dashboard/navbar';
import { locales } from '@/navigation';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {


  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Box sx={{ml:1, mr:1}}>
        <Navbar />
        </Box>
        {children}
      </body>
    </html >

  )
}
