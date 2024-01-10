import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import PageHeader from "@/components/PageHeader";
import useTranslatedStatus from "@/components/e-commerce/useTranslatedStatus";
import { Container } from "@mui/material";
import { useTranslations } from "next-intl";

const AddCategoryPage = () => {
  const status = useTranslatedStatus();
  const t = useTranslations();

  return (
    <>
      <Container maxWidth="xl">
        <PageHeader
          headerText={t('add-category')}
          statusOptions={status}
          filterButtonText={t('filter')}
          createButtonText={t('create')}
          filterCardHeaderText={t('filter-options')}
          filterCardOptionStatus={t('status-0')}
          autoCompleteLabel={t('select-option')}
          filterCardHeaderCheckBox={t('member-type')}
          filterCardCheckBoxText1={t('author')}
          filterCardCheckBoxText2={t('customer')}
          filterCardHeaderSwitch={t('notifications')}
          filterCardStatusTextSwitch={t('enabled')}
          filterCardTextButton1={t('reset')}
          filterCardTextButton2={t('apply')}
        />
        <CustomBreadcrumbs breadcrumbsText1={t('home')} breadcrumbsText2={t('e-commerce')} breadcrumbsText3={t('add-category')} />
      </Container>
    </>
  )
}

export default AddCategoryPage