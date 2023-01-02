import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './component/MENU/Menu'
import Header from './component/HEADER/Header'
import Content from './component/CONTENT/Content'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);
  // set id
  const [id, setId] = useState(null);
  const [throne, setThrone] = useState(null);
  useEffect(() => {
    (async() => {
      const getData = await fetch('https://thronesapi.com/api/v2/Characters')
      // console.log(getData)
      const result = await getData.json();
      
      setData(result || []);

    })()
  }, []);
  useEffect(() => {
    (async() => {
      const getGameId = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      // console.log(getGameId);
      if(!getGameId.ok){
        setThrone(null)
      }else{

        const result = await getGameId.json();
        setThrone(result)
      }
    })()
  }, [id]);
  return (
    <>
    <Header/>
    <Menu data={data} setId={setId}/>
    <Content throne={throne}/>
    </>

  )
}

export default App
