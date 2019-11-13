import React from 'react';
import styled from 'styled-components';

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Border = styled.div`
  border: 2px solid black;
  width: 30%;
  min-width: 300px;
`;

const RenderTeam = props => {
  // props.list = list to render

  const list = props.list
  return (
    <FlexWrap>
      <Border>
      {list.map(d => (
        <Border key={list.length}>
          <h2>Name: {d.name}</h2>
          <div>
            <p>Email: {d.email}</p>
            <p>Role: {d.role}</p>
            <p>CatchPhrase: {d.catchphrase}</p>
          </div>
        </Border>
      ))}
      </Border>
    </FlexWrap>
  )
}

export default RenderTeam;