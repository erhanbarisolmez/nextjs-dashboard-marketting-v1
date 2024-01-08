import CustomBreadcrumbs from "@/components/CustomBreadcrumbs"
import PageHeader from "@/components/PageHeader"
import { Container } from "@mui/material"
const EditProductPage = () => {
  return (
      <>
    <Container maxWidth="xl">
    <PageHeader headerText="Edit Product" />
    <CustomBreadcrumbs/>
    </Container>
    </>
  )
}

export default EditProductPage