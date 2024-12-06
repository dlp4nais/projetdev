import ImageItem from './Image.jsx'
import React, { useState } from 'react'
import images from '../images.jsx'
import '../index.css';
import '../InfoSerie.css';



export default function Home(){

    const [imageList,setImageList] = useState(images);

    function searchImage(e){

        if(e.target.value == ""){
            setImageList(images)
        }else{    
            setImageList(images.filter((img)=> img.nom.toUpperCase().includes(e.target.value.toUpperCase())))        
        }
    }


 /*    function handleAddImage(e){
        let imageFile = fs.readFileSync("../images.jsx")
        let imageEditor = JSON.parse(imageFile);

        let imageData = {
            nom:e.target.imagename.value,
            key:8,
            chemin:e.target.imageurl.value,
            text:e.target.imagedesc.value,
            date:e.target.imagedate.value,
        }
        imageEditor.push(imageData)
        let newJSON = JSON.stringify(imageEditor)
        //fs.writeFile("../images.jsx", newJSON, err => {
          //  if(err) throw err;
        //} )

        //setImageList(imageList.concat(imageData))
        console.log(e.target.imagename)
    
        //setImageList() */
    

    return <>

        <h1>Bienvenue sur la page accueil de notre super site</h1>
        <input placeholder='Rechercher' id="searchinput" defaultValue="" onChange={searchImage}/>
        <div className="squelette">

        {imageList.map((image) => (
            <ImageItem key={image.key} image = {image}></ImageItem>
        ))
        }
  {/*       <form onSubmit={handleAddImage}>
            <input type='text' id='imagename'/>
            <input type='text' id='imageurl'/>
            <input type='text' id='imagedesc'/>
            <input type='text' id='imagedate'/>

            <button type='submit'></button>
        </form> */}
        </div>


    </>;
}





