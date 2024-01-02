import { CardHeader } from "@/components/dashboard/sales-cards";

import GeneralCardHeader from "@/components/GeneralCardHeader";
import SparklineChart from "@/components/SparklineChart";
import { Grid } from '@mui/material';
import { useTranslations } from "next-intl";

const LiveVisitors = () => {
  const t = useTranslations()
  const data = [10,40,50,20,10,20,50,60,50]
  return (
    <>
      <Grid item xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          ml: 3, mr: 3,
        }}
      >

        <Grid item xs={12} display={"flex"} flexDirection={'column'} >

     
            <GeneralCardHeader
              headerName={t('live-visitors')}
              headerTitle={t('total-90-visitors-are-live')}
            // percentile="+78.2%"
            // icon={<ArrowDropUpIcon />}
            />
        

          
        </Grid>
        <Grid item xs={6} sx={{
            justifyContent: 'flex-end',
            display: 'flex',
            mt: 6

          }}>
            <CardHeader
              colorTitle="+78.2%"
            />
          </Grid>
      </Grid>

      <SparklineChart
      data={data}
      height={100}
      colors={["#61ffb1"]}
      />

    </>
  );
}

export default LiveVisitors