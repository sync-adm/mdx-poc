import Link from 'next/link';
import React from 'react'

type Component1Props = {
    name: any;
}

const Component1 = ({name}: Component1Props) => {
    
  return (
    <div>
        <Link href={"/about"}>
          Click to check if "next/link" works
        </Link>
        {/* {name} */}
    </div>
  )
}

export default Component1