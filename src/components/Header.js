import React from 'react'
import Form from './Form'
import Navigation from './Navigation';

function Header(props) {

    const {history, handleSubmit} = props;

    return (
        <div>
            <h1>SnapShot</h1>
            <Form history={history} handleSubmit={handleSubmit}/>
            <Navigation/>
        </div>
    )
}

export default Header
