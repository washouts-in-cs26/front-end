import React, {useState} from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import axios from 'axios';

const Login = props => {
    const credentials = {
        username: '',
        password: ''
    }

    const [login, setLogin] = useState(credentials)

    const changeHandler = e => {
        e.persist()
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('https://web22washouts.herokuapp.com/api/login/', login)
        .then(res => {
            localStorage.setItem('Token', res.data.key)
            props.history.push('/game'); // need home component
            console.log("Yay!!!")
            console.log(res.data.key)
        })
        .catch(res=> {
            console.log("No dice", res);
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <input type='text' name='username' placeholder='Username' onChange={changeHandler} />
                <input type='password' name='password' placeholder='Password' onChange={changeHandler} />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login