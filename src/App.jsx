import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layouts from './components/Layouts';
import XO from './pages/XO/XO';
import Game2 from './pages/game2/game2'
import RockSpissorsPaper from './pages/RPS/RockSpissorsPaper'
import Game4 from './pages/game4/game4';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Home />}/>
        <Route path="/games/XOgame" element={<XO />} />
        <Route path="/games/game2" element={<Game2 />} />
        <Route path="/games/rockSpissorsPaperGame" element={<RockSpissorsPaper />} />
        <Route path="/games/game4" element={<Game4 />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;