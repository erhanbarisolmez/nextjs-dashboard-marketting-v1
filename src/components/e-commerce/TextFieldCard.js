import TextFieldCustom from "../TextFieldCustom";
import { TabHeader } from "./TabHeader";
export const TextFieldCard = ({
  textLevelHeader,
  textHeader,
  textColorHeader,
  sxHeader,
  textFieldPlaceHolder,
  textLevelBottom,
  textBottom,
  sxBottom,
  textColorBg,
  textBottom2,
  ...otherProps
}) => {
  
  const { defaultTextLevelHeader, defaultTextHeader, defaultTextColorHeader, defaultSxHeader, defaultTextFieldPlaceHolder, defaultTextLevelBottom, defaultTextBottom, defaultSxBottom } = Default();
  return (
    <>   
   <TabHeader
    level={textLevelHeader || defaultTextLevelHeader}
    text= {textHeader || defaultTextHeader}
    colorText= {textColorHeader || defaultTextColorHeader}
    sx={sxHeader || defaultSxHeader}  
  />

  <TextFieldCustom
    placeholder={textFieldPlaceHolder || defaultTextFieldPlaceHolder} 
    {...otherProps}
  />
  <TabHeader
    level= {textLevelBottom || defaultTextLevelBottom} 
    titleTextField= {textBottom || defaultTextBottom}
    sxTitleTextField={sxBottom || defaultSxBottom} 
    textColorBg={textColorBg}
    titleTextField2={textBottom2}
  />
  </>

  )

  function Default() {
    const defaultTextLevelHeader = "body-sm";
    const defaultTextHeader = "SKU";
    const defaultTextColorHeader = " *";
    const defaultSxHeader = { mt: 3 };
    const defaultTextFieldPlaceHolder = "SKU Number";
    const defaultTextLevelBottom = "body-xs";
    const defaultTextBottom = "Enter the product SKU.";
    const defaultSxBottom = { opacity: 0.6 };
    return { defaultTextLevelHeader, defaultTextHeader, defaultTextColorHeader, defaultSxHeader, defaultTextFieldPlaceHolder, defaultTextLevelBottom, defaultTextBottom, defaultSxBottom };
  }
}
