import React from 'react';
import CharacterList from '../js/CharacterModel';
import fire from '../util/firebase';

const Home = () => {

    return (
        <section className="hero">
            <nav>
                <a href="/home" className="welcomePic"> </a>
                <h1 className="knowHero">
                <span> How well do you really Know your Hero?</span>
                <span>     Dare take a Quiz and find out!     </span>
                </h1>
                <button onClick={()=>fire.auth().signOut()}> Logout </button>
            </nav>
            <CharacterList/>
        </section>
    );
};

export default Home;
