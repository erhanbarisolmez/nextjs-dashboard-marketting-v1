'use client'
import { InboxContentHeader } from "./inboxContent/InboxContentHeader";
import { InboxHeader } from "./inboxContent/InboxHeader";
import { UserCardInbox } from "./inboxContent/UserCardInbox";


export const InboxContent = () => {
  return (
    <>
        <InboxHeader />
        <InboxContentHeader />
        <UserCardInbox control={true}/>
        <UserCardInbox control={false} />
        <UserCardInbox  control={false}/>
    </>
  )
}
