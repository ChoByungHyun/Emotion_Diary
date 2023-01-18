import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';

//Components
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() {

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  return (
    <BrowserRouter>
      <div className="App">

        <MyHeader headtext={"App"}
          leftChild={
            <MyButton text={'왼쪽버튼'} onClick={() => alert("왼쪽 클릭")} />
          }
          rightChild={
            <MyButton text={'오른쪽버튼'} onClick={() => alert("오른쪽 클릭")} />
          }
        />

        <h1>app.js</h1>

        <img src={process.env.PUBLIC_URL + '/assets/emotion1.png'}></img>
        <img src={process.env.PUBLIC_URL + '/assets/emotion2.png'}></img>
        <img src={process.env.PUBLIC_URL + '/assets/emotion3.png'}></img>
        <img src={process.env.PUBLIC_URL + '/assets/emotion4.png'}></img>
        <img src={process.env.PUBLIC_URL + '/assets/emotion5.png'}></img>

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼")}
          type={"positive"}></MyButton>

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼")}
          type={"nagative"}></MyButton>

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼")}
          type={"default"}></MyButton>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/new' element={<New />}></Route>
          <Route path='/edit' element={<Edit />}></Route>
          <Route path='/diary/:id' element={<Diary />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
