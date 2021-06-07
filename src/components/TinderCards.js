import React, {useEffect, useState} from 'react';
import "./styles/TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "../axios";

const TinderCards = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        // run once the component loads
        async function fetchData() {
            // we make the request to this endpoint
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();
    }, []);

    console.log(people)

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + "left on screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (

                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >

                        <div className="card" style={{ backgroundImage: "url(" + person.imgUrl + ")" }}>
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    );
};

export default TinderCards;
