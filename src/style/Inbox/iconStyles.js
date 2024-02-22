import { palette } from '@/style/color';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  icon: {
    display: 'flex',
    backgroundColor: palette.grey[100],
    color: palette.grey[700],
    padding: 3,
    borderRadius: 5,
    alignItems: 'center',
    cursor: "pointer",
    "&:hover": {
      backgroundColor: palette.lightBlue[100]
    }
  }
})