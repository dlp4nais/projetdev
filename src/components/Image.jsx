import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../InfoSerie.css';





export default function Image({image}){
    return <>

<div className = "card">
<button>Supprimer</button>
<Link to={"/imageDetail/" + `${image.key}`}><img className='info-image' src={image.chemin} alt="image black mirror" /></Link>
</div>

 </>;



}



Image.propTypes = {
    image: PropTypes.object.isRequired, // Obligatoire et de type string
 
};