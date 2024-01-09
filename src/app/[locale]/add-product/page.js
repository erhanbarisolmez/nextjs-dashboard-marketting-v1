import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import PageHeader from "@/components/PageHeader";
import useTranslatedStatus from "@/components/e-commerce/useTranslatedStatus";
import { Container } from "@mui/material";

const AddProductPage = () => {
    const status = useTranslatedStatus();

  return (
    <>
    <Container maxWidth="xl">
    <PageHeader headerText="Add Product" statusOptions={status} />
    <CustomBreadcrumbs />
    </Container>
    </>
  )
}

export default AddProductPage