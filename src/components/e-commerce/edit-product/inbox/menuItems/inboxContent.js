'use client'
import { InboxContentHeader } from "./inboxContent/InboxContentHeader";
import { InboxHeader } from "./inboxContent/InboxHeader";
import { UserCardInbox } from "./inboxContent/UserCardInbox";
import { Send } from "./inboxContent/message/Send";


export const InboxContent = () => {
  return (
    <>
        <InboxHeader />
        <InboxContentHeader />
        <UserCardInbox control={true}/>
        <UserCardInbox control={false} />
        <UserCardInbox  control={false}/>
        <Send />
    </>
  )
}
