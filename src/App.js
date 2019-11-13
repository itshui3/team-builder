import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import {TeamList} from './data/TeamList';


import Form from './components/Form';
import RenderTeam from './components/RenderTeam';

import './App.css';

function App() {

  const [teamList, setTeamList] = useState(TeamList);

  const addToTeam = teammate => {
    setTeamList([...teamList, teammate]);
  }

  return (
    <div className="App">
      {/* Input Form */}
      <Route path="/" render={props => <Form {...props} addToTeam={addToTeam} />} />
      {/* List of Team Rendered Out */}
      <Route path="/" render={props => <RenderTeam {...props} list={teamList} />} />
    </div>
  );
}

export default App;
