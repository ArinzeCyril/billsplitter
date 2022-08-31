import { useState } from 'react';
import Calculations from './calculations'
import ResultDisplay from './resultDisplay'

export default function Body() {
    const [value, setValue] = useState('') //bill amount
    const [tipA, setTipA] = useState('') //tip amount
    const [peopleNo, setPeopleNo] = useState('') //number of people
    const [tip, setTip] = useState('') //tip percentage

  return (
    <div className='body'>
        <Calculations 
            valueA={value}
            setValueA={setValue}
            tipA={tipA}
            setTipA={setTipA}
            peopleNo={peopleNo}
            setPeopleNo={setPeopleNo}
            tip={tip}
            setTip={setTip}
        />
        <ResultDisplay 
            valueA={value}
            setValueA={setValue}
            tipA={tipA}
            setTipA={setTipA}
            peopleNo={peopleNo}
            setPeopleNo={setPeopleNo}
            tip={tip}
            setTip={setTip}
        />
    </div>
  )
}
