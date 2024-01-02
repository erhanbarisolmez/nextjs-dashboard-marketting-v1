import Typography from '@mui/material/Typography';
export const TypographyCustom = (props) => {
  const {
    variant,
    sx,
    text,
    icon
  } = props;
  return (
    <Typography
      variant={variant}
      sx={sx}
    >
      {icon}{text}
    </Typography>
  )
}
