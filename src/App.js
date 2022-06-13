import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const JSON_PLACEHOLDER_URI = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value) => {
    setSearchValue(value);
  }

  useEffect(() => {
    fetch(JSON_PLACEHOLDER_URI)
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filteredList = monsters.filter((monster) => monster.name.toLowerCase().includes(searchValue));
    setFilteredMonsters(filteredList);
  }, [monsters, searchValue]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox className="monsters-search-box" onSearchHandler={handleSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
