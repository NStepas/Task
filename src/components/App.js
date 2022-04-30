import React, { useEffect, useState } from "react";
import AllFacts from "./AllFacts";
import "./App.css";
import SelectedFacts from "./SelectedFacts";

const App = () => {
const [savedFacts, setSavedFacts] = useState('');

    const SaveSelectedFactsHandler = (savedFacts) => {
        setSavedFacts(savedFacts)
        console.log(savedFacts)
    }

return (<div className="main-container">
    <div className="row"> 
        <h1> All Facts </h1>
        <AllFacts onAddSelectedfactsHandler={SaveSelectedFactsHandler}/> 
    </div>
    <div className="row">
        <h1>Selected Facts</h1> 
        <SelectedFacts onChoosenFacts={savedFacts}/>
    </div>
    </div>
);

};

export default App;
