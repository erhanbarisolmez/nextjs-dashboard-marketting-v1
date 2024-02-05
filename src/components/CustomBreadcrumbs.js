'use client'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';

export default function CustomBreadcrumbs({
  breadcrumbsText1,
  breadcrumbsText2,
  breadcrumbsText3
}) {

  const pathname = usePathname();

  function handleClick(event, href) {
    event.preventDefault(event, href);
    console.info('You clicked a breadcrumb.', href);
  }

  return (
    <Stack spacing={2}>
      {(breadcrumbsText1 || breadcrumbsText2 || breadcrumbsText3) && (
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        {breadcrumbsText1 && (
        <Link underline="hover" key="1" color="inherit" href="/dashboard" onClick={() => handleClick}>
          {breadcrumbsText1}
        </Link>
        )}
        {breadcrumbsText2 && (
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="notification"
          onClick={() => handleClick}
        >
          {breadcrumbsText2}
        </Link>
        )}
        {breadcrumbsText3 &&(
        <Typography key="3" color="text.primary">
          {breadcrumbsText3}
          {/* {pathname.replace(/^\/(tr|en)\//, '')} */}
        </Typography>
        )}
      </Breadcrumbs>
      )}
    </Stack>
  )
}