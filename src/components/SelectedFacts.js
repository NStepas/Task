import React, {useState} from "react";
import "./App.css"


const SelectedFacts = (props) => {
    const [choosenFacts, setChoosenFacts] = useState('');
    const clearSelectedValues = (() => {
        setChoosenFacts(props.onChoosenFacts)
    });

return <div >
    <ul>
        <li onChange={clearSelectedValues}> 
        </li>
    </ul>
</div>
}

export default SelectedFacts;