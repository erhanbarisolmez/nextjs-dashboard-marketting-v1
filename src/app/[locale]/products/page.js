import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import PageHeader from "@/components/PageHeader";
import ProductTable from "@/components/e-commerce/products/ProductTable";
import useTranslatedStatus, { useProductStatus } from "@/utils/translate/useTranslatedStatus";
import { useActionProductTable, useProductColumnName, useProductStatusTable } from "@/utils/translate/useTranslatedTable";
import { Container } from "@mui/material";
import { useTranslations } from "next-intl";


const ProductPage = () => {

  const { t, status, productStatus, productTableStatus, actionProductTable, productColumnName } = useTranslate();

  return (
    <>
    <Container maxWidth="xl">
    <PageHeader 
      headerText={t('products')} 
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
    <CustomBreadcrumbs breadcrumbsText1 = {t('home')} breadcrumbsText2 = {t('e-commerce')} breadcrumbsText3 = {t('products')} />
    <ProductTable 
      productOptions = {productStatus}
      autoCompleteLabel = {t('status')}
      tableHeaderButtonText={t('add-product')}
      productTableStatus = {productTableStatus}
      actionProductTable = {actionProductTable}
      searchInputText={t('search-product')}
      productColumnName = {productColumnName}
      actionLabel={t('actions')}
    />
    
    </Container>
    </>
  )
}

export default ProductPage

function useTranslate() {
  const status = useTranslatedStatus();
  const productStatus = useProductStatus();
  const productTableStatus = useProductStatusTable();
  const actionProductTable = useActionProductTable();
  const productColumnName = useProductColumnName();
  const t = useTranslations();
  return { t, status, productStatus, productTableStatus, actionProductTable, productColumnName };
}
