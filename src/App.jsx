import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layouts from './components/Layouts';
import TicTacToe from './pages/Tic Tac Toe/TicTacToe';
import Game2 from './pages/game2/game2'
import RockSpissorsPaper from './pages/RPS/RockSpissorsPaper'
import RocketGame from './pages/RocketGame/RocketGame';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Home />}/>
        <Route path="/games/ticTacToe" element={<TicTacToe />} />
        <Route path="/games/game2" element={<Game2 />} />
        <Route path="/games/rockSpissorsPaperGame" element={<RockSpissorsPaper />} />
        <Route path="/games/rocketGame" element={<RocketGame />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;