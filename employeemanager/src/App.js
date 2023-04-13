import './App.css';
import StartPage from './Pages/StartPage';
import {Routes, Route} from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';

function App() {
  function bruh(){
    console.log("bruh")
  }
  return (
    <div className="App">
      <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<StartPage />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Test" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
