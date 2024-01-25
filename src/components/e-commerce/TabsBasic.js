import Tab from '@mui/joy/Tab';
import TabList from '@mui/joy/TabList';
import TabPanel from '@mui/joy/TabPanel';
import Tabs from '@mui/joy/Tabs';

export default function TabsBasic({
  tab1,
  tab2,
  tab3,
  tabPanel1,
  tabPanel2,
  tabPanel3,
  disableUnderline,
  variant,
  ...otherProps
}) {


  return (
    <Tabs aria-label="Basic tabs" defaultValue={0} {...otherProps}>
      <TabList disableUnderline={disableUnderline} variant={variant} >
        <Tab>{tab1}</Tab>
        <Tab>{tab2}</Tab>
        <Tab>{tab3}</Tab>
      </TabList>
      <TabPanel value={0}>
        {tabPanel1}
      </TabPanel>
      <TabPanel value={1}>
        {tabPanel2}
      </TabPanel>
      <TabPanel value={2}>
        {tabPanel3}
      </TabPanel>
    </Tabs>
  );
}
