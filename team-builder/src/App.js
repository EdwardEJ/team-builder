import React, { useState, useEffect } from 'react';
import './App.css';

const initialFormValue = [
  {
    id: 1,
    username: 'ed',
  }
]

function App() {
  const [teamates, setTeamates] = useState(initialFormValue)

  const [username, setUserName] = useState('')

  const [userNameValue, setUserNameValue] = useState('') //used for storing event target


  const onChange = e => {
    setUserNameValue(e.target.value) //sets userNameValue with setUserNameValue setter function
  }

  const onSubmit = e => {
    e.preventDefault()
    setUserName(userNameValue) //sets username with setUserName setting function
  }

  // useEffect(() => {
  //   setTeamates({ ...teamates, username })
  // })

  console.log(teamates)

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          value={userNameValue}
          type='text'
          placeholder='username'
          onChange={onChange}
        />
      </form>

      {
        teamates.map((teamate) =>
          <li key={teamate.id}>{teamate}</li>
        )
      }
    </div>
  );
}

export default App;
