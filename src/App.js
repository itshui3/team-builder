import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import {TeamList} from './data/TeamList';

import Form from './components/Form';
import RenderTeam from './components/RenderTeam';

import './App.css';

function App() {

  const [teamList, setTeamList] = useState(TeamList);
  const [memberToEdit, setMemberToEdit] = useState();

  const addToTeam = teammate => {
    setTeamList([...teamList, teammate]);
  }

  const modifyHui = e => {
    const newList = teamList.slice();
    newList[0] = {
      name: 'hui',
      email: 'heyitshui@gmail.com',
      role: 'button pusher',
      catchphrase: 'I made it mom!'
    }
    newList[1] = {
      name: 'edwin',
      email: 'bigbaws@riverboi.com',
      role: 'chair sitter',
      catchphrase: 'I got demoted to make room for hui\'s much deserved promotion'
    }
    setTeamList(newList);
  }

  const modify = teammate => {
    const modList = teamList.slice();
    modList[memberToEdit] = teammate;
    setTeamList(modList);

  }



  return (
    <div className="App">
      {/* Input Form */}
      <Route path="/" render={props => <Form {...props} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} modify={modify} />} />
      {/* List of Team Rendered Out */}
      <Route path="/" render={props => <RenderTeam {...props} list={teamList} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} />} />

      <button onClick={modifyHui}>Give Hui a Promotion!</button>
    </div>
  );
}

export default App;
