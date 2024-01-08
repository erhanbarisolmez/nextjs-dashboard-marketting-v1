import CustomBreadcrumbs from "@/components/CustomBreadcrumbs"
import PageHeader from "@/components/PageHeader"
import { Container } from "@mui/material"
const EditCategoryPage = () => {
  return (
    <>
    <Container maxWidth="xl">
    <PageHeader headerText="Edit Category" />
    <CustomBreadcrumbs/>
    </Container>
    </>
  )
}

export default EditCategoryPage