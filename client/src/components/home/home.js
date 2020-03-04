import React, {useEffect} from 'react';
import axios from 'axios'
import './home.css'


const Home = () => {

    useEffect(() => {
        axios.get('https://web22washouts.herokuapp.com/api/adv/map')
        .then(res => {
            console.log(res.data)
        })
    }, [])
 
    return (
        <div>
            <img src="https://media.giphy.com/media/ehaU0nwrUjlprO0uKg/giphy.gif"></img>
        </div>
    )
}

export default Home