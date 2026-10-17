import './Header.css'
import GhIPSSLogo from '../assets/GHIPSS-removebg.png'
function Header(){
    return(
        <div className = 'logo'> 
            <img src={GhIPSSLogo} alt="GHIPSS Logo" width="447" height="447" className="logo-image" />
            <span className="logo-text">GHIPSS</span> 
        </div>
    )
}

export default Header