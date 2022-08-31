export default function TipAmount({tipA, setTipA}) {

    //handles 'tip amount'change
    const handleChange = (e) => {
        return setTipA(e.target.value)
    }
  
    return (
    <>
        <h3>Tip Amount</h3>
        <div className='input'>
            <i className='fa-solid fa-dollar-sign '></i>
            <input 
                className='tip-amt-input' 
                value={tipA}
                onChange={handleChange}
                type="number" 
                placeholder='0.0' 
            />
        </div>
    </>
  )
}
