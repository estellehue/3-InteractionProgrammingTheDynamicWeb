import React, { useState, useEffect } from 'react';
import SuperheroSource from './SuperheroSource';
import Character from '../presenters/Character';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    SuperheroSource.getSuperheroByName("a").then(data=> {if(isSubscribed) setCharacters(data.results)});
    return () => isSubscribed = false;
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchVal) {
      SuperheroSource.getSuperheroByName(searchVal).then(data=> setCharacters(data.results));

      setSearchVal("");
    }
  };

  const handleOnChange = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <>
      <Character 
        characters={characters}
        handleOnSubmit={handleOnSubmit}
        searchVal={searchVal}
        handleOnChange={handleOnChange}
      />
    </>);
};

export default CharacterList;