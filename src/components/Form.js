import React, {useState} from 'react';
import styled from 'styled-components';

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
`;

const Slabel = styled.label`
  padding: 10px;
`;

const Form = props => {
  // props.addToTeam to add an object to team list

  const [teammate, setTeammate] = useState({
    name: "",
    email: "",
    role: "",
    catchphrase: ""
  });

  const handleInput = e => {
    setTeammate({...teammate, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    // log teammate into last on list
    e.preventDefault();
    props.addToTeam(teammate);
    setTeammate({
      name: "",
      email: "",
      role: "",
      catchphrase: ""
    })
  }

  return (
      <FlexForm onSubmit={handleSubmit}>
        <Slabel>
          Name: 
          <input 
          type='text'
          name="name" 
          id='name'
          onChange={handleInput}
          value={teammate.name}
          />
        </Slabel>
        <Slabel>
          Email: 
          <input 
          type='text'
          name='email'
          id='email'
          onChange={handleInput}
          value={teammate.email}
          />
        </Slabel>
        <Slabel>
          Role: 
          <input 
          type='text'
          name='role'
          id='role'
          onChange={handleInput}
          value={teammate.role}
          />
        </Slabel>
        <Slabel>
          Catchphrase: 
          <textarea 
          type='text'
          name='catchphrase'
          id='catchphrase'
          onChange={handleInput}
          value={teammate.catchphrase}
          />
        </Slabel>
   
        <button type="submit">Submit</button>


      </FlexForm>

  )
}

export default Form;