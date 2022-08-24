import './RockSpissorsPaper.css'
import { useState, useEffect } from 'react'

function RockSpissorsPaper(){
    const [ userChoice, setUserChoice ] = useState("");
    const [ bobChoice, setBobChoice ] = useState("");
    const choices = ["rock", "scissors", "paper"];
    const winlose = document.getElementById("winlose");

    const crock = () => {
      setUserChoice("rock");
      setBobChoice(choices[Math.floor(Math.random() * choices.length)])
    }
    const cscissors = () => {
      setUserChoice("scissors");
      setBobChoice(choices[Math.floor(Math.random() * choices.length)])
    }
    const cpaper = () => {
      setUserChoice("paper");
      setBobChoice(choices[Math.floor(Math.random() * choices.length)])
    }
    useEffect(() => {
      const choice = userChoice + bobChoice
      if(choice == "rockscissors" || choice == "scissorspaper" || choice == "paperrock"){
        winlose.innerText = "WIN";
      }else if(choice == "rockrock" || choice == "scissorsscissors" || choice == "paperpaper"){
        winlose.innerText = "DRAW";
      }else if(choice == "rockpaper" || choice == "scissorsrock" || choice == "paperscissors"){
        winlose.innerText = "LOSE";
      }
    }, [userChoice,bobChoice])

    return <div className='rsp-container'>
        <div className='heading'>
            <span className="Rock">Rock</span>
            <span className='Scissors'>Scissors</span>
            <span className='Paper'>Paper</span>
        </div>
        <div id='winlose'></div>
        <div className="scoreContainer">
            <span className='user'>User : </span>
            <span className='results'>Results</span>
            <span className='bob'>Bob : </span>
        </div>
        <div className="choice">
            <div className="user-choice">
                User : {userChoice}
            </div>
            <div className="bob-choice">
                Bob : {bobChoice}
            </div>
        </div>
        <div className='btn-container'>
            <button className='rbtn chbtn' onClick={() => crock()}> Rock </button>
            <button className='sbtn chbtn' onClick={() => cscissors()}> Scissors </button>
            <button className='pbtn chbtn' onClick={() => cpaper()}> Paper </button>
        </div>
    </div>
}

export default RockSpissorsPaper;