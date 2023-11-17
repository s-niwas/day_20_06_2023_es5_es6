import logo from './logo.svg';
import './App.css';
import React,{useState , useMemo,useContext,createContext,useEffect} from 'react';

export const ThemeContext = React.createContext()
export default function App() {
  
  
  //useContext 
    const [darkTheme , setDarkTheme]=useState(true) //if darktheme then true otherwise false
    function togTheme(){
      setDarkTheme(prevDarkTheme =>!prevDarkTheme)
    }

  //useState
  const [count,setCount]=useState(0)
  const [count_effect,setcount_effect]=useState(0)
  const [theme,setTheme]=useState('blue')

  //useEffect
  useEffect(() => {
    setTimeout(() => {
      setcount_effect((count_effect) => count_effect + 1);
    }, 1000);
  },[theme]);


  //useMemo
  const doublenumber=useMemo(()=>{
    return slowfunc(count)
  },[count]);
  function decrementby2(){
    setCount(prevCount => prevCount-1)
    setCount(prevCount => prevCount-1)
    setTheme('red')
  }
  return (
    <div className="App">
      <br></br>
      <span>{count}</span><br></br>
      <span>{theme}</span><br></br>
      <span>{doublenumber}</span>
      <br></br>
      <button onClick={()=>setCount(count+1)}>Add score</button><br></br><br></br>
      <button onClick={()=>setCount(count-1)}>Subract score</button><br></br><br></br>
      <button onClick={()=>setcount_effect()}>useEffect</button><br></br><br></br>
      <span>{count_effect}</span><br></br><br></br>
      <button onClick={decrementby2}>Decrement score by 2 (-2)</button><br></br><br></br>
      <button onClick={()=>setTheme('white')}>Theme</button><br></br><br></br>

      <ThemeContext.Provider value={darkTheme}>
       <button onClick={togTheme}>Using Context</button>
      </ThemeContext.Provider>
    </div>
  );
}
function slowfunc(num){
  for(let i=0;i<=10000000;i++){}
  return num*num;
}