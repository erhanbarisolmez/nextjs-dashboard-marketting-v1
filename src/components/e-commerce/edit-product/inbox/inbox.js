'use client'
import CustomButton from '@/components/CustomButton'
import { TypographyCustom } from '@/components/TypographyCustom'
import Card from '@/components/e-commerce/Card'
import { palette } from '@/style/color'
import { variants } from '@/utils/variants'
import {
  DeleteOutlineOutlined as DeleteIcon,
  InsertDriveFileOutlined as FileIcon,
  InboxOutlined as InboxIcon,
  SendOutlined as SendIcon,
  StarRateOutlined as StarIcon
} from '@mui/icons-material'
import { Container, Grid } from '@mui/material'
import { useState } from 'react'


export const Inbox = () => {
  const contained = variants.button.contained;
  const subtitle1 = variants.typography.subtitle1
  const [menuIndex, setMenuIndex] = useState(0);

  const menuItems = [
    { icon: <InboxIcon/>, text: 'Inbox', content: 'a' },
    { icon: <StarIcon/>, text: 'Marked', content: 'b' },
    { icon: <FileIcon/>, text: 'Draft', content: 'c' },
    { icon: <SendIcon/>, text: 'Sent', content: 'd' },
    { icon: <DeleteIcon/>, text: 'Trash', content: 'e' },
  ]

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <TypographyCustom
        key={index}
        variant={subtitle1}
        onClick={() => setMenuIndex(index)}
        icon={item.icon}
        text={item.text}
        sx={{
          display:'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
       
          height:'10vh',
          fontWeight:'bold',
          color: menuIndex === index ? palette.lightBlue[300] : 'inherit',
          ':active' :{
            color: palette.lightBlue[300]
          }


        }}
      />
    ))

  }

  return (
    <>
      <Grid container gap={1} mt={1}>
      
       {/* LEFT */}
        <Grid item xs={12} lg={2} sx={{display:'flex', justifyContent:'end'}}>
          <Card>
              <Grid item xs={12} mt={6} >
                <Container>
                <CustomButton
                  variant={contained}
                  buttonText="New Message"
                  fullWidth
                  sx={{
                    bgcolor: palette.lightBlue[500],
                    ':hover': {
                      bgcolor: palette.lightBlue[700]
                    }
                  }} />
                  </Container>
                    {renderMenuItems()}
              </Grid>
              <Grid>
              </Grid>
          </Card>
        </Grid>


        {/* RIGHT */}

        <Grid item xs={12} lg={8} sx={{display:'flex', justifyContent:'start', width:'100%'}}> 
          <Card>
             <Grid item xs={12}>
            {menuItems[menuIndex].content}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>

  )
}
