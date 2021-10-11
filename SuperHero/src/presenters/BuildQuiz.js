import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';
import SuperheroSource from "../js/SuperheroSource";
import { useParams } from 'react-router-dom';
import loading from '../pictures/superLoading.gif';

const Item = () => {
  const {id} = useParams();

  function generateRandom(min, max, no1, no2) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === no1|| num === no2) ? generateRandom(min, max) : num;
  }

  const [item, setItem] = useState(null);
  const [wrongItem1, setWrongItem1] = useState(null);
  const [wrongItem2, setWrongItem2] = useState(null);

  const rand1 =  generateRandom(1, 731, id, 0);
  const rand2 =  generateRandom(1, 731, id, rand1);

    useEffect(() => {
      SuperheroSource.getSuperheroById(id).then(data=>setItem(data)).catch(err=>console.log(err));
      SuperheroSource.getSuperheroById(rand1).then(data=>setWrongItem1(data)).catch(err=>console.log(err));
      SuperheroSource.getSuperheroById(rand2).then(data=>setWrongItem2(data)).catch(err=>console.log(err));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if(item && wrongItem1 && wrongItem2)
    { 
      return <Quiz item={item} wrongItem1={wrongItem1} wrongItem2={wrongItem2}/>
    }

    return(
      <h1 className="loading"><img src={loading} alt="Loading..."/></h1>
    )
}
export default Item;