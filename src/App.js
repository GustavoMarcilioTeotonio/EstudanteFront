import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuscarTodosEstudantes from './components/BuscarTodosEstudantes';
import SalvarEstudante from './components/SalvarEstudante';
import AtualizarEstudante from './components/AtualizarEstudante';

const App = () => {
  return (
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<BuscarTodosEstudantes />} />
            <Route path="/estudantes" element={<BuscarTodosEstudantes />} />
            <Route path="/add-estudante" element={<SalvarEstudante />} />
            <Route path="/update-estudante/:id" element={<AtualizarEstudante />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;