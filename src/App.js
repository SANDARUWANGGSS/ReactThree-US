// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Fragment, useState } from 'react';
import Unit from './Components/Unit';
const App = () =>
{
  const [imageUrl,setImageUrl] = useState('')
  const [name,setName] = useState('')
  const [city,setCity] = useState('')
  const [position,setPosition] = useState('')

  const [myData,setMyData] = useState([])
  // console.log(myData)

  return <div className="main_container">
    <div className="main_left">
    <input type='text' value={imageUrl} onChange={(e)=>{
      e.preventDefault()
      setImageUrl(e.target.value)
    }}/>
    <input type='text' value={name} onChange={(e)=>{
      e.preventDefault()
      setName(e.target.value)
    }}/>
    <input type='text' value={city} onChange={(e)=>{
      e.preventDefault()
      setCity(e.target.value)
    }}/>
    <input type='text' value={position} onChange={(e)=>{
      e.preventDefault()
      setPosition(e.target.value)
    }}/>
    <button onClick={()=>{
      setMyData(pre=>{
        return[...pre,{
          Image:imageUrl,
          name,
          city,
          position
        }]
      })
      console.log(
        imageUrl,
        name,
        city,
        position
      )

      setImageUrl((pre)=>{
        if(pre.length>0)
        {
          return ''
        }
        else{
          return pre;
        }
      })

      setName((pre)=>{
        if(pre.length>0)
        {
          return ''
        }
        else{
          return pre;
        }
      })

      setCity((pre)=>{
        if(pre.length>0)
        {
          return ''
        }
        else{
          return pre;
        }
      })

      setPosition((pre)=>{
        if(pre.length>0)
        {
          return ''
        }
        else{
          return pre;
        }
      })
    }}>Submit</button>
    </div>
    <div className="main_right">
      {myData?.map(({Image,name,city,position},index)=><Unit
      Image={Image}
      name={name}
      city={city}
      position={position}
      key={index}
      />
      )}
    </div>
  </div>
}

export default App;