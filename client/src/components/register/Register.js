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
            [e.target.name] : e.target.event
        })
    }

    const submitHandler = e => {
        e.preventDefault
        // axios code
    }

    return (
        <div>
            <h1>Register</h1>
            <form>
            <input type='text' name='username' placeholder="Username" onChange={changeHandler} value={register.username}/>
                <input type='password' name='password1' placeholder="Password" onChange={changeHandler} value={register.password1}/>
                <input type='password' name='password2' placeholder="Type that Password Again, Please" onChange={changeHandler} value={register.password2}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register