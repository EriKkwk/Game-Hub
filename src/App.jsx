import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layouts from './components/Layouts';
import TicTacToe from './pages/Tic Tac Toe/Game';
import BigSquare from './pages/Squares/BigSquare';
import RockSpissorsPaper from './pages/RPS/RockSpissorsPaper'
import RocketGame from './pages/RocketGame/RocketGame';

function App() {

  return <HashRouter>
    <Routes>
      <Route path="/erikkwk.github.io" element={<Layouts />}>
        <Route path="/erikkwk.github.io" element={<Home />}/>
        <Route path="/games/ticTacToe" element={<TicTacToe />} />
        <Route path="/games/squares" element={<BigSquare />} />
        <Route path="/games/rockSpissorsPaperGame" element={<RockSpissorsPaper />} />
        <Route path="/games/rocketGame" element={<RocketGame />} />
      </Route>
    </Routes>
  </HashRouter>
}

export default App;