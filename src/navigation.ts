import {
  Pathnames,
  createLocalizedPathnamesNavigation
} from 'next-intl/navigation';
 
export const locales = ['en', 'tr'];
export const defaultLocale= "en";
export const localePrefix = 'always'; // Default
 
export const pathnames = {
  '/dashboard':{
    en:'/dashboard',
    tr:'/gosterge-paneli',
    
  },
  '/notification':{
    en:'/notification',
    tr:'/bildirim'
  },
  '/profile':{
    en:'/profile',
    tr:'/profil'
  },
  '/products':{
    en:'/products',
    tr:'/urunler'
  },
  '/categories':{
    en:'/categories',
    tr:'/kategoriler'
  },
  '/add-product':{
    en:'/add-product',
    tr:'/urun-ekle'
  },
  '/edit-product':{
    en:'/edit-product',
    tr:'/urun-duzenle'
  },
   
  '/add-category':{
    en:'/add-category',
    tr:'/kategori-ekle'
  },
  '/edit-category':{
    en:'/edit-category',
    tr:'/kategori-duzenle'
  }

} satisfies Pathnames<typeof locales>;

 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});