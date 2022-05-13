import {useState} from "react";
const Form = (props) => {

        const [starState, setStarState] = useState(null);

        const handleClick = () => {
            props.getStar(starState);
            setStarState(null)
        }
    return (
    <div className="button">
        <button onClick={() => handleClick()}>Show next set of ships</button>
        <a href="*"><button>Back to beginning</button></a> 
    </div>
    )
}

export default Form;