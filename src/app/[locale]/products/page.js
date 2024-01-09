import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import PageHeader from "@/components/PageHeader";
import useTranslatedStatus from "@/components/e-commerce/useTranslatedStatus";
import { Container } from "@mui/material";
const ProductPage = () => {
  const status = useTranslatedStatus();
  return (
    <>
    <Container maxWidth="xl">
    <PageHeader headerText="Products" statusOptions={status} />
    <CustomBreadcrumbs />
    </Container>
    </>
  )
}

export default ProductPage