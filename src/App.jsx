import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layouts from './components/Layouts';
import TicTacToe from './pages/Tic Tac Toe/Game';
import BigSquare from './pages/Squares/BigSquare';
import RockSpissorsPaper from './pages/RPS/RockSpissorsPaper'
import RocketGame from './pages/RocketGame/RocketGame';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Home />}/>
        <Route path="/games/ticTacToe" element={<TicTacToe />} />
        <Route path="/games/squares" element={<BigSquare />} />
        <Route path="/games/rockSpissorsPaperGame" element={<RockSpissorsPaper />} />
        <Route path="/games/rocketGame" element={<RocketGame />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;