import React, { useState } from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from './UserSlice'
import { v4 as uuidv4 } from 'uuid'
const Adduser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [values, setValues] = useState({
    name: '',
    email: '',
  })

  const handelAddUsers = () => {
    setValues({ name: '', email: '' })
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    )
    console.log(values)
    navigate('/')
  }
  return (
    <div className="mt-10 mx-w-xl mx-auto">
      <TextField
        label="name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'jhon Doe' }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'jhonDoe@gmail.com' }}
      />
      <Button onClick={handelAddUsers}>submit</Button>
    </div>
  )
}

export default Adduser
