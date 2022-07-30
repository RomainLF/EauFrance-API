import styled from 'styled-components';

export default styled.section`
  background-color: #74bde0;
  margin-top: 1em;
  width: 35vw;
  height: 5vh;
  border-radius: 0.5em;
  display: flex;
  color: #000000;
  .cor {
    width: 60%;
    margin-left: 1%;
  }
  button {
    margin-left: 5%;
    width: 10vw;
    border: 2px solid #4b8f29;
    text-transform: uppercase;
    &.active {
      background-color: #2086b6;
    }
    &.toto {
      background-color: #d59e1d;
    }
  }
`;
