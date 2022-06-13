import "./search-box.styles.css";

const SearchBox = ({ onSearchHandler, className }) => {
    const classNames = `search-box ${className}`;
    const onSearchChange = (event) => {
        const searchValue = event.target.value.toLowerCase();
        onSearchHandler(searchValue);
    }

    return (
        <input className={classNames} type="search" placeholder="search monsters" onChange={onSearchChange} />
    );
}

export default SearchBox;