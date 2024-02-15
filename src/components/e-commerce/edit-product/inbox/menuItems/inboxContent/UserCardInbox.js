'use client'
import { TypographyCustom } from '@/components/TypographyCustom';
import { TabHeader } from '@/components/e-commerce/TabHeader';
import { palette } from '@/style/color';
import {
  CommentBankOutlined as CommentIcon,
  DonutLargeOutlined as DonutIcon,
  EditNoteOutlined as EditIcon,
  MoreHorizOutlined as MoreIcon,
  StarBorderOutlined as StarIcon
} from '@mui/icons-material';
import { Avatar } from '@mui/joy';
import Divider from '@mui/joy/Divider';
import { Grid, Typography } from '@mui/material';
import { useState } from "react";


export const UserCardInbox = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen)
    console.log("durum:", open);
  }
  const message = `Hi Bob, 
  With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of any article is the title.Without a compelleing title, your reader won't even get to the first sentence.After the title, however, the first few sentences of your article are certainly the most important part.
  Jornalists call this critical, introductory section the "Lede," and when bridge properly executed, it's the that carries your reader from an headine try at attention-grabbing to the body of your blog post, if you want to get it right on of these 10 clever ways to omen your next blog posr with a bang
  Best regards,
  Jason Muller`;


  return (
    <div >
      {open ? (
        <Grid item container sx={{ display: 'flex', mt: 3 }}>
          <Grid item xs={6} onClick={handleClick} style={{ cursor: 'pointer' }} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
              <Grid>
                <Avatar variant='outlined' size='lg' sx={{}} />
              </Grid>
              <Grid item sx={{ fontWeight: 600 }} >
                Emma Smith
              </Grid>
              <Grid item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 600,
                  color: 'grey'
                }} >
                <DonutIcon sx={{ mr: 1, color: palette.lightGreen[400] }} />
                1 day ago
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{}}>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
              <TabHeader
                titleTextField="24 Jun 2024, 10:30 am"
                level="body-sm"
                fontWeight={400}
                sxTitleTextField={{ color: 'gray', textAlign: 'center', alignItems: 'center' }}
              />

              <Grid item xs={4} sx={{ display: 'flex', ml: 3, color: 'gray', justifyContent: 'space-between', display: 'flex' }}>
                <StarIcon />
                <CommentIcon />
                <EditIcon />
                <MoreIcon />
              </Grid>
            </Grid>
          </Grid>
          <Typography sx={{ mt: 3 }}>
            {message}
          </Typography>
          <Grid item xs={12}>
            <Divider orientation='horizontal' sx={{ mt: 3 }} />
          </Grid>

        </Grid>

      ) :
        <Grid item container sx={{ display: 'flex', mt: 3 }}>
          <Grid item xs={12} onClick={handleClick} style={{ cursor: 'pointer' }} sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
              <Grid item xs={1}>
                <Avatar variant='outlined' size='lg' sx={{}} />
              </Grid>
              <Grid xs={4} item sx={{ fontWeight: 600, justifyContent: 'flex-start', display: 'flex', ml: 3 }} >
                Emma Smith
              </Grid>
              <Grid item
                xs={12}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 600,
                  color: 'grey'
                }} >
                <DonutIcon sx={{ mr: 1, color: palette.lightGreen[400] }} />
                1 day ago
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
              <TabHeader
                titleTextField="24 Jun 2024, 10:30 am"
                level="body-sm"
                fontWeight={400}
                sxTitleTextField={{ color: 'gray', textAlign: 'center', alignItems: 'center' }}
              />

              <Grid item xs={4} sx={{ display: 'flex', ml: 3, color: 'gray', justifyContent: 'space-between', display: 'flex' }}>
                <StarIcon />
                <CommentIcon />
                <EditIcon />
                <MoreIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TypographyCustom
              sx={{
                mt: 3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical'
              }}
              text={message}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider orientation='horizontal' sx={{mt:3}} />

          </Grid>
        </Grid>
      }

    </div>

  )
}
