import Link from 'next/link';
import React from 'react';




const Component1 = () => {

  return (
    <div>
        <Link href={"/about"}>
          Click to check if "next/link" works
        </Link>
    </div>
  )
}

export default Component1
