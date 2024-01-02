
import ApexChart from '@/components/ApexChart';
import GeneralCardHeader from '@/components/GeneralCardHeader';
import { palette } from '@/style/color';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Grid, Paper } from '@mui/material';
import { useTranslations } from 'next-intl';

const VisitsByDay = () => {
  const t = useTranslations();
  return (
    <>
   <Paper elevation={4} sx={{ display: 'flex', flexDirection: 'column', minWidth: '100%', borderRadius: 5,minHeight:'100%'}}>

    <Grid item xs={12} sx={{
      ml: 3,
      mr: 3,
      justifyContent:'flex-start'
    }}>
      <GeneralCardHeader
        headerName={t('visits-by-day')}
        headerTitle={t('total-248-5k')}
        icon={<MoreIcon />}
      />
    </Grid>
    <Grid item xs={12}>
  
    <ApexChart />

    </Grid>
    <Grid item xs={12} sx={{
      ml:3,mr:3
    }}>
      <GeneralCardHeader
        headerName={t('most-visited-day')}
        headerTitle={t('total-62-4k-visits-on-thursday')}
        icon={<KeyboardArrowRightIcon sx={{
          backgroundColor: palette.deepPurple[100],
          color:palette.deepPurple,
          borderRadius:1,
          fontSize:30
        }}
        />}
      />
    </Grid>
    </Paper>
    </>
  )
}

export default VisitsByDay