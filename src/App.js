import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const JSON_PLACEHOLDER_URI = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue: ''
    };
  }

  componentDidMount() {
    fetch(JSON_PLACEHOLDER_URI)
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return {
            monsters: users
          }
        });
      });
  }

  render() {
    const { monsters, searchValue } = this.state;
    const { handleSearchChange, matchesSearchValue } = this;
    const filteredMonsters = monsters.filter((monster) => matchesSearchValue(monster, searchValue));

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox className="monsters-search-box" onSearchHandler={handleSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  matchesSearchValue = (monster, searchValue) => {
    return monster.name.toLowerCase().includes(searchValue);
  }

  handleSearchChange = (searchValue) => {
    this.setState(() => {
      return { searchValue };
    });
  }
}

export default App;
