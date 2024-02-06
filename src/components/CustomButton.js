'use client'
import { Button } from "@mui/material";


const CustomButton = (props) => {
  const { variant = "contained",buttonText, ...otherProps } = props;

  return (
    <Button
      variant={variant}
      color="success"
      {...otherProps} >
      {buttonText}
    </Button>
  )
}

export default CustomButton