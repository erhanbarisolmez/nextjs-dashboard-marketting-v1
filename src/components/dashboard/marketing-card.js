import { ArrowUpwardOutlined } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';
import DemoAutoPlay from '../SliderCard';

const MarketingCard = () => {
  const t = useTranslations();
  
  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <Grid container xs={12} >
      
        <DemoAutoPlay
          leftTextOne={t('sales')}
          leftTextTwo={t('impression')}
          leftNumberOne={28}
          leftTextNumberTwo={80}
          rightHeader={t('marketing-and-sales')}
          rightHeaderTitle={t('total-245-8k-sales')}
          rightColorTitle="+25"
          rightTitleIcon={<ArrowUpwardOutlined />}
          rightIconHeader={t('sales-overview-0')}
          rightTextOne={t('open')}
          rightTextTwo={t('lost')}
          rightNumberOne={68}
          rightNumberTwo={4}
          button1={t('details')}
          button2={t('report')}

          leftTextOne2="asd"
        
        />
      </Grid>
    </Box>
  )
}

export default MarketingCard