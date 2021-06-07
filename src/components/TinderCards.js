import React, {useState} from 'react';
import "./styles/TinderCards.css";
import TinderCard from "react-tinder-card";

const TinderCards = () => {

    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        },

        {
            name: "Jeff Bezos",
            url: "https://api.time.com/wp-content/uploads/2020/07/jeff-bezos.jpg",
        },

        {
            name: "Lauren Bezos",
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeff-bezos-and-lauren-sanchez-attend-tom-ford-autumn-winter-news-photo-1583141278.jpg",
        },

        {
            name: "Michael Bezos",
            url: "https://i.insider.com/5e2f18d45bc79c748d69ba15?width=1136&format=jpeg",
        },


    ]);

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

                        <div className="card" style={{ backgroundImage: "url(" + person.url + ")" }}>
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    );
};

export default TinderCards;
