import React from 'react';
import './home.css'
import frame1 from '../../images/chest_intro_closed.png'
import frame2 from '../../images/chest_intro_half.png'
import frame3 from '../../images/chest_intro_full.png'
const Home = () => {
    const images = [
        frame1,
        frame2,
        frame3
    ]
    return (
        <div>
            {images.map(image => {
               return <img src={image}/>
            })}
        </div>
    )
}

export default Home