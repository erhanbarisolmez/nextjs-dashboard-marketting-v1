import CustomBreadcrumbs from "@/components/CustomBreadcrumbs"
import PageHeader from "@/components/PageHeader"
import { Container } from "@mui/material"
const AddProductPage = () => {
  return (
    <>
    <Container maxWidth="xl">
    <PageHeader headerText="Add Product" />
    <CustomBreadcrumbs/>
    </Container>
    </>
  )
}

export default AddProductPage