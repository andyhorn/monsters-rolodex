import "./card.styles.css";

const Card = ({ monster }) => {
    const { email, id, name } = monster;
    const imgSrc = `https://robohash.org/${id}?set=set2&size=180x180`;

    return (
        <div className="card-container">
            <img alt="monster" src={imgSrc} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;