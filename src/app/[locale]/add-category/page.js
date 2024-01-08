import CustomBreadcrumbs from "@/components/CustomBreadcrumbs"
import PageHeader from "@/components/PageHeader"
import { Container } from "@mui/material"
const AddCategoryPage = () => {
  return (
    <>
    <Container maxWidth="xl">
    <PageHeader headerText="Add Category" />
    <CustomBreadcrumbs />
    </Container>
    </>
  )
}

export default AddCategoryPage