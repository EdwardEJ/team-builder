import React from 'react'

export default function Form(props) {
  const { onSubmit, onChange, formValues } = props;

  return (
    <form onSubmit={onSubmit}>
      <input
        name='username'
        onChange={onChange}
        value={formValues.username}
        type='text'
        placeholder='username'
      />

      <input
        name='email'
        onChange={onChange}
        value={formValues.email}
        type='email'
        placeholder='email'
      />

      <select onChange={onChange} value={formValues.role} name='role'>
        <option value=''>-- Select A Role --</option>
        <option value='student'>Student</option>
        <option value='team_lead'>Team Lead</option>
        <option value='alumni'>Alumni</option>
      </select>
      <button disabled={!formValues.username || !formValues.email || !formValues.role ? true : false}>Submit</button>
    </form>
  )

}
