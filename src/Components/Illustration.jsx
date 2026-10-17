import './Illustration.css'
import IllustrationImage from '../assets/Hero Image.webp'

function Illustration(){
    return(
        <div className = 'image-container'>
            <img src={IllustrationImage} alt="illustion" width="1200" height="896" className="illustion-image" />
        </div>
    )
                
}

export default Illustration