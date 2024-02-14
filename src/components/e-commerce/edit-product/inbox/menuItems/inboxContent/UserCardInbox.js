'use client'
import { Avatar } from '@mui/joy';
import { Grid, Typography } from '@mui/material';
import { useState } from "react";
export const UserCardInbox = () => {
  const [open, setOpen] = useState(false);

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
    <div onClick={handleClick}>
        {open ?(
        <Grid item container sx={{display:'flex', backgroundColor: 'bisque', mt: 3 }}>
      <Grid item xs={6} sx={{ backgroundColor: 'beige', display: 'flex', alignItems:'center'}}>
        <Grid item container  xs={12} sx={{display:'flex',justifyContent:'space-around', bgcolor: 'lightblue' }}>
          <Grid item xs = {4} sx={{bgcolor:'red'}}>
          <Avatar variant='outlined' />
          </Grid>
          <Grid item xs={4}>
            Emma Smith
          </Grid>
          <Grid item xs={4}>
            1 day ago
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} sx={{ backgroundColor: 'lavender' }}>
        
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
          . . .
        </Grid>
      </Grid>
      <Typography>
      {message}

      </Typography>

    </Grid>
      ) : 
       <Typography sx={{
        textTransform: 'uppercase'
       }}>
        {message}
       </Typography>
      }
    
    </div>
  
  )
}
