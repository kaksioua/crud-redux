import React, { useState } from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from './UserSlice'
const EditeUser = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  const navigate = useNavigate()
  const existingUser = users.filter((user) => user.id === params.id)
  const { name, email } = existingUser[0]
  const [values, setValues] = useState({
    name,
    email,
  })

  const handilEditeUser = () => {
    setValues({ name: '', email: '' })
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    )
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
      <Button onClick={handilEditeUser}>Edite</Button>
    </div>
  )
}

export default EditeUser
