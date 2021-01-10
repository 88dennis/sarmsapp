import React from 'react'
import {Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";


const Page1 = () => {

const history = useHistory();

  const routeChange = () =>{ 
    let path = `/`; 
    history.replace(path);
    console.log(history)
    }
    return (
        <div>
            page2

        <button onClick={()=>routeChange()}> TO PAGE1</button>
            <Link to='/'>TO PAGE 1</Link>


        </div>
    )
}

export default Page1
