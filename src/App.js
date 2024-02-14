import logo from './logo.svg';
import './App.css';
import { isValidElement, useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  
  // console.log("firstName : " + firstName);
  // console.log("lastName : " + lastName);

  // function firstNamechangeHandler(event){
  //   setFirstName(event.target.value);
  //   // console.log(event.target.value);
  // }

  // function lastNamechangeHandler(event){
  //   setlastName(event.target.value);
  //   // console.log(event.target.value);
  // }

  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", comments:"", isVisible:true});

  console.log(formData);
  
  function changeHandler(event)
  {
    setFormData(prevFormData => {
      return {
        ...prevFormData, [event.target.name]:event.target.value
      }
    })
  }

  return (
    <div className="App">
      <form>
        <input type='text' 
        placeholder='first name' 
        onChange={changeHandler} 
        name='firstName'
        value={formData.firstName}/>

        <br/><br/>

        <input type='text' 
        placeholder='last name' 
        onChange={changeHandler} 
        name='lastName' v
        alue={formData.lastName}/>

        <br/><br/>

        <input type='email' 
        placeholder='your email' 
        onChange={changeHandler} 
        name='email' 
        value={formData.email}/>

        <br/><br/>

        <textarea
          placeholder='enter your comments here'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />

        <br/><br/>

        <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          value={formData.isVisible}
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I Visible ?</label>

      </form>
    </div>
  );
}

export default App;
