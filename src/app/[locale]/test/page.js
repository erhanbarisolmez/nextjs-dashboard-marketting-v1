'use client'
import BasicRating from "@/components/Ratings";
import { Link } from "@/navigation";

const Page = () => {
  return (
    <>
    <Link href="/test" locale= "en" >english
    </Link>
    <Link href="/test" locale= "tr">turkish </Link>
    <BasicRating value={3}  />
    </>
  )
}

export default Page