import { palette } from '@/style/color';
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
  textColorBg,
  titleTextField2
}) => {
  const defaultLevel = "h4";
  const defaultFontWeight = "bold"

  return (
    <Typography
      level={level || defaultLevel}
      fontSize={fontSize}
      fontWeight={fontWeight || defaultFontWeight}
      sx={sx}>

      {text}

      <Typography level={headerTextFieldLevel} fontWeight={headerTextFieldFontWeight} sx={sxHeaderTextField}>{headerTextField}</Typography>

      <Typography fontWeight={titleTextFieldFontWeight} sx={sxTitleTextField}>
        {titleTextField}
        {textColorBg &&(
        <Typography 
        level='body-sm'
        sx={{
          display: 'inline-flex',
          minWidth: 20,
          backgroundColor: palette.grey[400],
          color: palette.red[500],
          borderRadius: 5,
          justifyContent: 'center',
         
        }}>
          {textColorBg}

        </Typography>)}
        {titleTextField2}
      </Typography>

      <Typography color="danger" fontWeight={fontWeight} >{colorText}</Typography>

    </Typography>
  )
}
