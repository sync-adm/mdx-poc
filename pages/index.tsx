import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <>
            <div>Next/Link Tests</div>
            <ul>
                <li> <Link href={"/evaluate-test"}>✅ /evaluate-test  (passed when build)</Link></li>
                <li> <Link href={"/mdx-remote-test"}>✅ /mdx-remote-test (passed when build)</Link> </li>
                <li> <Link href={"/on-demand-test"}>❌ /on-demand-test (error when build, works on dev)</Link> </li>
            </ul>
        </>
    )
}

export default index