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
  }

} satisfies Pathnames<typeof locales>;

 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});