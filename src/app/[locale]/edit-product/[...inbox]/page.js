import CustomBreadcrumbs from '@/components/CustomBreadcrumbs'
import PageHeader from '@/components/PageHeader'
import { Inbox } from '@/components/e-commerce/edit-product/inbox/inbox'
import { Container } from '@mui/material'
const Customer = () => {

  return (
    <>
      <Container maxWidth="xl">
        <PageHeader
          headerText="Reply"
          createButtonText="Create"
          filterButtonText="Filter"

        />
        <CustomBreadcrumbs
          breadcrumbsText1="Home"
          breadcrumbsText2="Inbox"
        />

        <Inbox />

      </Container>
    </>
  )
}

export default Customer