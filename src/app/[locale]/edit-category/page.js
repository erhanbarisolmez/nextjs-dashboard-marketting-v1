import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import PageHeader from "@/components/PageHeader";
import useTranslatedStatus from "@/components/e-commerce/useTranslatedStatus";
import { Container } from "@mui/material";
const EditCategoryPage = () => {
  const status = useTranslatedStatus();
  return (
    <>
      <Container maxWidth="xl">
        <PageHeader headerText="Edit Category" statusOptions={status} />
        <CustomBreadcrumbs />
      </Container>
    </>
  )
}

export default EditCategoryPage