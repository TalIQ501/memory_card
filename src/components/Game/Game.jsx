import { useEffect, useState } from "react";
import { MemoryCard } from "../Card/MemoryCard";
import { fetchTeams } from "../../func/fetchTeams";
import { getTeam } from "../../func/getData";
import { ScoreCounter } from "../ScoreCounter/ScoreCounter";

export const Game = () => {
    const [data, setData] = useState();
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        const retrievedData = async () => {
            const result = await fetchTeams()
            console.log(result);
            setData(result)
        };
        retrievedData();
    }, [])

    useEffect(() => {
        if (!data) return;
        
        const newCards = [];
        for (let i = 0; i < 8; i++) {
            while (true) {
                const newCard = getTeam(data);
    
                const exists = newCards.find(team => team.id === newCard.id);

                if (!exists) {
                    newCards.push(newCard);
                    break;
                };                
            }
        }
        setCards(newCards);
    }, [data, selected])

    const clickHandler = team => {
        console.log('Clicked')
        if (selected.some(entry => entry === team)) {
            if (score > highScore) setHighScore(score)
            setScore(0);
            setSelected([]);
            return;
        }
        setScore(score + 1);
        setSelected([...selected, team])
        return
    };

    return (
        <div id="game-div">
            <ScoreCounter
                s={score}
                hs={highScore}
             />
            {
                cards.map(card => (
                    <MemoryCard 
                        key={card.id} 
                        title={card.name}
                        logo={card.logo}
                        onClickFunc={() => clickHandler(card.id)}
                    />
                    )
                )
            }
        </div>
    );
}