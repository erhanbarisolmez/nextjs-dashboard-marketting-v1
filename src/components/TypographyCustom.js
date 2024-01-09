import Typography from '@mui/material/Typography';
export const TypographyCustom = (props) => {
  const {
    variant,
    sx,
    text,
    icon,
    ...otherProps
  } = props;
  return (
    <Typography
      variant={variant}
      sx={sx}
      {...otherProps}
    >
      {icon}{text}
    </Typography>
  )
}
