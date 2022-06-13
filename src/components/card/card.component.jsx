import { Component } from "react";
import "./card.styles.css";

export default class MonsterCard extends Component {
    render() {
        const { email, id, name } = this.props.monster;

        return (
            <div className="card-container">
                <img 
                    alt="monster"
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}