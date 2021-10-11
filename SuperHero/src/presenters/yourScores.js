import React, {useState, useEffect} from 'react';
import fire from '../util/firebase';
import ScoreView from '../view/ScoreView';

const YourScores = (props) => {
    const {
        s
    } = props;
    
    const [score,] = useState(s);
    const [scoreList, setScoreList] = useState();

    useEffect(() => {
      let isSubscribed = true;
      const user = fire.auth().currentUser;
      const dbref = fire.database().ref(`all_scores/${user.uid}`);

      //get scoreList
      if(isSubscribed){
        dbref.on("value", snapshot => {
        const scores = snapshot.val();
        const scoreArr = [];
        for (let id in scores) {
          scoreArr.push({ id, ...scores[id] });
        }
        setScoreList(scoreArr);
        });
      }

     // createScore(score);
      if(score){
        const sc = {
          score: score,
        };

        dbref.push(sc);
      }

      return () => isSubscribed = false;
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <div className="scoreBoard">
            <ScoreView scoreList={scoreList}/>
        </div>
    );
}

export default YourScores;