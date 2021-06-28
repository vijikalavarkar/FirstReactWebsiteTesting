import React from 'react'
import RaectDOM from 'react-dom'
import Parant from './Parant'
import { BrowserRouter } from 'react-router-dom'

function App(){
    return(
        <>
            <BrowserRouter>
                <Parant />
            </BrowserRouter>
            
        </>
    )
}

RaectDOM.render(<App />,document.getElementById('root'))