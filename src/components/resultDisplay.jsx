export default function ResultDisplay( {valueA, setValueA, tipA, setTipA, peopleNo, setPeopleNo, tip, setTip} ) {
    let tipAmount = "$0.00"
    let totalAmount = "$0.00"
    let total = "$0.00"
    let tips, tipAmt

    //valueA = bill amount entered in input
    //tipA = tip amount entered in input
    //checking if a tip amount or tip percentage was entered
    //this if will run if a tip amount was entered
    if (tipA >= 1) {
        if (valueA >= 1 && peopleNo >= 1) {
            tipAmt = tipA / peopleNo
            tipAmount = `$${parseFloat(tipAmt).toFixed(2)}`
            let x = valueA / peopleNo
            let tA = `${x + tipAmt}`
            totalAmount = `$${parseFloat(tA).toFixed(2)}`
            let t = `${parseFloat(tipA) + parseFloat(valueA)}`
            total = `$${parseFloat(t).toFixed(2)}`
        }

    } else {
 
        //tip = percentage of tip selected/entered
        //checking if a percentage was sellected or not
        //this if will run if a percentage was sellected or inputed and else-if if the percentage tip was ignored
        if (tip >= 1 && valueA >= 1 && peopleNo >= 1) {
            let x = tip / 100
            let y = x * valueA
            let i = valueA / peopleNo
            tips = y / peopleNo
            tipAmount = `$${parseFloat(tips).toFixed(2)}`
            let tA = `${i + tips}`
            totalAmount = `$${parseFloat(tA).toFixed(2)}`
            let t = `${parseFloat(tA).toFixed(2) * peopleNo}`
            total = `$${parseFloat(t).toFixed(2)}` 

        } else if (valueA >= 1 && peopleNo >= 1) {
            let x = valueA / peopleNo
            totalAmount = `$${parseFloat(x).toFixed(2)}`
            total = `$${parseFloat(valueA).toFixed(2)}`
        }
    }
    
    //this function would run if reset button is clicked
    const handleClick = () => {
        setValueA('')
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
