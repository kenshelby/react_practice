import { useState } from "react"


const SliderFilter = (props) => {

    const { onRatingChange } = props;
    const [slider, setSlider] = useState(3);

    const handleChange = (e) => {
        const value = Number(e.target.value)
        setSlider(value);
        console.log("inside slider method", value)
        onRatingChange(value);
    }

    return(
        <div className="slider-container">
        <label className="slider-filter-name">Min rating: {slider}</label>
        <input 
            type="range" 
            min="1" 
            max="5" 
            step="0.1"
            value={slider} 
            className="slider" 
            id="myRange"
            onChange={handleChange}></input>            
        </div>
    )
}

export default SliderFilter;