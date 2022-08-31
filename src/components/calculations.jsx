import { useState } from 'react';
import TipPercent from './tipPercent';
import TipAmount from './tipAmount'

export default function Calculations({valueA, setValueA, tipA, setTipA, tip, setTip, peopleNo, setPeopleNo}) {
    const [isPercent, setIsPercent] = useState(false)
    
    //handles 'tip amount' button click
    const handleClick1 = (e) => {
        setIsPercent(false)
        setTip('')
    }
    
    //handles 'tip percent' button click
    const handleClick2 = (e) => {
        setIsPercent(true)
        setTipA('')
    }

    //handles 'bill' change
    const handleChange = (e) => {
        return setValueA(e.target.value)
    }

    //handles 'number of people' change
    const handlePplChange = (e) => {
        return setPeopleNo(e.target.value)
    }

  return (
    <>
        <>
            <h3>Bill</h3>
            <div className='input'>
                <i className='fa-solid fa-dollar-sign '></i>
                <input 
                    className='bill-input' 
                    value={valueA}
                    onChange={handleChange}
                    type="number" 
                    placeholder='0.0' 
                />
            </div>
        </>

        <input onClick={handleClick1} className='tips-btn mgn-right' type="button" value='Tip Amount' />
        <input onClick={handleClick2} className='tips-btn' type="button" value='Tip Percent' />

        {isPercent ? 
            <TipPercent tip={tip} setTip={setTip} />
            : 
            <TipAmount tipA={tipA} setTipA={setTipA}/> 
        }

        <>
            <h3>Number of People</h3>
            <div className='input'>
                <i className='fa-solid fa-user'></i>
                <input
                    className='people-no-input' 
                    type="text" 
                    value={peopleNo}
                    onChange={handlePplChange}
                    placeholder='0' 
                />
            </div>
        </>
    </>
  )
}
