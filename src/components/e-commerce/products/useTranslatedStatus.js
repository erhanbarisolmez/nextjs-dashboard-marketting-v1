import { useTranslations } from "next-intl";
const useTranslatedStatus = () => {
  const t = useTranslations();
  const status = [
    { label: t('approved') },
    { label: t('pending') },
    { label: t('in-process') },
    { label: t('rejected') }
  ];
  return status;
}

export default useTranslatedStatus

export const useProductStatus = () => {
  const t = useTranslations();

  const status = [
    { label: t('all') },
    { label: t('published') },
    { label: t('draft') },
    { label: t('scheduled') },
    { label: t('inactive') },
  ]
  return status;
}

export const useProductTemplateStatus = () => {
  const t = useTranslations();
  const status = [
    { label: t('default-template') },
    { label: t('electronics') },
    { label: t('office-stationary') },
    { label: t('fashion') },
  ]
  return status;
}

export const useTaxStatus = () => {
  const t = useTranslations();
  const status = [
    { label: t('tax-free') },
    { label: t('taxable-goods') },
    { label: t('downloadable-product') },
  ]
  return status;
}

export const useVariationsStatus = () => {
  const t = useTranslations();
  const status = [
    { label: t('color') },
    { label: t('size')},
    { label: t('material') },
    { label: t('style') },
  ]
  return status;
}