import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Home() {


    const user = JSON.parse(localStorage.getItem('user'));

    async function addCount1() {
        await axios.put('http://localhost:8000/auth/ticTacToe',{
            "id": user.id
            
        }).then(res => {
            console.log(res.data)
            console.log(user.id)
        })
    }
    async function addCount2() {
        await axios.put('http://localhost:8000/auth/squares',{
           "id": user.id
        }).then(res => {
          console.log(res.data)
        })
    }
    async function addCount3() {
        await axios.put('http://localhost:8000/auth/rockSpissorsPaperGame',{
           "id": user.id
        }).then(res => {
          console.log(res.data)
        })
    }
    async function addCount4() {
        await axios.put('http://localhost:8000/auth/rocketGame',{
           "id": user.id
        }).then(res => {
          console.log(res.data)
        })
    }



    const click1 = event => {
        event.preventDefault() 
        addCount1()
    }
    const click2 = event => {
        event.preventDefault() 
        addCount2()
    }
    const click3 = event => {
        event.preventDefault() 
        addCount3()
    }
    const click4 = event => {
        event.preventDefault() 
        addCount4()
    }


    return <div className='allgames-container'>
        <Link to="/games/ticTacToe" onClick={addCount1}><div className='xo game'></div></Link>
        <Link to="/games/squares" onClick={() => click2()}><div className='squares game'></div></Link>
        <Link to="/games/rockSpissorsPaperGame" onClick={() => click3()}><div className='rps game'></div></Link>
        <Link to="/games/rocketGame" onClick={() => click4()}><div className='rocket game'></div></Link>
    </div>
}

export default Home;