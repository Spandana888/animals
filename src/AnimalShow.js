import React from 'react';
import "./AnimalShow.css";
import bird from './svg/bird.svg'
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import { useState } from 'react';


const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({type}) {
  const[likes, setLikes] = useState(0);
  const handleLikes = () =>{
    setLikes(likes+1);
  };

  return (
    <div className="animal-show">
        <img alt="animal" src={svgMap[type]} className="animal" />
        <img alt="heart" src={heart} onClick={handleLikes} className="heart" />
        <span>{likes} likes </span>
    </div>
  )
}

export default AnimalShow