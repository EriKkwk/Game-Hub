import './Home.css'
import { Link } from 'react-router-dom'

function Home(){
    return <div className='allgames-container'>
        <Link to="/games/ticTacToe"><div className='xo game'></div></Link>
        <Link to="/games/game2"><div className='rps game'></div></Link>
        <Link to="/games/rockSpissorsPaperGame"><div className='rps game'></div></Link>
        <Link to="/games/rocketGame"><div className='rocket game'></div></Link>
    </div>
}

export default Home;