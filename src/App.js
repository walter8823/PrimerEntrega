import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './componentes/main';
import RickAndMorty from './componentes/rick-and-morty';
import ModalBasico from './componentes/modal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path ="/modal" element ={<ModalBasico/>} />
        <Route path="/rym" element={<RickAndMorty />} />
      </Routes>
    </Router>
  );
}

export default App;