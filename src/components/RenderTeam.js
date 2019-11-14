import React from 'react';
import styled from 'styled-components';

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
`;

const Border = styled.div`
  border: 2px solid black;
  width: 30%;
  min-width: 300px;
`;

const RenderTeam = props => {
  // props.list == list to render

  // props.modifyTeamMate == function to edit card

  //setMemberToEdit && memberToEdit == you know. 

  const handleChanges = e => {
    console.log("...Okay, let's make some changes then");
    console.log(e.target.id);

    props.setMemberToEdit(e.target.id);
  }

  return (
    <FlexWrap>

      {props.list.map((d, i) => (
        <Border key={i}>
          <h2>Name: {d.name}</h2>
          <div>
            <p>Email: {d.email}</p>
            <p>Role: {d.role}</p>
            <p>CatchPhrase: {d.catchphrase}</p>
          </div>
          <button id={i} onClick={handleChanges}>Make Some Changes</button>
        </Border>
      ))}

    </FlexWrap>
  )
}

export default RenderTeam;