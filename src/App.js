import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>app.js</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
