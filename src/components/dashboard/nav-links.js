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
import { Grid, Typography } from "@mui/material";
import { Fragment, useState } from "react";

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
      href: pathname,
      onClick: toggleLanguage,
    },
    { Icon: BrightnessIcon, href: "" },
    { Icon: WidgetsIcon, href: `dashboard` },
    {
      Icon: ECommerce,
      onClick: toggleECommerceMenu,
      href: "",
      linksMenu: {
        onClick: toggleECommerceMenu,
        items: ["Products", "Categories", "Add Product", "Edit Product", "Add Category", "Edit Category"],
      }
    },
    { Icon: NotificationsIcon, href: `notification` },
    { Icon: PersonIcon, href: `profile` },
  ];

  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{
          display: 'flex',
        }}>
          {links.map(({ Icon, href, onClick, linksMenu}, index) => (
            <Fragment key={`link-${index}`}>

              <Link href={href} locale={currentLanguage} onClick={onClick} key={`link-${index}`}>
                <Icon key={`icon-${index}`}  sx={{ color: "gray", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', ml: 1, mr: 2 }} />

                {linksMenu && isECommerceMenuOpen && (
                  <div>
                    <ul>
                      {linksMenu.items.map((item, subIndex) => (
                        <>
                        <li key={`menu-item-${index}-${subIndex}`}>
                          <Link onClick={toggleECommerceMenu} href={`${item.toLowerCase().replace(" ", "-")}`}>
                            <Typography p={1} variant="subtitle1" sx={{
                              color: 'text.secondary',
                              fontWeight: '500',
                              ":hover": {
                                bgcolor: "GrayText",
                                opacity: 0.5,
                                overflow: "hidden",
                                textOverflow: "initial",
                                border: 1,
                                borderRadius: 3,
                                color: 'blue',
                                fontWeight: '600',
                              },
                           
                            }}>
                              {item}
                            </Typography>
                          </Link>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                )}
              </Link>

            </Fragment>
          ))}
        </Grid>
      </Grid>

    </>
  );
};

export default NavLinks;
