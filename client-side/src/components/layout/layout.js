import React from 'react'
import Header from '../header/header'

const layout = (props) => {
    return (
        <div className='container dark'>
            <div className='app'>
                <Header />
                {props.children}
            </div>

        </div>
    )
}

export default layout