import React,{useState,useEffect,useContext} from 'react';
import {PhotoContext} from '../context/PhotoContext';
import Gallery from './Gallery';
import Loader from './Loader';

function Container({searchTerm}) {

    const {images,loading, runQuery}  = useContext(PhotoContext);

    useEffect(()=>{
        runQuery(searchTerm);
    },[searchTerm])

    return (
        <div className='photo-container'>
            {loading ? <Loader/> : <Gallery data={images}/> }
        </div>
    )
}

export default Container
