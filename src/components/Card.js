
import { useEffect, useState } from "react";

export const Card = (props) => {
    const [loading, setLoading] = useState(true);
    const [facts, setFacts] = useState();

    useEffect(() => {
        console.log("Card.js rendered");
        setLoading(true);
        fetch(props.url)
        .then((res) => {
            return res.json()})
        .then((data) => {
            console.log(data)
            return setFacts(data)
        })
        
        .then(() => setLoading(false));
    }, []);
if(loading) return <div>Loading...</div>;
return (
    <div>
        {props.name}
    </div>
);
};