import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import PageHeader from "@/components/PageHeader";
import useTranslatedStatus from "@/components/e-commerce/useTranslatedStatus";
import { Container } from "@mui/material";

const CategoriesPage = () => {
  const status = useTranslatedStatus();
  return (
    <>
      <Container maxWidth="xl">
        <PageHeader headerText="Categories" statusOptions={status} />
        <CustomBreadcrumbs />
      </Container>
    </>
  )
}

export default CategoriesPage