export default function ResultDisplay( {valueA, setValue, tipA, setTipA, peopleNo, setPeopleNo, tip, setTip} ) {
    let tipAmount = "$0.00"
    let totalAmount = "$0.00"
    let total = "$0.00"
    let tips, tipAmt

    if (tipA >= 1) {
        if (valueA >= 1 && peopleNo >= 1) {
            tipAmt = tipA / peopleNo
            tipAmount = `$${tipAmt}`
            let x = valueA / peopleNo
            totalAmount = `$${x + tipAmt}`
            total = `$${parseInt(tipA) + parseInt(valueA)}`
        }
    
    } else {

        if (tip >= 1 && valueA >= 1 && peopleNo >= 1) {
            let x = tip / 100
            let y = x * valueA
            let i = valueA / peopleNo
            tips = y / peopleNo
            tipAmount = `$${tips}`
            totalAmount = `$${i + tips}`
            total = `$${parseInt(y) + parseInt(valueA)}`

        } else if (valueA >= 1 && peopleNo >= 1) {
            let x = valueA / peopleNo
            totalAmount = `$${x}`
            total = `$${parseInt(valueA)}`
        }
        
    }

    const handleClick = () => {
        setValue('')
        setPeopleNo('')
        setTip('')
        setTipA('')
    }

  return (
    <div className="result-display">
        <div className="result">
            <div>
                <h3>Tip Amount</h3>
                <p>/ person</p>
            </div>
            <h2 className="amount">{tipAmount}</h2>
        </div>
        <div className="result">
            <div>
                <h3>Total Amount</h3>
                <p>/ person</p>
            </div>
            <h2 className="amount">{totalAmount} </h2>
        </div>
        <div className="result">
            <div>
                <h3>Total Amount</h3>
            </div>
            <h2 className="amount">{total} </h2>
        </div>
        <button onClick={handleClick} className="reset">RESET</button>
    </div>
  )
}
