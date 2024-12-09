
import { Link } from 'react-router-dom';
import InfoSerie from "./InfoSerie.jsx";

export default function Error(){
    return(
        <div >
            <h1>404 - Page Not Found</h1>
            <p>Oops! Cette page n'existe pas.</p>
            <Link to="/">Retour à l'accueil</Link>
       </div>
    );
}