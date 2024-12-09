import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import '../InfoSerie.css';





export default function Image({image}){

    //fonction pour supprimer une image
    function deleteImage(e){
        let key = e.target.id;
        let images = JSON.parse(localStorage.getItem('images')) || [];
        images = images.filter(img => img.key != key);
        localStorage.setItem('images', JSON.stringify(images));
    }
    
    //permet de rediriger vers le détail de chaque image
    return <>
    

    <div className = "card">
    <button id={image.key} onClick={deleteImage} >Supprimer</button>
    <Link to={"/imageDetail/" + `${image.key}`}><img className='info-image' src={image.chemin} alt={"image "+`${image.nom}`} /></Link>
    </div>

    </>;
    }



Image.propTypes = {
    image: PropTypes.object.isRequired, 
 
};