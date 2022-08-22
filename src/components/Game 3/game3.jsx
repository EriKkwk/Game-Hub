import './game3.css'

function Game3(){
    return <div className='rsp-container'>
        <div className='heading'>
            <span className="Rock">Rock</span>
            <span className='Scissors'>Scissors</span>
            <span className='Paper'>Paper</span>
        </div>
        <div className="scoreContainer">
            <span className='user'>User : </span>
            <span className='results'>Results</span>
            <span className='bob'>Bob : </span>
        </div>
        <div className="choice">
            <img src="../assets/rock.jpeg"/>
        </div>
    </div>
}

export default Game3;