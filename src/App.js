import Header from "./Components/Header";
import {BrowserRouter as Router, Switch, Route, useHistory, Link} from "react-router-dom";
import Start from "./Components/Start";
import './App.scss';
import { useState } from "react";
import One from "./Components/Levels/Level1/One";
import Two from "./Components/Levels/Level2/Two";
import Three from "./Components/Levels/Three";

function App() {
  const [inventory, setInventory] = useState({
    slot1: '',
    slot2: '',
    slot3: '',
    slot4: '',
  })

  const answers = ['one','two','three','four']

  const history = useHistory();
  
    // Just putting this to remember. When we implment arrow navigation functions, i think using the highest_level
  // number makes the most sense. Each level will know it's own number, and we can use the highest_level thing
  // as a like a way of telling whether levels are unlocked.
  let highest_level = 1;
  // window.currentLevelNumber = 0;
  const [currentLevelNumber, setCurrentLevelNumber] = useState(parseInt(localStorage.getItem('currentLevelNumber')));

  // Think I have t0 use local storage. This window solution works but we need to store more than just currentLevelNumber.

  function addItemToInventory(item_string) {
    if      (inventory.slot1 === ''){setInventory({...inventory, 'slot1': item_string})}
    else if (inventory.slot2 === ''){setInventory({...inventory, 'slot2': item_string})}
    else if (inventory.slot3 === ''){setInventory({...inventory, 'slot3': item_string})}
    else if (inventory.slot4 === ''){setInventory({...inventory, 'slot4': item_string})}

    localStorage.setItem('inventory', inventory);
  }

  const checkAnswer = (answer) => {
    var newLevelNumber = currentLevelNumber + 1;
    if (answer === getAnswerForLevel(currentLevelNumber)){
      setCurrentLevelNumber(newLevelNumber);
      localStorage.setItem('currentLevelNumber', newLevelNumber);
      history.push(answer);
    }
  }

  const goBack = () => {
    history.push(getAnswerForLevel(currentLevelNumber - 2));
    var newLevelNumber = currentLevelNumber - 1;
    if (currentLevelNumber > 1){
      setCurrentLevelNumber(newLevelNumber);
      localStorage.setItem('currentLevelNumber', newLevelNumber);
    }
  }

  const goForward = () => {
    history.push(getAnswerForLevel(currentLevelNumber));
    var newLevelNumber = currentLevelNumber + 1;
    if (currentLevelNumber < answers.length){
      setCurrentLevelNumber(newLevelNumber);
      localStorage.setItem('currentLevelNumber', newLevelNumber);
    }
  }

  const startGame = () => {
    history.push('one');
    localStorage.setItem('currentLevelNumber', 1);
  }

  function getAnswerForLevel(number){
    return answers[number];
  }
  
  return (
    <div className="App">
        <Header inventory={inventory} checkAnswer={checkAnswer} goBack={goBack} goForward={goForward}/>
        <Switch>
          <Route exact path="/"><Start startGame={startGame}/></Route>
          <Route exact path="/one"><One/></Route>
          <Route exact path="/two"><Two/></Route>
          <Route exact path="/three"><Three/></Route>
        </Switch>
    </div>
  );
}

export default App;
