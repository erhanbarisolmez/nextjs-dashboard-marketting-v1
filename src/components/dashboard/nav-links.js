'use client'
import { Link, usePathname } from "@/navigation";
import {
  Brightness5Outlined as BrightnessIcon,
  NotificationsNoneOutlined as NotificationsIcon,
  Person2Outlined as PersonIcon,
  TranslateOutlined as TranslateIcon,
  WidgetsOutlined as WidgetsIcon,
} from "@mui/icons-material";

import { useState } from "react";

const NavLinks = (
  
) => {
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState(
    pathname.startsWith("/en") ? "en" : "tr"
  );

  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en" ));
  };

  const links = [
    {
      Icon: TranslateIcon,
      href: { pathname },
      onClick: toggleLanguage, 
    },
    { Icon: BrightnessIcon, href: "",},
    { Icon: WidgetsIcon, href: `dashboard` },
    { Icon: NotificationsIcon, href: `notification` },
    { Icon: PersonIcon, href: `profile` },
  ];

  return (
    <>
      {links.map(({ Icon, href, onClick }, index) => (
        <Link key={index} href={href} locale={currentLanguage} onClick={onClick}>
          <Icon sx={{ color: "gray" }} />
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
