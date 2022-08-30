import { useState } from 'react';
import Calculations from './calculations'
import ResultDisplay from './resultDisplay'

export default function Body() {
    const [value, setValue] = useState('')
    const [tipA, setTipA] = useState('')
    const [peopleNo, setPeopleNo] = useState('')
    const [tip, setTip] = useState('')

  return (
    <div className='body'>
        <Calculations 
            valueA={value}
            setValue={setValue}
            tipA={tipA}
            setTipA={setTipA}
            peopleNo={peopleNo}
            setPeopleNo={setPeopleNo}
            tip={tip}
            setTip={setTip}
        />
        <ResultDisplay 
            valueA={value}
            setValue={setValue}
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
