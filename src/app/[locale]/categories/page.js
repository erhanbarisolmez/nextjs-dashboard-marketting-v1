import CustomBreadcrumbs from "@/components/CustomBreadcrumbs"
import PageHeader from "@/components/PageHeader"
import { Container } from "@mui/material"
const CategoriesPage = () => {
  return (
    <>
    <Container maxWidth="xl">
    <PageHeader headerText="Categories" />
    <CustomBreadcrumbs/>
    </Container>
    </>
  )
}

export default CategoriesPage