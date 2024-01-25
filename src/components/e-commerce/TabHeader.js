import Typography from '@mui/joy/Typography';
export const TabHeader = ({
  text,
  sx,
  fontSize,
  level,
  fontWeight,
  colorText,
  headerTextField,
  headerTextFieldFontWeight,
  sxHeaderTextField,
  titleTextFieldFontWeight,
  sxTitleTextField,
  titleTextField,
  headerTextFieldLevel,
}) => {
  const defaultLevel = "h4";
  const defaultFontWeight = "bold"

  return (
    <Typography
      level={level || defaultLevel}
      fontSize={fontSize}
      fontWeight={ fontWeight||defaultFontWeight}
      sx={sx}>
      
      {text}
      
      <Typography level={headerTextFieldLevel} fontWeight={headerTextFieldFontWeight} sx={sxHeaderTextField}>{headerTextField}</Typography>
    
      <Typography fontWeight={titleTextFieldFontWeight} sx={sxTitleTextField}>{titleTextField}</Typography>

      <Typography color="danger" fontWeight={fontWeight} >{colorText}</Typography>
     
    </Typography>
  )
}
