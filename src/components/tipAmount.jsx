export default function TipAmount({tipA, setTipA}) {

    const handleChange = (e) => {
        return setTipA(e.target.value)
    }
  
    return (
    <>
        <h3>Tip Amount</h3>
        <input 
            className='tip-amt-input' 
            value={tipA}
            onChange={handleChange}
            type="number" 
            placeholder='0.0' 
        />
    </>
  )
}
