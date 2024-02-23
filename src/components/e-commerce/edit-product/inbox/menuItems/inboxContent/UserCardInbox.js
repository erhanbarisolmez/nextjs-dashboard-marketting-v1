'use client'
import { useStyles } from "@/style/Inbox/iconStyles";
import { palette } from '@/style/color';
import {
  CommentBankOutlined as CommentIcon,
  DonutLargeOutlined as DonutIcon,
  EditNoteOutlined as EditIcon,
  MoreHorizOutlined as MoreIcon,
  StarBorderOutlined as StarIcon
} from '@mui/icons-material';
import { useState } from "react";
import { CardClose } from './userCard/CardClose';
import { CardOpen } from './userCard/CardOpen';

export const UserCardInbox = ({ control }) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  const Icon = {
    "star": <StarIcon className={classes.icon} />,
    "donut": <DonutIcon className={classes.icon} />,
    "comment": <CommentIcon className={classes.icon} />,
    "edit": <EditIcon className={classes.icon} />,
    "more": <MoreIcon className={classes.icon} />
  }

  const message = `Hi Bob, 
  With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of any article is the title.Without a compelleing title, your reader won't even get to the first sentence.After the title, however, the first few sentences of your article are certainly the most important part.
  Jornalists call this critical, introductory section the "Lede," and when bridge properly executed, it's the that carries your reader from an headine try at attention-grabbing to the body of your blog post, if you want to get it right on of these 10 clever ways to omen your next blog posr with a bang
  Best regards,
  Jason Muller`;

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen)
    console.log("durum:", open);
  }

  return (
  <div>
      {open === control ? (
      
      <CardOpen  
      name="Emma Smith"
      time="1 day ago"
      timeIcon={<DonutIcon sx={{ mr: 1, color: palette.lightGreen[400] }} />}
      date="24 Jun 2024, 10:30 am"
      handleClick={handleClick}
      icon1={Icon.star}
      icon2={Icon.comment}
      icon3={Icon.edit}
      icon4={Icon.more}
      message={message}
      />

      ) :
        <CardClose 
        name="Emma Smith"
        time="1 day ago"
        timeIcon={<DonutIcon sx={{ mr: 1, color: palette.lightGreen[400] }} />}
        date="24 Jun 2024, 10:30 am"
        handleClick={handleClick}
        icon1={Icon.star}
        icon2={Icon.comment}
        icon3={Icon.edit}
        icon4={Icon.more}
        message={message}
        />
        
}
  </div>


  )
}
