import './card.css'

const Card = ({ card, handleChoice }) => {

    const handleClick = () => {
        handleChoice(card)
    }
    return (
        <div className='cardGame' key={card.id}>
            <img className='front' src={card.src} alt="Front of card" />
            <img className={`back ${card.display}`} onClick={handleClick} src='img/cover.png' alt="Back of card" />
        </div>
    );
}
export default Card;