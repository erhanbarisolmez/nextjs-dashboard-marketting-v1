import Typography from '@mui/material/Typography';
export const TypographyCustom = (props) => {
  const {
    variant,
    sx,
    text,
    icon,
    text2,
    ...otherProps
  } = props;
  return (
    <Typography
      variant={variant}
      sx={sx}
      {...otherProps}
    > 
      {icon}{text}
      <Typography variant="caption" display={"block"} sx={{opacity:0.4}}>
      {text2}
      </Typography>
     
    </Typography>
  )
}
