import { useTranslations } from "next-intl";

export  const useProductStatusTable = () => {
  const t = useTranslations();
  const status = {
    published : t('published'),
    inactive : t('inactive'),
    scheduled: t('scheduled')
  }  
  return status;
}

export const useActionProductTable = () => {
  const t = useTranslations();
  const action = [
    { label: t('edit') },
    { label: t('delete') }
  ];

  return action;
}

export const useProductColumnName = () => {
  const t = useTranslations();
  const  columnNames = {
    product: t('products'),
    sku: t('sku'),
    qty: t('qty'),
    price: t('price'),
    ratings: t('ratings'),
    status: t('status-1'),
    actions: t('actions')
  }
  
  return columnNames;
}