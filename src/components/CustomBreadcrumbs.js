'use client'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';

export default function CustomBreadcrumbs(props) {
  const {breadcrumbsText1, breadcrumbsText2, breadcrumbsText3} = props;
  const pathname = usePathname();
  function handleClick(event,href) {
    event.preventDefault(event, href);
    console.info('You clicked a breadcrumb.', href);
  }
  
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/dashboard" onClick={() => handleClick}>
      {breadcrumbsText1}
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="notification"
      onClick={() => handleClick}
    >
      {breadcrumbsText2}
    </Link>,
    <Typography key="3" color="text.primary">
      {breadcrumbsText3}
      {/* {pathname.replace(/^\/(tr|en)\//, '')} */}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
 
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
  
    </Stack>
  );
}