import CheckoutPage from "@/components/checkout";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from 'next-intl/server';
const ProfilePage = ({params:{locale}}) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  const countries = [
    {
      label: t('turkey'),
      code: 'TR'
    },
    {
      label: t('united-states'),
      code: 'EN'
    },
    {
      label: t('germany'),
      code: 'DE'
    },
    {
      label: t('france'),
      code: 'FR'
    }
  ];
  return (
    <>
    <CheckoutPage
      checkOutHeader={t('checkout')}
      checkOutTitle={t('all-plans-include-40-advanced-tools-and-features-to-boost-your-product')}
      checkOutTitle2={t('choose-the-best-plan-to-fit-your-needs')}
      checkOutCardName={t('credit-card')}
      checkOutCardName2={t('paypal')}

      billingHeader={t('billing-details')}
      billingEmailPlaceHolder={t('email-address')}
      billingPasswordPlaceHolder={t('password')}
      billingZipPlaceHolder={t('billing-zip-postal-code')}
      billingCountries={countries}
      billingCountriesLabel={t('country')}

      creditCardHeader={t('credit-card-info')}
      creditCardNumberPlaceholder={t('card-number')}
      creditCardHolderPlaceholder={t('card-holder')}
      creditCardEXPDatePlaceholder={t('exp-date')}

      orderSummaryHeaderName={t('order-summary')}
      orderSummaryTitle={t('it-can-help-you-manage-and-service-orders-before')}
      orderSummaryTitle2={t('during-and-after-fulfillment')}
      totalSubtotal={t('subtotal')}
      totalTax={t('tax')}
      totalTotal={t('total')}
      orderSummaryButtonText={t('proceed-with-payment')}
      orderSummaryFooterText={t('by-placing-an-order-you-agree-to-our-terms-of-service-and-privacy-policy-choose-the-best-plan-to-fit-your-needs')}
      orderSummaryCardHeader={t('a-simple-start-for-everyone')}
      orderSummaryCardMonth={t('month')}
      orderSummaryCardButtonText={t('change-plan')}
      
    />
    </>
  )
}

export default ProfilePage