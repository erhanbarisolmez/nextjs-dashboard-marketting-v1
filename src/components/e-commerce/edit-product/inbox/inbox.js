'use client'
import CustomButton from '@/components/CustomButton'
import { TypographyCustom } from '@/components/TypographyCustom'
import Card from '@/components/e-commerce/Card'
import { palette } from '@/style/color'
import { variants } from '@/utils/variants'
import {
  Add as AddIcon,
  DeleteOutlineOutlined as DeleteIcon,
  DonutLarge as DonutLargeIcon,
  InsertDriveFileOutlined as FileIcon,
  InboxOutlined as InboxIcon,
  SendOutlined as SendIcon,
  StarRateOutlined as StarIcon
} from '@mui/icons-material'
import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import { AddLabelContent } from './menuItems/addLabelContent'
import { CustomWorkContent } from './menuItems/customWorkContent'
import { DraftContent } from './menuItems/draftContent'
import { InboxContent } from './menuItems/inboxContent'
import { MarkedContent } from './menuItems/markedContent'
import { PartnershipContent } from './menuItems/partnershipContent'
import { SentContent } from './menuItems/sentContent'
import { TrashContent } from './menuItems/trashContent'


export const Inbox = () => {
  const contained = variants.button.contained;
  const subtitle1 = variants.typography.subtitle1
  const [menuIndex, setMenuIndex] = useState(0);
  const colorRed = palette.red[500];
  const colorGreen = palette.lightGreen[500];
  const colorPurple = palette.deepPurple[500];
  const menuSeperator =' ';
 
  const menuItems = [
    { icon: <InboxIcon />, text: 'Inbox', content: <InboxContent/> }, 
    { icon: <StarIcon />, text: 'Marked', content: <MarkedContent/> },
    { icon: <FileIcon />, text: 'Draft', content: <DraftContent/> },
    { icon: <SendIcon />, text: 'Sent', content: <SentContent/> },
    { icon: <DeleteIcon />, text: 'Trash', content: <TrashContent/> },
    menuSeperator,
    { icon: <DonutLargeIcon sx={{color: colorRed}} />, text: 'Custom Work', content: <CustomWorkContent/> },
    { icon: <DonutLargeIcon sx={{color: colorGreen}}/>, text: 'Partnership', content: <PartnershipContent/> },
    { icon: <DonutLargeIcon sx={{color: colorPurple}} />, text: 'In Progress', content: <SentContent/> },
    { icon: <AddIcon />, text: 'Add Label', content: <AddLabelContent/> },
  ];


  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      item && (
      <TypographyCustom
        key={index}
        variant={subtitle1}
        onClick={() => setMenuIndex(index)}
        icon={item.icon}
        text={item.text}
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '6vh',
          fontWeight: 'bold',
          color: menuIndex === index ? palette.lightBlue[300] : 'inherit',
          ':active': {
            color: palette.lightBlue[300]
          },
          pointerEvents: item === menuSeperator ? 'none' : 'auto', // Disable pointer events for the separator

        }}
      />
    )))
  }
  return (

    <>
      <Grid container mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }} >

        {/* LEFT */}
        <Grid item xs={2}>
          <Card sx={{ height: '100%' }}>
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
              <Grid item xs={12}>
              {renderMenuItems()}
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* RIGHT */}
        <Grid item xs={10}>
          <Card sx={{ height: '100%', ml: 1 }}>
            <Grid item xs={12} mt={6} >
              <Container>
                <Grid xs={12}>
                  {menuItems[menuIndex].content}
                </Grid>
              </Container>
            </Grid>

          </Card>
        </Grid>
      </Grid>
    </>

  )
}
