import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
import '../styles/index.css';

class App extends Component {
  render() {
     const avenger = {
      color: 'black',
    }
    return (
      <div className="App">
        <h1 style={avenger}>Avengers</h1>
        <div className="col-md-4">
          <CharacterList />
        </div>
        <div className="col-md-4">
          <HeroList />
        </div>
        <div className="col-md-4">
          <SquadStats />
        </div>
      </div>
    )
  }
}

export default App;
