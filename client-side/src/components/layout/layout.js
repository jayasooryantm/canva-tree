import React from 'react'
import Navbar from '../navbar/navbar'

function layout(props) {
    return (
        <div className='container dark'>
            <div className='app'>
                <Navbar />
                {props.children}
            </div>

        </div>
    )
}

export default layout