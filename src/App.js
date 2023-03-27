import { useState } from 'react';
import './App.css';
import CourseName from './CourseName';
import FirstName from './FirstName';
import LastName from './LastName';
import Returning from './Returning';
import Send from './Send';

function App() {
     const[firstName, setFirstName] = useState(null)
     const handlerFirstName=(value)=>{
        setFirstName(value)
     }
     const[lastName, setLastName] = useState(null)
     const handlerLastName=(value)=>{
      setLastName(value)
   }
     const[courseName, setCourseName]= useState(null)

     const handlerCourseName=(value)=>{
      setCourseName(value);
     }

     const[returning,setReturning] = useState(false)
     const handlerReturning=(value)=>{
      setReturning(value);
     }

  const[send, setSend] = useState(true)

  const handlerClick= (e)=>{
    e.preventDefault()
    setSend(true);

  }

  const handlerSend =(value)=>{
    
    setSend(value)
   
    

  }





  return (
    <div className="App login-page" >
      <div className='form'>
      <FirstName  handlerFirstName={handlerFirstName }/>
      <LastName handlerLastName={handlerLastName}/>
      <CourseName  handlerCourseName={handlerCourseName}/>
      <Returning handlerReturning={handlerReturning}/>
      <Send handlerClick={handlerClick}  handlerSend={handlerSend}/>
      <div>
      {
        send?
       <h2>{firstName}{lastName}{courseName}{returning.toString}</h2>
        :null
      }
      </div>

      
      </div>
     
        
    </div>
    
  );
}

export default App;
