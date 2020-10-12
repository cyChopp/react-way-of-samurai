import React from 'react';
import loadingImage from '../../../assets/images/loader.svg';

let Preloader = (props)=>{
    return(
        <div>
         <img src={loadingImage}/>
        </div>
    )
}

export default Preloader;