import React, { useEffect } from 'react';
import Sketch from 'react-p5';

import {connect} from 'react-redux';
import {getData, getInit} from '../../store/actions';

let playerUser;

function MapComponent(props) {
    const {mapData, playerData, initInfo, isFetching, error, getData, getInit} = props
    
    useEffect(() => {
        getData()
        getInit()
    }, [getData, getInit])

    console.log(initInfo)

    let preload = p5 => {
        playerUser = p5.loadImage('player.png');
      };
    
    let setup = (p5, parentRef) => {
        p5.createCanvas(600, 600).parent(parentRef)
        p5.background(0, 0, 0, 15);
        p5.noStroke()
        p5.fill(125, 195, 255)
    };

    let draw = p5 => {
        mapData.forEach(block => {
            p5.square(block.x * 60 + 15,600 - block.y * 60 - 45, 30);
            if (block.n_to) {
              p5.rect(block.x * 60 + 15,600 - (block.y + 1) * 60 - 30, 30, 50);
            }
            if (block.e_to) {
              p5.rect(block.x * 60 + 30, 600 - block.y * 60 - 45, 50, 30);
            }
          });
          p5.image(playerUser, initInfo.x * 60 + 10, 600 - initInfo.y * 60 - 50, 40, 40);
        };
      
        return <div className='mapCanvas'> <Sketch setup={setup} draw={draw} preload={preload}/> </div>;
}

const mapStateToProps = state => {
    return {
       mapData: state.mapData,
       playerData: state.playerData,
       initInfo: state.initInfo,
       isFetching: state.isFetching,
       error: state.error
    }
}
export default connect(mapStateToProps, {getData, getInit})(MapComponent)
