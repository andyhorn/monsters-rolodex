import "./card.styles.css";

const Card = ({ monster }) => {
    console.log(monster)
    const { email, id, name } = monster;
    const imgSrc = `https://robohash.org/${id}?set=set2&size=180.180`;

    return (
        <div className="card-container">
            <img alt="monster" src={imgSrc} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;