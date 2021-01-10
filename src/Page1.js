import React from 'react'
import {Link} from 'react-router-dom'
const Page1 = () => {
    return (
        <div>
            page1
            <Link to='/page2'>TO PAGE 2</Link>
        </div>
    )
}

export default Page1
