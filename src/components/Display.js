
import picture from './champions.png' /*importing the picture from champions.png */

let Display= () =>{ 
    /*This is a code to make display a function and return a div with a picture in there  */
    return(<div>

        <img src={picture} className ="champ-logo"  alt="champions"/>
            </div>
        )
}

    
export default Display /* exporting my code from display  */