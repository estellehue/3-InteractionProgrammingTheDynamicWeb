import React, { useState } from 'react';
import CharacterView from '../view/CharacterView';
import { Redirect } from 'react-router-dom';
import loading from '../pictures/superLoading.gif';
import notExist from '../pictures/notExistHeroes.gif';

const Character = (props) => {
  const {
    characters,
    handleOnSubmit,
    searchVal,
    handleOnChange
  } = props;

  const [quizstarted, setQuizstarted] = useState(false);
  const [id, setId] = useState("0");
  
  function getCharacter() {
    if (characters) {
      return characters.length > 0 &&
        characters.map((character) => {
          return <CharacterView key={character.id} {...character} startquiz={startQuiz} />
        })
    }
    else return <div className="noFoundMatch">
      <h1>No match found .. Hero might not exist yet..</h1>
      <img src={notExist} alt="" />
    </div>
  }


function startQuiz(ids) {
  setQuizstarted(true);
  setId(ids);
}

    if(quizstarted) return (
      <Redirect to={"/quizitem/" + id}/>
    );
    else return (
      <>
        <header><h1>Choose SuperCharacter</h1>
          <form onSubmit={handleOnSubmit}>
            <input
              className="search"
              type="search"
              placeholder="Search..."
              onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = 'Search...'}
              value={searchVal}
              onChange={handleOnChange} />
          </form>
        </header>
        <div className="character-container">
          {characters && characters.length < 1 && <h1 className="loading"><img src={loading} alt="Loading..."/></h1>}
          {getCharacter()}
        </div>
      </>)
    }

export default Character;
