import './App.css'
import { sum } from './utils.js'
import LuckyNum from './LuckyNum.jsx'
import Box from '../Box.jsx';
import BoxGrid from '../BoxGrid.jsx';

function lessThan4(dice) {
  return sum(dice) <4;
}

function allSameValue(dice){
  return dice.every((v) => v === dice[0]);
}

function App() {

  return (
    <>
      <BoxGrid />



      {/* <LuckyNum winCheck={allSameValue} numDice={3} color="red" title='Roll the same number'/>
      <LuckyNum winCheck={lessThan4} color="red" title='Roll less than 4'/> */}
    </>
  )
}

export default App
