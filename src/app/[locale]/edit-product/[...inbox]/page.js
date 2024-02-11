import CustomBreadcrumbs from '@/components/CustomBreadcrumbs'
import PageHeader from '@/components/PageHeader'
import { Inbox } from '@/components/e-commerce/edit-product/inbox/inbox'
import useTranslatedStatus from '@/components/e-commerce/products/useTranslatedStatus'
import { Container } from '@mui/material'
import { useTranslations } from 'next-intl'
const Customer = () => {
  const status = useTranslatedStatus();
  const t = useTranslations();
  return (
    <>
      <Container maxWidth="xl">
        <PageHeader
          headerText={'Reply'}
          createButtonText={t('create')}
          filterButtonText={t('filter')}
          statusOptions={status}
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
        <CustomBreadcrumbs
          breadcrumbsText1="Home"
          breadcrumbsText2="Inbox"
        />

        <Inbox />

      </Container>
    </>
  )
}

export default Customer