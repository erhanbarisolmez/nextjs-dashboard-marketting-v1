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
import { useEffect, useState } from 'react'
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const colorRed = palette.red[500];
  const colorGreen = palette.lightGreen[500];
  const colorPurple = palette.deepPurple[500];
  const menuSeperator = ' ';

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const menuItems = [
    { icon: <InboxIcon />, text: 'Inbox', content: <InboxContent />, },
    { icon: <StarIcon />, text: 'Marked', content: <MarkedContent />, },
    { icon: <FileIcon sx={{ mr: 2 }} />, text: 'Draft', content: <DraftContent />, },
    { icon: <SendIcon sx={{ mr: 2 }} />, text: 'Sent', content: <SentContent />, },
    { icon: <DeleteIcon sx={{ mr: 2 }} />, text: 'Trash', content: <TrashContent />, },
    menuSeperator,
    { icon: <DonutLargeIcon sx={{ color: colorRed, ml: 0.6 }} />, text: 'Custom Work', content: <CustomWorkContent />, },
    { icon: <DonutLargeIcon sx={{ color: colorGreen, }} />, text: 'Partnership', content: <PartnershipContent />, },
    { icon: <DonutLargeIcon sx={{ color: colorPurple, }} />, text: 'In Progress', content: <SentContent />, },
    { icon: <AddIcon />, text: 'Add Label', content: <AddLabelContent />, },
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
            alignContent: 'center',
            height: '6vh',
            fontWeight: 'bold',
            color: menuIndex === index ? palette.lightBlue[300] : 'inherit',
            ':active': {
              color: palette.lightBlue[300]
            },
            pointerEvents: item === menuSeperator ? 'none' : 'auto', // Disable pointer events for the separator
            cursor:"pointer",
          }}
        />
      )))
  }
  return (

    <>
      <Grid container mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }} >
        {/* LEFT */}
        {windowWidth > 1200 && (
          <Grid item xs={12} lg={2} >
            <Card sx={{}}>
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
        )}

        {/* RIGHT */}
        {windowWidth && (
          <Grid item xs={12} lg={10} >
            <Card sx={{
              height: '100%',
              ml: {
                lg: 1
              },
              mt: {
                xs: 1,
                lg: 0
              }
            }}>
              <Grid item xs={12} mt={6} >
                <Container>
                  <Grid item xs={12}>
                    {menuItems[menuIndex].content}
                  </Grid>
                </Container>
              </Grid>

            </Card>
          </Grid>
        )}
      </Grid>
    </>

  )
}
