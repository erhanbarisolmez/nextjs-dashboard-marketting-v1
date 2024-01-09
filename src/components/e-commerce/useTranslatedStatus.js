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