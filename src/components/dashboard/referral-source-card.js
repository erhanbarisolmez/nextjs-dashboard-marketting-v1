import MoreIcon from '@mui/icons-material/MoreVert';
import { Grid, Paper } from '@mui/material';
import { useTranslations } from 'next-intl';
import FloatingActionButtonZoom from '../FloatingActionButton';
import GeneralCardHeader from '../GeneralCardHeader';
import TopTable from '../TopTable';

const ReferralSourceCard = () => {
  const t = useTranslations();
  return (
    <>
      <Paper elevation={6} sx={{
        width: '100%',
        maxHeight:"100%",
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        color: 'gray',
      }}>

        <Grid item xs={12} sx={{
          ml:3,mr:3
        }}>
        <GeneralCardHeader
          headerName={t('top-referral-sources')}
          headerTitle={t('82-activity-growth')}
          icon={<MoreIcon />}
        />
       <Grid item sx={{ width:'100%', display:'flex', mt:3,}}>
          <FloatingActionButtonZoom 
          referralSourceTableOne={
          <TopTable 
            column1={t('image')}
            column2={t('product-name')}
            column3={t('status')}
            column4={t('revenue')}
            column5={t('conversion')}
            outOfStock={t('out-of-stock')}
            inStock={t('in-stock')}
            comingSoon={t('coming-soon')}
          />}
          />  
        </Grid>
       </Grid>

      </Paper>

    </>
  )
}

export default ReferralSourceCard

