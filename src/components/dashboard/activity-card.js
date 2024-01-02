import MoreIcon from '@mui/icons-material/MoreVert';
import { Grid, Paper } from '@mui/material';
import { useTranslations } from 'next-intl';
import GeneralCardHeader from '../GeneralCardHeader';
import { ActivityCardContent } from './activity-card-content';
const ActivityCard = () => {

  const t = useTranslations()
  return (
    <>

      <Paper elevation={6} sx={{
        width: '100%',
        height: '100%',
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
      }}>
        <Grid item sx={{ ml: 3, mr: 3 }}>
          <GeneralCardHeader
            headerName={t('activity-timeline')}
            icon={<MoreIcon />}
          />
        </Grid>
        <ActivityCardContent 
          headerTextOne={t('8-invoices-have-been-paid')}
          titleTextOne={t('invoices-have-been-paid-to-the-company')}
          pdf={t('invoices-pdf')}

          headerTextTwo={t('create-a-new-project-for-client')}
          titleTextTwo={t('invoices-have-been-paid-to-the-company-0')}
          titleTextTwoIcon={t('john-doe-client')}

          headerTextThree={t('order-47745-from-september')}
          titleTextThree={t('invoices-have-been-paid-to-the-company-1')}

          dateOne={t('wednesday')}
          dateTwo={t('april-18')}
          dateThree={t('january-10')}

        />
      </Paper>

    </>
  )
}

export default ActivityCard



