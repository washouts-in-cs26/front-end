import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import axios from 'axios'

function Map() {
    const [ map, setMap ] = useState([]);
    
    useEffect(() => {
        axios.get('https://web22washouts.herokuapp.com/api/adv/map')
        .then(res => {
            console.log([res.data])
            setMap(res.data)
        })
    }, [])
    console.log(map)
    
    let setup = (p5, parentRef) => {
        p5.createCanvas(600, 600).parent(parentRef)
    p5.background(0, 0, 0, 0.5);
        p5.noStroke()
        p5.fill(125, 195, 255)
    };

    let draw = p5 => {
        map.forEach(block => {
            p5.square(block.x * 60 + 15,600 - block.y * 60 - 45, 30);
            if (block.n_to) {
              p5.rect(block.x * 60 + 15,600 - (block.y + 1) * 60 - 30, 30, 50);
            }
            if (block.e_to) {
              p5.rect(block.x * 60 + 30, 600 - block.y * 60 - 45, 50, 30);
            }
          });
        //   p5.image(car, player.x * 60 + 10, 600 - player.y * 60 - 50, 40, 40);
        };
      
        return <div className='mapCanvas'> <Sketch setup={setup} draw={draw} /> </div>;
}

export default Map
