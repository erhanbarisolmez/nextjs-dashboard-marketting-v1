import { TinyLineChart } from "@/components/TinyLineChart";
import UserTable from "@/components/UserTable";
import ActivityCard from "@/components/dashboard/activity-card";
import LiveVisitors from "@/components/dashboard/live-visitors";
import MarketingCard from "@/components/dashboard/marketing-card";
import PaperWrapper from "@/components/dashboard/papers";
import ReferralSourceCard from "@/components/dashboard/referral-source-card";
import SalesCardWrapper from "@/components/dashboard/sales-cards";
import Total from "@/components/dashboard/total";
import VisitsByDay from "@/components/dashboard/visits-by-day";
import { palette } from "@/style/color";
import {
  ArrowDropUpOutlined as ArrowDropUpIcon,
  PersonalVideoOutlined as DesktopIcon,
  EqualizerOutlined as EqualizerIcon,
  StayCurrentPortraitOutlined as MobileIcon,
  PersonOutlineOutlined as PersonIcon,
  TrendingUpOutlined as TrendingUpIcon
} from '@mui/icons-material';
import { Box, Divider, Grid, Paper } from '@mui/material';
import { useTranslations } from "next-intl";
const DashboardPage = () => {
  const t = useTranslations();

  return (
    <>
  
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', alignContent: 'center', height: "100%" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex' }}>
            <SalesCardWrapper
              salesOverviewHeaderName={t('sales-overview')}
              salesOverviewHeaderTitle={t('total-42-5k-sales')}
              salesOverviewHeaderTitleColor="+18%"
              salesOverviewHeaderTitleColorIcon={<ArrowDropUpIcon />}
              salesOverviewNewCustomersNumber="8,458"
              salesOverviewNewCustomersText={t('new-customers')}
              salesOverviewNewCustomersIcon={<PersonIcon />}
              salesOverviewNewCustomersIconColorBackground={"#B3B4E8"}
              salesOverviewNewCustomersIconColor="#464884"
              salesOverviewTotalProfitNumber="$28,5k"
              salesOverviewTotalProfitText={t('total-profit')}
              salesOverviewTotalProfitIcon={< EqualizerIcon />}
              salesOverviewTotalProfitIconColorBackground="#F5E390"
              salesOverviewTotalProfitIconColor="#C7B93A"
              salesOverviewNewTransactionsNumber="$2,450k"
              salesOverviewNewTransactionsText={t('new-transactions')}
              salesOverviewNewTransactionsIcon={<TrendingUpIcon />}
              salesOverviewNewTransactionsIconColorBackground='#6BBD6B'
              salesOverviewNewTransactionsIconColor="#408040"

              weeklySalesHeaderName={t('weekly-sales')}
              weeklySalesHeaderTitle={t('total-23-5k-sales')}
              weeklySalesHeaderTitleColor="+62%"
              weeklySalesHeaderHeaderTitleColorIcon={<ArrowDropUpIcon />}
              weeklySalesContentHeader={t('mobile-and-computers')}
              weeklySalesContentNumberMobiles="24"
              weeklySalesContentTextMobiles={t('mobiles')}
              weeklySalesContentNumberAccessories="50"
              weeklySalesContentTextAccessories={t('accessories')}
              weeklySalesContentNumberTablets="12"
              weeklySalesContentTextTablets={t('tablets')}
              weeklySalesContentNumberComputers="38"
              weeklySalesContentTextComputer={t('computers')}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex', mt: 1 }} >
            <PaperWrapper

              ratingsHeaderName={t('ratings')}
              ratingsHeaderTitleColor="#464884"
              ratingsHeaderTitleColorBackground="#b3b4e8"
              ratingsHeaderTitle={t('year-of-2021')}
              ratingsTotal="8.14k"
              ratingsPercentile="+15.6%"
              ratingsPercentileTextColor="#5BFF94"
              ratingsImageSrc="/man.png"
              ratingsImageHeight={150}
              ratingsImageWidth={150}
              ratingsImageAlt={t('screenshots-of-the-dashboard-project-showing-ratings')}

              sessionsHeaderName={t('sessions')}
              sessionsHeaderTitleColor="#408040"
              sessionsHeaderTitleColorBackground="#B3E8C8"
              sessionsHeaderTitle={t('last-month')}
              sessionsTotal="12.2k"
              sessionsPercentile="-25.5%"
              sessionsPercentileTextColor="#FF5B5B"
              sessionsImageSrc="/woman.png"
              sessionsImageHeight={150}
              sessionsImageWidth={150}
              sessionsImageAlt={t('screenshots-of-the-dashboard-project-showing-sessions')}

              totalVisitsHeaderName={t('total-visits')}
              totalVisitsPercentile="+18.4%"
              totalVisitsTotal="$42.5k"
              totalVisitsLeftIcon={<MobileIcon sx={{ color: '#c7b93a', fontSize: 18, p: { md: 1, xs: 0.3 } }} />}
              totalVisitsLeftIconName={t('mobile')}
              totalVisitsLeftIconPercentile="23.5%"
              totalVisitsLeftTotal="2,890"
              totalVisitsRightIcon={<DesktopIcon sx={{ color: '#464884', fontSize: 18, p: { md: 1, xs: 0.3 } }} />}
              totalVisitsRightIconName={t('desktop')}
              totalVisitsRightIconPercentile="76.5%"
              totalVisitsRightTotal="22,495"

              salesHeaderName={t('sales-this-month')}
              salesHeaderTitle={t('total-sales-this-month')}
              salesTotal="$28.450"
              salesTinyLineChart={<TinyLineChart />}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} display={'flex'} flexDirection={'row'} mt={1}>
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex' }}>
            <ActivityCard />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex' }} >
            <ReferralSourceCard />
          </Grid>
        </Grid>

        <Grid container spacing={1} display={'flex'} flexDirection={'row'} mt={1} justifyContent={'space-between'} minHeight={400}>
          <Grid item xs={12} sm={12} md={12} lg={3} sx={{ display: 'flex' }}>
            <Paper elevation={3} sx={{ width: '100%', display: 'flex', borderRadius: 5, flexDirection: 'column', }}>
              <Total
                selectedIcon="laptop"
                iconColor={palette.deepPurple[500]}
                progressIconColor={palette.deepPurple[600]}
                headerTitle="84k"
                colorTitle="-24"
                totalTitle={t('total-impression')}

              />
              <Divider />
              <Total
                selectedIcon='bag'
                iconColor={palette.amber[500]}
                progressIconColor={palette.amber[600]}
                progressValue={45}
                headerTitle="22k"
                colorTitle="+15"
                totalTitle={t('total-order')}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4} sx={{ display: 'flex', justifyContent: 'center', minWidth: '40%' }} >
            <Paper elevation={4} sx={{ display: 'flex', minWidth: '100%', borderRadius: 5, flexDirection: 'row' }}>
              <MarketingCard />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4} sx={{ display: 'flex', minWidth: '35%', }} >
            <Paper elevation={4} sx={{ display: 'flex', flexDirection: 'column', minWidth: '100%', borderRadius: 5, minHeight: '300px' }}>

              <LiveVisitors />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={1} display={'flex'} flexDirection={'row'} mt={1}>
          <Grid item xs={12} sm={12} md={12} lg={8} sx={{ display: 'flex' }}>
            <Paper elevation={4} sx={{ display: 'flex', flexDirection: 'column', minWidth: '100%', borderRadius: 5, minHeight: '300px' }}>
              <UserTable />
            </Paper>

          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} sx={{ display: 'flex', minHeight: 400 }} >
            <VisitsByDay />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default DashboardPage