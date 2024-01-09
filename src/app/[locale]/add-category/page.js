import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import PageHeader from "@/components/PageHeader";
import useTranslatedStatus from "@/components/e-commerce/useTranslatedStatus";
import { Container } from "@mui/material";

const AddCategoryPage = () => {
  const status = useTranslatedStatus();
  return (
    <>
      <Container maxWidth="xl">
        <PageHeader headerText="Add Category" statusOptions={status} />
        <CustomBreadcrumbs />
      </Container>
    </>
  )
}

export default AddCategoryPage