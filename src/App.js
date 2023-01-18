import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useReducer, useRef } from 'react';

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';

//Components
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';


const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE': {
      newState = [action.data, ...state]
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetID);
      break;
    }
    case 'EDIT': {
      newState =
        state.map((it) =>
          it.id === action.data.id ? { ...action.data } : it)
      break;
    }
    default:
      return state;
  }
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  {/* 
    const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  
  <img src={process.env.PUBLIC_URL + '/assets/emotion1.png'}></img>
        <img src={process.env.PUBLIC_URL + '/assets/emotion2.png'}></img>
        <img src={process.env.PUBLIC_URL + '/assets/emotion3.png'}></img>
        <img src={process.env.PUBLIC_URL + '/assets/emotion4.png'}></img>
        <img src={process.env.PUBLIC_URL + '/assets/emotion5.png'}></img> */}

  const [data, dispatch] = useReducer(reducer, []);
  const dataID = useRef(0);

  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataID.current,
        date: new Date(date).getTime(),
        content,
        emotion,

      }
    })
    dataID.current += 1;
  }

  //REMOVE
  const OnRemove = (targetID) => {
    dispatch({ type: "REMOVE", targetID });
  }
  //EDIT
  const onEdit = (targetID, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetID,
        date: new Date(date).getTime(),
        content,
        emotion,
      }
    })
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          OnRemove,
        }}>
        <BrowserRouter>
          <div className='App'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/new' element={<New />}></Route>
              <Route path='/edit' element={<Edit />}></Route>
              <Route path='/diary/:id' element={<Diary />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
