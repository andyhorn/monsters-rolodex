import { Component } from "react";
import "./search-box.styles.css";

export default class SearchBox extends Component {
    render() {
        const { onSearchChange } = this;
        return (
            <input 
                className={`search-box ${this.props.className}`}
                type="search"
                placeholder="search monsters"
                onChange={onSearchChange}
            />
        );
    }

    onSearchChange = (event) => {
        const searchValue = event.target.value.toLowerCase();
        this.props.onSearchHandler(searchValue);
    }
}