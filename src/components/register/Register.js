import React, {useState} from 'react'
import axios from 'axios'


const Register = props => {
    const credentials = {
        username: "",
        password1: "",
        password2: ""
    }

    const [register, setRegister] = useState(credentials)

    const changeHandler = e => {
        e.persist();
        setRegister({
            ...register,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios
        .post('https://web22washouts.herokuapp.com/api/registration/', register)
        .then(res => {
            localStorage.setItem('token', res.data.key)
            console.log(res.data.key)
            console.log(res)
            props.history.push('/login')
        })
        .catch(res => {
            console.log(res)
        })
    }

    return (
        <div>
            <div>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
            <input type='text' name='username' placeholder="Username" onChange={changeHandler} value={register.username}/>
            <input type='password' name='password1' placeholder="Password" onChange={changeHandler} value={register.password1}/>
            <input type='password' name='password2' placeholder="Type that Password Again, Please" onChange={changeHandler} value={register.password2}/>
            <button>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Register