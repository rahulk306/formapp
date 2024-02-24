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

  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", comments:"", isVisible:false, mode:"", favCar:""});

  //console.log(formData);
  
  function changeHandler(event)
  {
    const {name, value, checked, type} = event.target
    //console.log(checked);
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    // printint data
    console.log("finally printing the entire form data")
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text' 
        placeholder='first name' 
        onChange={changeHandler} 
        name='firstName'
        value={formData.firstName}/>

        <br/><br/>

        <input type='text' 
        placeholder='last name' 
        onChange={changeHandler} 
        name='lastName' 
        value={formData.lastName}/>

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

        <br/><br/>

        <fieldset>
          <legend>Mode Kya hai tumhara</legend>
          <input
            type = "radio"
            onChange={changeHandler}
            name = "mode"
            value = "Online-mode"
            id = "Online-mode"
            checked = {formData.mode === "Online-mode"}
          />
          <label htmlFor='Online-mode'>Online Mode</label>

          <br/><br/>

          <input
            type = "radio"
            onChange={changeHandler}
            name = "mode"
            value = "Offline-mode"
            id = "Offline-mode"
            checked = {formData.mode === "Offline-mode"}
          />
          <label htmlFor='Offline-mode'>Offline Mode</label>
        </fieldset>

        <br/><br/>

        <label htmlFor='favCar'>Select your favourite Car : </label>
        <select
          name = "favCar"
          id = "favCar"
          value = {formData.favCar}
          onChange={changeHandler}
        >
          <option value = "Scorpio"> Scorpio </option>
          <option value = "Fortner"> Fortner </option>
          <option value = "Thar"> Thar </option>
          <option value = "Defender"> Defender </option>
          <option value = "Legender"> Legender </option>

        </select>

        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
