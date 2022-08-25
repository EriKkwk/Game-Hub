import './Header.css'
import { Link } from 'react-router-dom';

function Header(){
    
    const click = () => {alert("We dont know backend :(")}

    return <div className='header'>
        <Link to={"/"}>
        <div className="logo">
            <i class="fa-brands fa-playstation"></i>
            <span>GameHub</span>
        </div>
        </Link>
        <div className="logreg">
            <button onClick={() => {click()}}>LOGIN</button>
            <button onClick={() => {click()}}>REGISTER</button>
        </div>
    </div>
}

export default Header;