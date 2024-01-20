import Link from "next/link"
export default function Blog (){
    return(
        <div className="flex flex-col at-5 gap-10">
            <h1>blog</h1>
            <Link href={"/blog/1"}>blog1</Link>
            <Link href={"/blog/2"}>blog2</Link>
            <Link href={"/blog/3"}>blog3</Link>
            <Link href={"/blog/4"}>blog4</Link>
            <Link href={"/blog/5"}>blog5</Link>
        </div>
    )
}