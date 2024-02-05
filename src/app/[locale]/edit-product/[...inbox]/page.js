import CustomBreadcrumbs from '@/components/CustomBreadcrumbs'
import PageHeader from '@/components/PageHeader'
import { Container, Grid } from '@mui/material'
const Customer = () => {
  // pageheader düzeltilecek
  return (
    <Grid item xs={6} spacing={2} sx={{backgroundColor:'red'}}>
      
      <Container fluid>
        <PageHeader
          headerText="Reply"
          createButtonText="Create"
          filterButtonText="Filter"
        />
        <CustomBreadcrumbs 
          breadcrumbsText1 = "Home"
          breadcrumbsText2= "Inbox"
        />
      </Container>
    </Grid>
  )
}

export default Customer