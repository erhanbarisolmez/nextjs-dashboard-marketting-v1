import { palette } from "@/style/color";
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
export const TooltipCustom = ({title, }) => {
  return (
    <Tooltip
    arrow
    placement="top"
    size="sm"
    variant="outlined"
    title={title}>
    <IconButton>
      <ErrorOutlinedIcon fontSize="small"  sx={{color: palette.grey[500]}}/>
    </IconButton>
  </Tooltip>
  )
}
