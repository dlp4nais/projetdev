import ImageItem from './Image.jsx'
import React, {useState} from 'react';
import '../index.css';
import '../InfoSerie.css';

export default function Home(){
    

    const storedImages = JSON.parse(localStorage.getItem('images'));
    const [imageList,setImageList] = useState(storedImages);

    //barre de recherche
    function searchImage(e){

        if(e.target.value == ""){
            setImageList(storedImages)
        }else{    
            setImageList(storedImages.filter((img)=> img.nom.toUpperCase().includes(e.target.value.toUpperCase())))        
        }
    }

    //ajouter une image
     function handleAddImage(e){
        let key = imageList.length + 1;

        let imageData = {
            nom:e.target.imagetitle.value,
            key:key,
            chemin:e.target.imageurl.value,
            text:e.target.imagedesc.value,
            date:e.target.imagedate.value,
        }      
        const updatedImageList = imageList.concat(imageData);
        setImageList(updatedImageList);
        localStorage.setItem('images', JSON.stringify(updatedImageList));       //setImageList() 
    }

    
    //le "html" pour ajouter une image
    return <>

        <h1 className='bienvenue'>Bienvenue sur Netflux</h1>
        <input  className = "topnav" placeholder='Rechercher' id="searchinput" defaultValue="" onChange={searchImage}/>
        <form onSubmit={handleAddImage}>
            <label htmlFor='imagename'>Nom de la série:</label>
            <input type='text' id='imagetitle' name='imagetitle' required/>

            <label htmlFor='imageurl'>URL de l'image:</label>
            <input type='text' id='imageurl' name='imageurl' required/>

            <label htmlFor='imagedesc'>Description série:</label>
            <input type='text' id='imagedesc' name='imagedesc' required/>

            <label htmlFor='imagedate'>Date de sortie:</label>
            <input type='date' id='imagedate' name='imagedate' required/>

            <button type='submit'>Ajouter la série</button>
        </form>
        
        
        <div className="squelette">
        {imageList.map((image) => (
            <ImageItem key={image.key} image = {image}></ImageItem>
        ))
        }
        <div style={{ display: 'flex', flexDirection: 'column' }}></div>
        </div>


    </>;
}





