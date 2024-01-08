import CustomBreadcrumbs from "@/components/CustomBreadcrumbs"
import PageHeader from "@/components/PageHeader"
import { Container } from "@mui/material"
const ProductPage = () => {
  return (
    <>
    <Container maxWidth="xl">
    <PageHeader headerText="Products" />
    <CustomBreadcrumbs />
    </Container>
    </>
  )
}

export default ProductPage