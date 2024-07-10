import React,{useState} from 'react'
import Navbar from './Navbar'
import Input from './Input'

function Mainpage() {
  
  const [mode, setmode] = useState("light")
  const [innerstyle, setinnerstyle] = useState()

  function modeset(){

    if(mode === "dark"){
      document.body.style.backgroundColor="rgb(235, 235, 235)"
      setmode("light") 

    }else{
      document.body.style.backgroundColor="grey"
      setmode("dark")
    }
    mode === "dark" ? setinnerstyle({color:"black",backgroundColor: "rgb(235, 235, 235)"}):setinnerstyle({color:"white",backgroundColor: "grey"}) 
  }
  return (
   <>
   <div className='contenar'>
   <Navbar mode={mode} modeset={modeset} innerstyle={innerstyle}/>
   <Input innerstyle={innerstyle}/>
   </div>
   </>
  )
}

export default Mainpage