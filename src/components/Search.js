import React from 'react'
import Container from './Container'

function Search({searchTerm}) {

    // const {SearchTerm} = props;

    console.log('search term',searchTerm)

    return (
        <div>
           <h2> {searchTerm} Images </h2>
            <Container searchTerm={searchTerm}/>
        </div>
    )
}

export default Search
