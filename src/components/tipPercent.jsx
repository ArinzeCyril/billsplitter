export default function TipPercent({tip, setTip}) {
    let color1, color2, color3, color4, color5 

    const handleClick1 = () => {
        return setTip(5);
    }
    const handleClick2 = () => {
        return setTip(10)
    }
    const handleClick3 = () => {
        return setTip(20)
    }
    const handleClick4 = () => {
        return setTip(50)
    }
    const handleClick5 = () => {
        return setTip(75)
    }
    
    const handleClick = () => {
        return setTip('')
    }
    const handleChange = (e) => {
        return setTip(e.target.value)
    }

    const tip1 = 5;
    const tip2 = 10;
    const tip3 = 20;
    const tip4 = 50;
    const tip5 = 75;

    if (tip === tip1) {
        color1 = 'blue'
    } else if (tip === tip2) {
        color2 = 'blue'
    } else if (tip === tip3) {
        color3 = 'blue'
    } else if (tip === tip4) {
        color4 = 'blue'
    } else if (tip === tip5) {
        color5 = 'blue'
    }


  return (
    <>
        <h3>Sellect Tip Percent</h3>
        <div className="tip-percents">
            <p onClick={handleClick1} style={{backgroundColor: color1}} className="tip-percent">{tip1}%</p>
            <p onClick={handleClick2} style={{backgroundColor: color2}} className="tip-percent">{tip2}%</p>
            <p onClick={handleClick3} style={{backgroundColor: color3}} className="tip-percent">{tip3}%</p>
            <p onClick={handleClick4} style={{backgroundColor: color4}} className="tip-percent">{tip4}%</p>
            <p onClick={handleClick5} style={{backgroundColor: color5}} className="tip-percent">{tip5}%</p>
            <input 
                className="tip-percent tip-input"
                type="number"
                onClick={handleClick}
                onChange={handleChange}
                placeholder="custom %" 
            />
        </div>
    </>
  )
}
