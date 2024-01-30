import TextFieldCustom from "@/components/TextFieldCustom"
import { TabHeader } from "../TabHeader"
import { NoDiscount } from "./noDiscount"

export const FixedPrice = ({taxStatus}) => {
  return (
    <>
      <TabHeader
        level="body-sm"
        text="Fixed Discounted Price"
      />
      <TextFieldCustom

      />

      <TabHeader
        level="body-xs"
        text="Set the discounted product price. The product will be reduced at the determined fixed price"
        sx={{ opacity: 0.6 }}
      />
      <NoDiscount taxStatus={taxStatus}/>
    </>
  )
}
