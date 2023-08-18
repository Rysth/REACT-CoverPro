import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pendientes" element={<Dashboard />} />
              <Route path="/asignados" element={<Dashboard />} />
              <Route path="/cerrados" element={<Dashboard />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
