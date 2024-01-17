import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import PageHeader from "@/components/PageHeader";
import useTranslatedStatus from "@/components/e-commerce/products/useTranslatedStatus";
import { Container } from "@mui/material";
import { useTranslations } from "next-intl";

const CategoriesPage = () => {
  const status = useTranslatedStatus();
  const t = useTranslations();
  return (
    <>
    <Container maxWidth="xl">
    <PageHeader 
      headerText={t('categories')}
      statusOptions={status} 
      filterButtonText = {t('filter')}
      createButtonText = {t('create')}
      filterCardHeaderText = {t('filter-options')}
      filterCardOptionStatus = {t('status-0')}
      autoCompleteLabel={t('select-option')}
      filterCardHeaderCheckBox = {t('member-type')}
      filterCardCheckBoxText1 = {t('author')}
      filterCardCheckBoxText2 = {t('customer')}
      filterCardHeaderSwitch = {t('notifications')}
      filterCardStatusTextSwitch = {t('enabled')}
      filterCardTextButton1 = {t('reset')}
      filterCardTextButton2= {t('apply')}
    />
    <CustomBreadcrumbs breadcrumbsText1 = {t('home')} breadcrumbsText2 = {t('e-commerce')} breadcrumbsText3 = {t('categories')}/>
    </Container>
    </>
  )
}

export default CategoriesPage