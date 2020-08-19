import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';

import Form from './Form'

//intializing dummy data

const initialTeamateList = [
  {
    id: uuid(),
    username: 'ed',
    email: 'me@email.com',
    role: 'student'
  }
]

//initializing empty strings

const initialFormValues = {
  username: '',
  email: '',
  role: ''
}


function App() {
  //sets state to empty array. dummy data is an array
  const [teamates, setTeamates] = useState([])


  //holds original values of initial form
  const [formValues, setFormValues] = useState(initialFormValues)


  //used with onChange handler. copies original and then overides with new inputs
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  //used with onSubmit handler
  const submitForm = () => {
    //new teamate receives values from updateForm that's used in onChange
    //when submit event happens, teamate (an object) is added to the front of the list
    const teamate = {
      id: uuid(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    setTeamates([teamate, ...teamates])
    setFormValues(initialFormValues)
  }

  //on first render, only initial list appears
  //when submitForm triggers, it adds to the list, renders again, and new item should be added to list
  useEffect(() => {
    setTeamates(initialTeamateList)
  }, [])

  const onChange = e => {
    const { name, value } = e.target
    updateForm(name, value)
  }

  const onSubmit = e => {
    e.preventDefault()
    submitForm() //sets username with setUserName setting function
  }

  return (
    <div className="App">

      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        updateForm={updateForm}
        formValues={formValues}
      />

      { //renders what each item in the list looks like
        teamates.map((teamate) =>
          <div key={teamate.id}>
            <h2>{teamate.username}</h2>
            <p>{teamate.email}</p>
            <p>{teamate.role}</p>
          </div>
        )
      }
    </div >
  );
}

export default App;
