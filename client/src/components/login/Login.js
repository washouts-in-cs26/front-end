import React, {useState} from 'react';
import axios from 'axios';

const Login = props => {
    const credentials = {
        username: "",
        password: "",
    }

    const [login, setLogin] = useState(credentials)

    const changeHandler = e => {
        e.persist()
        setLogin({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault
        // axios goes here
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type='text' name='username' placeholder='Username' onChange={changeHandler} />
                <input type='password' name='password' placeholder='Password' onChange={changeHandler} />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login