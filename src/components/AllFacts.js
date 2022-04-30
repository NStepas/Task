import React, {useState, useEffect} from "react";
import { Card } from "./Card";

const AllFacts = (props) => {
    const url = `https://catfact.ninja/facts`;    
    const [facts, setFacts] = useState([]);
    const [selectedFacts, setSelectedFacts] = useState('');



useEffect(() => {
    fetch(url)
    .then((res) =>  res.json())
    .then((result) =>  setFacts(result.data)); // [resuls...]

},[])

   const addselectedFactsHandler = (fact) => {
    //    console.log(fact.target.value)
   setSelectedFacts(fact.target.value)
   };
   props.onAddSelectedfactsHandler(selectedFacts);

return (<div> 
            <ul>
           {facts.map((fact, index) => (
            <li key={index}>
                {<Card 
                key={fact.fact} 
                name={fact.fact} 
                url={url} 
                />}
                 <button value={fact.fact} onClick={addselectedFactsHandler}
                    >Save the selected fact
                </button>
            </li>
                ))}
            </ul>
  </div>)
}

export default AllFacts;