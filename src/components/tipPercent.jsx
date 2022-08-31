export default function TipPercent({tip, setTip}) {
    let bColor1, bColor2, bColor3, bColor4, bColor5 
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
        bColor1 = 'rgb(22, 43, 85)'
        color1 = "#fff"
    } else if (tip === tip2) {
        bColor2 = 'rgb(22, 43, 85)'
        color2 = "#fff"
    } else if (tip === tip3) {
        bColor3 = 'rgb(22, 43, 85)'
        color3 = "#fff"
    } else if (tip === tip4) {
        bColor4 = 'rgb(22, 43, 85)'
        color4 = "#fff"
    } else if (tip === tip5) {
        bColor5 = 'rgb(22, 43, 85)'
        color5 = "#fff"            
    }


  return (
    <>
        <h3>Sellect Tip Percent</h3>
        <div className="tip-percents">
            <p onClick={handleClick1} style={{backgroundColor: bColor1, color: color1}} className="tip-percent">{tip1}%</p>
            <p onClick={handleClick2} style={{backgroundColor: bColor2, color: color2}} className="tip-percent">{tip2}%</p>
            <p onClick={handleClick3} style={{backgroundColor: bColor3, color: color3}} className="tip-percent">{tip3}%</p>
            <p onClick={handleClick4} style={{backgroundColor: bColor4, color: color4}} className="tip-percent">{tip4}%</p>
            <p onClick={handleClick5} style={{backgroundColor: bColor5, color: color5}} className="tip-percent">{tip5}%</p>
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
