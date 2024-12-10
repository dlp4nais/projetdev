import PropTypes from 'prop-types'
import images from '../images.json'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../index.css';
import '../InfoSerie.css';

export default function InfoSerie(){


    //page du détail de l'image
    const location = useLocation(); 
    const pathname = location.pathname;
    const match = pathname.match(/\/imageDetail\/(\d+)/);
    const id = match[1]; 
    const image = images.find(image => image.key == parseInt(id));
    return <>

        <h1>{image.nom}</h1>
        <div className='descrisption'>
        <div className='info-texte'>{image.text}</div>
        <div className='info-date'> La série est sortie le : {image.date}</div>
        <img src={image.chemin} alt="testtttt" className='images' /> 
        </div>
        
    </>;



}


