import React from 'react';
import Container  from './Container';

function Item(props) {

    const {searchTerm} = props

    return (
        <div>
            <h2>{searchTerm} Images</h2>
            <Container searchTerm={searchTerm}/>
        </div>
    )
}

export default Item
