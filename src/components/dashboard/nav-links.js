'use client'
import { Link, usePathname } from "@/navigation";
import {
  Brightness5Outlined as BrightnessIcon,
  LocalMallOutlined as ECommerce,
  NotificationsNoneOutlined as NotificationsIcon,
  Person2Outlined as PersonIcon,
  TranslateOutlined as TranslateIcon,
  WidgetsOutlined as WidgetsIcon,
} from "@mui/icons-material";
import { useState } from "react";

const NavLinks = () => {
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState(
    pathname.startsWith("/en") ? "en" : "tr"
  );
  const [isECommerceMenuOpen, setECommerceMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
  };

  const toggleECommerceMenu = () => {
    setECommerceMenuOpen((prev) => !prev);
  };

  const links = [
    {
      Icon: TranslateIcon,
      href: pathname, // Use string directly
      onClick: toggleLanguage,
    },
    { Icon: BrightnessIcon, href: pathname },
    { Icon: WidgetsIcon, href: `dashboard` },
    {
      Icon: ECommerce,
      onClick: toggleECommerceMenu,
      href: pathname,
      linksMenu: {
        onClick: toggleECommerceMenu,
        items: ["products", "categories"],
      }
    },
    { Icon: NotificationsIcon, href: `notification` },
    { Icon: PersonIcon, href: `profile` },
  ];

  return (
    <>
      {links.map(({ Icon, href, onClick, linksMenu }) => (
        <>
          <Link href={href} locale={currentLanguage} onClick={onClick}>
            <Icon sx={{ color: "gray", }} />
            {linksMenu && isECommerceMenuOpen && (
            <div>
              <ul>
                {linksMenu.items.map((item) => (
                  <>  
                      <li key={item}>    
                        <Link href={`e-commerce/${item}`}>               
                          {item}
                          </Link>
                      </li>
                  </>
                ))}
              </ul>
            </div>
          )}
          </Link>
          
        </>
      ))}
    </>
  );
};

export default NavLinks;
