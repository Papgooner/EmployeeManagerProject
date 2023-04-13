import './App.css';
import StartPage from './Pages/StartPage';
import {Routes, Route} from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<StartPage />} />
      <Route path="/HomePage" element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App;
