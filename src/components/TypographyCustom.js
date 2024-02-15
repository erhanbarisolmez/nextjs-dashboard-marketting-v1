import Typography from '@mui/material/Typography';

export const TypographyCustom = ({
  variant,
  sx,
  text,
  icon,
  text2,
  ...otherProps }) => {

  return (
    <Typography
      variant={variant}
      
      sx={sx}
      {...otherProps}
    >
      {icon}{text}
      <Typography variant="caption" display={"block"}  sx={{ opacity: 0.4 }}>
        {text2}
      </Typography>

    

    </Typography>
  )
}
