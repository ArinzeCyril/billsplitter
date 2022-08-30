import { useState } from 'react';
import TipPercent from './tipPercent';
import TipAmount from './tipAmount'

export default function Calculations({valueA, setValue, tipA, setTipA, tip, setTip, peopleNo, setPeopleNo}) {
    const [isPercent, setIsPercent] = useState(false)
    
    const handleClick1 = (e) => {
        setIsPercent(false)
    }

    const handleClick2 = (e) => {
        setIsPercent(true)
    }

    const handleChange = (e) => {
        return setValue(e.target.value)
    }

    const handlePplChange = (e) => {
        return setPeopleNo(e.target.value)
    }

  return (
    <>
        <>
            <h3>Bill</h3>
            <input 
                className='bill-input' 
                value={valueA}
                onChange={handleChange}
                type="number" 
                placeholder='0.0' 
            />
        </>

        <input onClick={handleClick1} className='tips-btn mgn-right' type="button" value='Tip Amount' />
        <input onClick={handleClick2} className='tips-btn' type="button" value='Tip Percent' />

        {isPercent? 
            <TipPercent tip={tip} setTip={setTip} />
            : 
            <TipAmount tipA={tipA} setTipA={setTipA}/> 
        }

        

        <>
            <h3>Number of People</h3>
            <input 
                className='people-no-input' 
                type="number" 
                value={peopleNo}
                onChange={handlePplChange}
                placeholder='0' 
            />
        </>
    </>
  )
}
