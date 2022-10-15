import './Header.css'
import { Link } from 'react-router-dom';

function Header(){

    return <div className='header'>
        <Link to={"/"}>
        <div className="logo">
            <i class="fa-brands fa-playstation"></i>
            <span>GameHub</span>
        </div>
        </Link>
        <div className="logreg">
            <Link to={"/statistics"}><button className='hbtn statistic'>STATISTICS</button></Link>
            <Link to={"/login"}><button className='hbtn loginbtn'>LOGIN</button></Link>
            <Link to={"/register"}><button className='hbtn'>REGISTER</button></Link>
        </div>
    </div>
}

export default Header;


